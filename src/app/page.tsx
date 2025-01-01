import AboutSection from "./components/about-section/about-section";
import ContactsSection from "./components/contacts-section/contacts-section";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ProjectSection from "./components/projects-section/projects-section";
import WelcomeSection from "./components/welcome-section/welcome-section";
import "./styles/home.css";
import "./globals.css";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <main>
        <WelcomeSection />
        <AboutSection />
        <ProjectSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
