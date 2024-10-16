import axios from "axios"
export const tts = async (prompt) => {
    try{
        const data = await axios.post("http://127.0.0.1:8000/texttospeech", {"prompt": prompt})
        return data.data
    }catch(error){
        console.log(error)
    }
} 
export const soundGen = async (prompt) => {
    try{
        const data = await axios.post("http://127.0.0.1:8000/soundCreation", {"prompt": prompt})
        return data.data
    }catch(error){
        console.log(error)
    }
} 