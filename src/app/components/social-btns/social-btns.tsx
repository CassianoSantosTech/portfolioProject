import { GitHubIcon } from "../icons/gitHub";
import { InstagramIcon } from "../icons/insta";
import { LinkedinIcon } from "../icons/linkedin";

import "./social-btns.css"
export function SocialBtns() {
    return(
        <div className="social">
            <a href="https://www.instagram.com/cassianosantos_300/">
                <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/cassiano-santos-14423921b/">
                <LinkedinIcon />
            </a>
            <a href="https://github.com/CassianoSantosTech">
                <GitHubIcon />
            </a>
        </div>
    )
}
