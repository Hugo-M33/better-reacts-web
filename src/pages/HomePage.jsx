import styled from 'styled-components'
import {useState, useEffect} from "react"
import HomeCategoryButton from '../components/HomeCategoryButton'

const Categories = ["All", "Video", "Image", "Audio", "Copypasta"];

const CategorySelectorArea = styled.div`
width: 60%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const APPLOGO = "https://risibank.fr/cache/stickers/d1591/159154-full.png"

const HomeLogo = styled.img`
    height:80%;
    place-self: center;
`

const SubLogo = styled.section`
display: flex;
flex-direction: column;
align-items: center;
h1 {
    margin: 2% 0 0 0;
}

h2 {
    font-size: 1.2rem;
    font-weight: 300;
}
`

const SearchBar = styled.textarea`
    place-self: center;
    width: 50%;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 2rem;
    font-family: sans-serif;
    font-weight: 600;
    resize: none;
    box-sizing: border-box;
    padding: 0 1%;
    
`

const Page = styled.main`
display: grid;
grid-template-rows: 20vh 15vh 10vh 1fr;
`
const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [assets, setAssets] = useState([])

    const fetchData =  async () => {
        const data = await fetch("http://localhost:59925/.netlify/functions/getAssets", {method: 'GET'}).then(d => d.json()).then(r => console.log(r))
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Page>
            <HomeLogo src={APPLOGO} alt="Pascal Praud" />
            <SubLogo>
                <h1>Better Reacts</h1>
                <h2>A Discord bot for advanced memers</h2>
            </SubLogo>
            <SearchBar spellCheck="false" />
            <CategorySelectorArea>
                {Categories.map(c => <HomeCategoryButton key={"catButton" + c} category={c} selected={c === selectedCategory} setter={setSelectedCategory}></HomeCategoryButton>)}
            </CategorySelectorArea>
        </Page>
    )
}

export default HomePage
