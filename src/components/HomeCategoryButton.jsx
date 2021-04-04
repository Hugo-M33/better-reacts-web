import styled from 'styled-components'

const StyledButton = styled.button`
background: #dddcdc;
background: ${props => props.selected? "#000000" : "#dddcdc"};
color: ${props => props.selected? "#ffffff" : "#000000"};
border-radius: 20px;
font-size: 1.5rem;
padding: 0.2rem 0.7rem;
margin: 2px 5px;
border: 1px solid black;
font-weight: 600;
cursor: pointer;
`

const HomeCategoryButton = ({category, selected, setter}) => {
    return (
        <StyledButton onClick={() => setter(category)} selected={selected}>
            {category}
        </StyledButton>
    )
}

export default HomeCategoryButton
