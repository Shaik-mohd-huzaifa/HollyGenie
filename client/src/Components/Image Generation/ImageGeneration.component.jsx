import { useState } from "react"
import "./ImageGeneration.styles.scss"
import { ImageGeneration } from "../../utils/imageGen"

export const ImageGen = () => {
    const [prompt, setPrompt] = useState("")
    const [url, seturl] = useState('')

    async function HandleSubmit(){
        const Imageurl = await ImageGeneration(prompt)
        seturl(Imageurl)
    }

    return (
        <div className="container">
            <h2>Image Generator - AI Generated Images</h2>

            <div className="inputContainer">
                <textarea id="message" onChange={e => setPrompt(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: Sound of water with birds singing"></textarea>
                <button disabled={!prompt} onClick={HandleSubmit}>Generate</button>
            </div>
            <div className="imageContainer">
                {
                    url &&
                <img width="500px" src={url} alt="" />
                }
                <button>Download</button>
            </div>
    </div>
    )
}