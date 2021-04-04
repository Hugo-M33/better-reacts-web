import styled from 'styled-components'

const StyledNav = styled.nav`
    height: 100px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

const Menu = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`




const NavBar = () => {
    return (
        <StyledNav>
            <Menu>
                <div>Home</div>
                <div>Submit</div>
            </Menu>
        </StyledNav>
    )
}

export default NavBar
