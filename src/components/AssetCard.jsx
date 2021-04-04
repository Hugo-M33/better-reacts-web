import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid grey;
box-shadow: 3px 6px 15px rgba(0, 0, 0, 0.2);
border-radius: 10px;
`
const AssetCard = ({key, link}) => {
    return (
        <Card>
           <h3>{key}</h3> 
        </Card>
    )
}

export default AssetCard
