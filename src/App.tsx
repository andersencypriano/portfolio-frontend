import "./App.css";
import EducationList from "./components/EducationSection/EducationList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import JobList from "./components/JobList/JobList";
import Skills from "./components/Skills/Skills";
import TitleSection from "./components/TitleSection/TitleSection";
import WorksList from "./components/WorksList/WorkList";


function App() {

  return (
    <>
      <Header />
      <main className="">
        <section className="w-full h-[70dvh] flex items-center mb-4 bg-bg" id="sobre">
          <div className="container mx-auto mt-24">
            <h1 className="text-6xl text-white text-center">
              Olá, sou <span className="text-amber-500 font-bold">Andersen Cypriano</span>
            </h1>
            <p className="my-4 text-center text-white max-w-[50rem] mx-auto">
              Sou desenvolvedor front-end com experiência na criação de interfaces modernas e responsivas, utilizando HTML, CSS, JavaScript, TypeScript, React e Next.js. Trabalho com integração de APIs e foco em performance, usabilidade e boas práticas de desenvolvimento. Estou sempre em busca de evolução contínua e soluções criativas para cada projeto.
            </p>
            <a href="#" className="w-full lg:w-auto"><button data-aos="fade-up" data-aos-duration="800" className="w-full mx-auto lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow aos-init aos-animate"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text w-4 h-4 sm:w-5 sm:h-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Download CV</button></a>
          </div>
        </section>
        <section className="p-5 bg-white" id="experiencia">
          <div className="container mx-auto">
            <TitleSection title="Experiência Profissional" />
            <JobList />
          </div>
        </section>

        <section className="p-5 bg-white" id="projetos">
          <div className="container mx-auto">
            <TitleSection title="Projetos" />
            <WorksList />
          </div>
        </section>
        <section className="p-5 bg-white" id="tecnologias">
          <div className="container mx-auto">
            <TitleSection title="Tecnologias" />
            <Skills />
          </div>
        </section>
        <section className="py-5" id="academico">
          <div className="container mx-auto">
            <TitleSection title="Formação Acadêmica" />
            <EducationList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
