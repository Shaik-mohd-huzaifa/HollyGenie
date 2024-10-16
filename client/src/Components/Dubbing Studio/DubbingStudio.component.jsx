import { useState } from "react"
import "./DubbingStudio.styles.scss" 
import { soundGen } from "../../utils/audioGenerations"

export const SoundGeneration = () => {
    const [prompt, setPrompt] = useState('')
    const [audioFile, setAudioFile] = useState('')

    async function HandleSubmit(){
        const data = await soundGen(prompt)
        console.log(data.filename)
        setAudioFile(data.filename)
    } 



    return (
        <div className="container">
            <h2>Sound Generator - AI Generated Sound</h2>

            <div className="inputContainer">
                <textarea id="message" onChange={e => setPrompt(e.target.value)} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: Sound of water with birds singing"></textarea>
                <button disabled={!prompt} onClick={HandleSubmit}>Generate</button>
            </div>
            <div className="outputContainer">
            <h2>Generated Sound</h2>
            {
                audioFile && 
                    <div className="audioContainer">
                    <audio controls>
                        <source src={`../audio/${audioFile}.mp3`} type="audio/mp3" />
                        Your browser does not support the audio tag.
                    </audio>
                    <a href={`./audio/${audioFile}.mp3`} download>
                        <button>Download Audio</button>
                    </a>
            </div>
            }
        </div>
    </div>
    )
}