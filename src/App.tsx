import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import GradientButton from "./components/Buttons/GradientButton";
import Contact from "./components/Contact/Contact";
import EducationList from "./components/EducationSection/EducationList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import JobList from "./components/JobList/JobList";
import Skills from "./components/Skills/Skills";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import TitleSection from "./components/TitleSection/TitleSection";
import WorksList from "./components/WorksList/WorkList";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <section
          className="w-full h-[70dvh] flex items-center mb-4 bg-bg"
          id="sobre"
        >
          <div className="container mx-auto mt-24">
            <h1 className="text-6xl text-white text-center">
              Olá, sou{" "}
              <span className="text-amber-500 font-bold">
                Andersen Cypriano
              </span>
            </h1>
            <p className="my-4 text-center text-white max-w-[50rem] mx-auto">
              Sou desenvolvedor front-end com experiência na criação de
              interfaces modernas e responsivas, utilizando HTML, CSS,
              JavaScript, TypeScript, React e Next.js. Trabalho com integração
              de APIs e foco em performance, usabilidade e boas práticas de
              desenvolvimento. Estou sempre em busca de evolução contínua e
              soluções criativas para cada projeto.
            </p>
            <GradientButton href="#">Download CV</GradientButton>
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
        <section className="py-5" id="formacao">
          <div className="container mx-auto">
            <TitleSection title="Formação Acadêmica" />
            <EducationList />
          </div>
        </section>
        <section className="p-5 bg-white" id="tecnologias">
          <div className="container mx-auto">
            <TitleSection title="Tecnologias" />
            <Skills />
          </div>
        </section>
        <section className="p-5 bg-white" id="contato">
          <div className="container mx-auto">
            <TitleSection title="Contato" />
            <div className="flex gap-4 md:mx-auto">
              <div className="w-1/2 shadow-lg rounded-lg flex flex-col items-center justify-center">
                <Avatar />
                <h2 className="text-center text-2xl font-bold text-gray-800 leading-5 my-5">
                  Andersen Cypriano
                  <br />
                  <span className="text-[.9rem] font-normal mb-5">
                    Desenvolvedor Front-end
                  </span>
                </h2>
                <div className="flex justify-center">
                  <SocialLinks />
                </div>
              </div>
              <div className="w-1/2">
                <p className="p-4 text-gray-600 text-[1.1rem]">
                Estou disponível para novas oportunidades de trabalho, projetos
                como freelancer ou parcerias profissionais. Envie sua mensagem
                pelo formulário abaixo e retornarei o contato o mais breve
                possível.
              </p>
              <Contact />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
