import styled from 'styled-components'
import {useState, useEffect} from "react"
import SubmitCategoryButton from '../components/SubmitCategoryButton'


const APPLOGO = "https://risibank.fr/cache/stickers/d1591/159154-full.png"
const Categories = ["All", "Video", "Image", "Audio", "Copypasta"];

const CategorySelectorArea = styled.div`
width: 60%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
`


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
    height: ${props => props.big ? "15rem ": "2.5rem"};
    line-height: ${props => props.big ? "1.125rem ": "2.5rem"};
    font-size: ${props => props.big ? "1.125rem ": "2rem"};
    font-family: sans-serif;
    font-weight: ${props => props.big ? 400 : 600};
    resize: none;
    box-sizing: border-box;
    padding: 0 1%;
    position: "relative";
    
`

const Page = styled.main`
display: grid;
grid-template-rows: ${props => props.big ? "15vh 12.5vh 40vh 1fr" : "20vh 15vh 10vh 1fr"};
`

const SubTitle = ({children}) => {
    return (<h2>{children}</h2>)
}

const SubmitPage = ({assets, setAssets,big}) => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [subText,setSubText] = useState("Choose a category")
    const [charCounter,setCharCounter] = useState(0);
    const [query,setQuery] = useState("");
    const [isTooLong,setIsTooLong] = useState(false);

    useEffect(() => {
        if (query.length > 2000) {
            setCharCounter(`Max size is 2000 characters ! (${query.length})`); 
            setIsTooLong(true);
        }else {

                setCharCounter(query.length);
                setIsTooLong(false);
            }
        
    }, [query])

    const updateSubText = cat => {
        let str = ""
        switch(cat) {
            case "Video":
                str = "Accepted : .mp4 .webm .mov"
                break;
            case "Image":
                str = "Accepted : .jpg .jpeg .JPG .JPEG .png .PNG .gif and .gifv"
                break;
            case "Audio":
                str = "Accepted : .wav .mp3 .ogg"
                break;
            case "Copypasta":
                str = "Copy your pasta !"
                break
                        }
                        console.log(str)
        setSubText(str);
    }

    const FieldText = styled.legend`
    color: ${props => props.isTooLong ? "red" : "black"};
    `

    

    

    

    return (
        <Page big={selectedCategory == "Copypasta"}>
            <HomeLogo src={APPLOGO} alt="Pascal Praud" />
            <SubLogo>
                <h1>Submit your own</h1>
                <SubTitle>{subText}</SubTitle>
            </SubLogo>
            {selectedCategory != "All" && 
            selectedCategory == "Copypasta" ? (
            <fieldset style={{placeSelf: "center", width: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <FieldText isTooLong={isTooLong}>{charCounter}</FieldText>
            <SearchBar style={{width:"100%"}} big={selectedCategory == "Copypasta"} spellCheck="false" onChange={e => setQuery(e.target.value.trim())} defaultValue={query}>
                
                </SearchBar>
            </fieldset> ):
            (<SearchBar big={selectedCategory == "Copypasta"} spellCheck="false" onChange={e => setQuery(e.target.value.trim())} defaultValue={query}>
                
            </SearchBar>)
                }
                
            <CategorySelectorArea>
                {Categories.filter(c => c != "All").map(c => <SubmitCategoryButton key={"catButton" + c} setSubText={updateSubText} category={c} selected={c === selectedCategory} setter={setSelectedCategory}></SubmitCategoryButton>)}
            </CategorySelectorArea>
            
        </Page>
    )
}

export default SubmitPage
