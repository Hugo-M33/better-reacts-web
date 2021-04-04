import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid grey;
box-shadow: 3px 6px 15px rgba(0, 0, 0, 0.2);
border-radius: 10px;
`

const getEmoji = (type) => {
    switch(type) {
        case "Video":
            return "🎥"
        case "Image":
            return "🖼️"
        case "Copypasta":
            return "📝"
        case "Audio":
            return "🔊"
    }
}
const AssetCard = ({title, link, type}) => {
    return (
        <Card>
            {type === "Image" && <img style={{width: "80%"}} src={link}/>}
           <h3>{title} {getEmoji(type)}</h3> 
        </Card>
    )
}

export default AssetCard
