import { useState } from "react";
import GenreMultiSelect from "../Multi DropDown/MultiDropDown.component";
import "./CinemaScope.styles.scss";
import Markdown from "react-markdown"
import { GenerateScript } from "../../utils/scriptgenerate";
import { ProfileCard } from "../Profile Card/ProfileCard.component";
import { Spinner } from "flowbite-react";

export const CinemoScope = () => {
    const [genes, setGenes] = useState([])
    const [query, setQuery] = useState("")
    const [script, setScript] = useState(null)
    const [loading, setloading] = useState(false)

    const handleGenreSelection = (selectedGenres) => {
        setGenes(selectedGenres);
        console.log('Selected genres:', genes);
      };

    const HandleSubmit = async () => {
        setloading(true)
        const data = await GenerateScript(query, genes)
        setScript(data)
        setloading(false)
    }
    return (
        <div className="container">
            <div className="filters-bar">
            <p className="title">CinemaScope: AI-Powered End-to-End Script Writing Assistant</p>
            <div className="inputs">
            <input type="text" name="query" value={query} onChange={e => setQuery(e.target.value)} className="query" placeholder="Ex: A script for movie like Into the Wild but also has some action" />
            <GenreMultiSelect onSelectionChange={handleGenreSelection}/>
            <button onClick={HandleSubmit}>Generate</button>
            </div>
            </div>
            <div className="Script-container">
                {loading && <p>loading...</p>}
                {script && <Markdown>{script}</Markdown>}
            </div>
        </div>
    )
}