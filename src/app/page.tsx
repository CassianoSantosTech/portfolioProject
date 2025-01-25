'use client';
import { useState } from "react";
import AboutSection from "./components/about-section/about-section";
import ContactsSection from "./components/contacts-section/contacts-section";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ProjectSection from "./components/projects-section/projects-section";
import WelcomeSection from "./components/welcome-section/welcome-section";
import "./globals.css";
import "./styles/home.css";

export interface HeaderProps {
  onChangeViewMode: (viewMode: string) => void;
}

export default function Home() {
  const [viewMode, setViewMode] = useState("normal");

  const handleChangeViewMode = (mode: string) => {
    setViewMode(mode);
  }
  return (
    <div className={`app ${viewMode}`}>
      <Header onChangeViewMode={handleChangeViewMode} />
      <main>
        <WelcomeSection />
        <AboutSection />
        <ProjectSection />
        <ContactsSection />
        <Footer />
      </main>
    </div>
  );
}
