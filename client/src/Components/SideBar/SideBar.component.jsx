import { Link } from "react-router-dom"
import "./SideBar.styles.scss"
import { TbSpeakerphone } from "react-icons/tb";
import { MdEmojiEvents } from "react-icons/md";
import { SiTeamspeak } from "react-icons/si";
import { PiFilmSlate } from "react-icons/pi";
import { IoIosImages } from "react-icons/io";




export const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="header">
            <img src="/logo.jpg" alt="" />
<h2>HollyGenie</h2>
            </div>
            <ul>
                <li><PiFilmSlate width="20px" height="20px"/>
<Link to="/">
CinemaScope AI</Link></li>
                <li><SiTeamspeak/>
<Link to="dialogueGeneration">Dailogue Generation</Link>
</li>
                <li><TbSpeakerphone/>
<Link to="soundGeneration">Sounds Generation</Link>
</li>
                <li><IoIosImages/>
<Link to="imageGen">Image Generation</Link></li>
            </ul>
        </div>
    )
} 
