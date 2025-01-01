import { EmailIcon } from "../icons/email";
import { GitHubIcon } from "../icons/gitHub";
import { InstagramIcon } from "../icons/insta";
import { LinkedinIcon } from "../icons/linkedin";

import "./social-btns.css";
export function SocialBtns() {
    return (
        <div className="social">
            <a href="https://www.instagram.com/cassianosantos_300/" target="_blank">
                <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/cassiano-santos-14423921b/" target="_blank">
                <LinkedinIcon />
            </a>
            <a href="https://github.com/CassianoSantosTech" target="_blank">
                <GitHubIcon />
            </a>
            <a href="mailto:cassianosantosneto@gmail.com?subject=Olá Cassiano&body=Olá Cassiano, tudo bem? Gostaria de falar com você sobre..." target="_blank">
                <EmailIcon />
            </a>
        </div>
    )
}
