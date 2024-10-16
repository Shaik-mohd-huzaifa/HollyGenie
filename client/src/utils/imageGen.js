import axios from "axios";

export const ImageGeneration = async (prompt) => {
    const response = await axios.post('http://127.0.0.1:8000/ImageGen', 
        {
            "prompt": prompt
  });
    const data = response.data;
    return data.url
}
