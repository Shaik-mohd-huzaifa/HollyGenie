import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Dashboard } from "./Dashboard/Dasboard.component";
import { CinemoScope } from "../Components/CinemaScope/CinemaScope.component";
import { DialogueGeneration } from "../Components/Dailogue Generation/DialogueGeneration.component";
import { SoundGeneration } from "../Components/Dubbing Studio/DubbingStudio.component";
import { ImageGen } from "../Components/Image Generation/ImageGeneration.component";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <div>Error Page</div>,
        children: [
            {
                index: true,
                element: <CinemoScope/>
            },
            {
                path: "dialogueGeneration",
                element: <DialogueGeneration/>
            },
            {
                path: "soundGeneration",
                element: <SoundGeneration/>
            },
            {
                path: "imageGen",
                element: <ImageGen/>
            }
        ]
    }
])

