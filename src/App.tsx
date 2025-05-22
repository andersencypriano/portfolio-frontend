import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import JobList from "./components/JobList/JobList";
import TitleSection from "./components/TitleSection/TitleSection";
import WorksList from "./components/WorksList/WorkList";


function App() {

  return (
    <>
      <Header />
      <main className="">
        <section className="w-full h-[70dvh] flex items-center mb-4 bg-bg">
          <div className="container mx-auto">
            <h1 className="text-6xl text-white text-center">
              Olá, sou <span className="text-amber-500 font-bold">Andersen Cypriano</span>
            </h1>
            <p className="mt-4 text-center text-white max-w-[50rem] mx-auto">
              Sou desenvolvedor front-end com experiência na criação de interfaces modernas e responsivas, utilizando HTML, CSS, JavaScript, TypeScript, React e Next.js. Trabalho com integração de APIs e foco em performance, usabilidade e boas práticas de desenvolvimento. Estou sempre em busca de evolução contínua e soluções criativas para cada projeto.
            </p>
          </div>
        </section>
        <section className="p-5 bg-white">
          <div className="container mx-auto">
            <TitleSection title="Experiência Profissional" />
            <JobList />
          </div>
        </section>

        <section className="p-5 bg-white">
          <div className="container mx-auto">
            <TitleSection title="Projetos" />
            <WorksList />
          </div>
        </section>

        <section className="p-5 bg-white">
          <div className="container mx-auto">
            <TitleSection title="Projetos" />
            <WorksList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
