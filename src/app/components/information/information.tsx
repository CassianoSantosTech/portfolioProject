
import { SectionTitle } from "../sectionTitle/sectionTitle"
import "./information.css"

export function Information() {
  return (
        <div className="infos">
            <SectionTitle text="Languages" />
            <div className="languages-info">
                <span> 🇧🇷 PT-BR Native Speaker</span>
                <span> 🇺🇸 EN - Intermediary</span>
            </div>

            <SectionTitle text="Educational" />
            <div className="educational-info">
                <span> 🎓 Graduated in Systems Analysis and Development at FIAP</span>
            </div>

        </div>
  );
}
