import styled from 'styled-components'

const StyledButton = styled.button`
padding: 10px 15px;
background: ${props => props.isValid ? "#3267b7" : "#7d8591"};
font-weight: 600;
color: ${props => props.isValid ? "white" : "#555555"};
font-size: 1.7rem;
border: none;
border-radius: 15px;
margin: 2% auto;
width: fit-content;
&:hover {
    box-shadow: 2px 4px 10px rgba(0,0,0,0.2);
}
transition: all ease-in-out .3s;
cursor: ${props => props.isValid ? "pointer" : "not-allowed"};
`

const SubmitButton = ({children, isValid, submitFunction}) => {
    const handleSubmit = () => {
        if(isValid) submitFunction()
    }
    return (
        <StyledButton onClick={() => handleSubmit()}isValid={isValid}>
            {children}
        </StyledButton>
    )
}

export default SubmitButton
