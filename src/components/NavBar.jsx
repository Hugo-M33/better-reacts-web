import styled from 'styled-components'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const StyledNav = styled.nav`
    height: 100px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index:3;
    
`

const Menu = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};

const Item = ({ isSelected, onClick, children }) => {
    return (
        <li  style={{listStyle:"none", position: "relative", cursor: "pointer"}}>
          <Link onClick={onClick} to={`/${children.toLowerCase()}`} style={{display: "block", textDecoration: "none", placeSelf:"center"}}>
          <h2 style={{color: isSelected? "white": "black"}}>{children}
        {isSelected && (
          <motion.div
            layoutId="backgroundNav"
            style={{background: "#B73254", opacity: .75, borderRadius: 15, padding: "2%", position: "absolute", top: 10, bottom: 10, left: -10, right: -10, zIndex:-1}}
            initial={false}
            transition={spring}
          ></motion.div>
          )}
          </h2>
      </Link>
      </li>
    );
  }

  const serializePage = str => {
      return str.slice(1).charAt(0).toUpperCase() + str.slice(2);
  }

const NavBar = () => {
    const [pages, setPages] = useState(["Home", "Submit"])
    const [selected,setSelected] = useState(serializePage(window.location.pathname))
    return (
        <AnimateSharedLayout>
            <StyledNav>
                <Menu>
                    {pages.map(p => <Item key={p} isSelected={p == selected} onClick={() => setSelected(p)}>{p}</Item>)}
                </Menu>
            </StyledNav>
        </AnimateSharedLayout>
    )
}

export default NavBar
