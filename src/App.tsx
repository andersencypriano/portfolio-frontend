import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import GradientButton from "./components/Buttons/GradientButton";
import EducationList from "./components/EducationSection/EducationList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import JobList from "./components/JobList/JobList";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import TitleSection from "./components/TitleSection/TitleSection";
import WorksList from "./components/WorksList/WorkList";

import { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import MainMenu from "./components/MainMenu/MainMenu";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Drawer open={open} onOpenChange={setOpen} direction="left">
        <Header />
        <DrawerContent className="bg-[#0a0a0f] border-white/10">
          <div className="p-6">
            <DrawerHeader className="flex justify-between items-center">
              <DrawerTitle className="text-white">Menu</DrawerTitle>
            </DrawerHeader>
            <MainMenu onItemClick={() => setOpen(false)} />
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          id="sobre"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a0f] to-[#0a0a0f]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="relative container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm text-gray-400">Disponível para projetos</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                Andersen Cypriano
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
              Desenvolvedor Front-end
            </p>

            <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
              Criando interfaces modernas e responsivas com foco em performance e experiência do usuário. 
              Especializado em React, Next.js, TypeScript e tecnologias web modernas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GradientButton href="/cv/CurriculoDevPDF.pdf" download="Curriculo_Andersen_Cypriano.pdf">
                Download CV
              </GradientButton>
              <a 
                href="#projetos" 
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-gray-300 border border-white/10 rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                Ver Projetos
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 bg-white" id="experiencia">
          <div className="container mx-auto px-4">
            <TitleSection title="Experiência Profissional" light />
            <JobList />
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 bg-gray-50" id="projetos">
          <div className="container mx-auto px-4">
            <TitleSection title="Projetos" light />
            <WorksList />
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 bg-[#0a0a0f]" id="formacao">
          <div className="container mx-auto px-4">
            <TitleSection title="Formação Acadêmica" />
            <EducationList />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-[#0f0f15] border-t border-white/5" id="contato">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <TitleSection title="Vamos Conversar" />
              
              <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl" />
                
                <div className="relative flex flex-col items-center">
                  <Avatar />
                  
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    Andersen Cypriano
                  </h3>
                  <p className="text-gray-400 mb-6">Desenvolvedor Front-end</p>
                  
                  <p className="text-gray-400 text-sm mb-8 max-w-md">
                    Interessado em trabalhar juntos? Entre em contato pelas redes sociais ou baixe meu currículo.
                  </p>

                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
