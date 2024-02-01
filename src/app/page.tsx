import Header from "./components/header/header";

export default function Home() {
  return (
    <main className="">
       <Header />
            <div className="experience">
              <h3>Experience</h3>
              <p>Texto de experiencia</p>

              <div className="experience-time">

              </div>

              <div className="info">

                <h3>Languages</h3>
                <div className="languages-info">
                  <span> 🇺🇸 EN - Intermediary</span>
                  <span> 🇧🇷 PT-BR Native Speaker</span>
                </div>

                <h3>Education</h3>
                <div className="educational-info">
                  <span>🎓</span>
                  <span>Texto sobre minha experiencia academica</span>
                </div>

              </div>

              <div className="buttons">
                <div className="social">

                </div>
                <button>contact me</button>
              </div>



            </div>
    </main>
  );
}
