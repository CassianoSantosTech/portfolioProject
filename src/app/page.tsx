import Image from "next/image";
import Experience from "./components/experience/experience";
import Header from "./components/header/header";
import { Information } from "./components/information/information";
import "./styles/home.css"
import { EmailIcon } from "./components/icons/email";
import { SocialBtns } from "./components/social-btns/social-btns";
export default function Home() {
  return (
    <main className="container">
       <Header />
       <Experience />
       <Information />
  
              <div className="buttons">
                  <SocialBtns />
                <a className="btn-primary" href="mailto:cassianosantosneto@gmail.com">contact me
                  <EmailIcon/>
                 </a>
              </div>
    </main>
  );
}
