import Experience from "./components/experience/experience";
import Header from "./components/header/header";
import { Information } from "./components/information/information";
import "./styles/home.css"
export default function Home() {
  return (
    <main className="container">
       <Header />
       <Experience />
       <Information />
  

              <div className="buttons">
                <div className="social">

                </div>
                <button>contact me</button>
              </div>
    </main>
  );
}
