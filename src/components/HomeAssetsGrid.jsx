import styled from 'styled-components'

const CustomGrid = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-gap: 30px;
width: 80%;
`

const HomeAssetsGrid = ({children}) => {
    return (
        <CustomGrid>
            {children}
        </CustomGrid>
    )
}

export default HomeAssetsGrid
