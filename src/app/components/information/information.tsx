
import { SectionTitle } from "../sectionTitle/sectionTitle"
import "./information.css"

export function Information() {
  return (
        <div className="infos">
            <SectionTitle text="Languages" />
            <div className="languages-info">
                <span> 🇺🇸 EN - Intermediary</span>
                <span> 🇧🇷 PT-BR Native Speaker</span>
            </div>

            <SectionTitle text="Educational" />
            <div className="educational-info">
                <span>🎓</span>
                <span>Texto sobre minha experiencia academica</span>
            </div>

        </div>
  );
}
