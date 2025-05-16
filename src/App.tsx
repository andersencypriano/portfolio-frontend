import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <section className="w-full h-[100dvh] flex items-center">
          <div className="container mx-auto">
            <h1 className="text-6xl text-white text-center">
              OlÃ¡, sou <span className="text-amber-500 font-bold">Andersen Cypriano</span>
            </h1>
            <p className="mt-4 text-center text-white max-w-[50rem] mx-auto">
              Sou desenvolvedor front-end com experiÃªncia na criaÃ§Ã£o de interfaces modernas e responsivas, utilizando HTML, CSS, JavaScript, TypeScript, React e Next.js. Trabalho com integraÃ§Ã£o de APIs e foco em performance, usabilidade e boas prÃ¡ticas de desenvolvimento. Estou sempre em busca de evoluÃ§Ã£o contÃ­nua e soluÃ§Ãµes criativas para cada projeto.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
