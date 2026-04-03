import Avatar from "./components/Avatar/Avatar";
import Contact from "./components/Contact/Contact";
import EducationList from "./components/EducationSection/EducationList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import JobList from "./components/JobList/JobList";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import TitleSection from "./components/TitleSection/TitleSection";
import WorksList from "./components/WorksList/WorkList";
import Drawer from "./ui/Drawer/Drawer";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Download } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Drawer />
      
      <main>
        {/* Hero Section */}
        <section
          className="relative flex min-h-[80vh] items-center justify-center border-b bg-muted/40 pt-16"
          id="sobre"
        >
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
              Ola, sou
              <span className="mt-2 block bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Andersen Cypriano
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Desenvolvedor front-end com experiencia na criacao de interfaces
              modernas e responsivas, utilizando HTML, CSS, JavaScript,
              TypeScript, React e Next.js. Trabalho com integracao de APIs e
              foco em performance, usabilidade e boas praticas de
              desenvolvimento.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" href="#">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button size="lg" variant="outline" href="#contato">
                Entre em contato
              </Button>
            </div>
          </div>
        </section>

        {/* Experiencia Section */}
        <section className="py-16" id="experiencia">
          <div className="container mx-auto px-4">
            <TitleSection
              title="Experiencia Profissional"
              description="Minha trajetoria no desenvolvimento de software"
            />
            <JobList />
          </div>
        </section>

        {/* Projetos Section */}
        <section className="border-t bg-muted/40 py-16" id="projetos">
          <div className="container mx-auto px-4">
            <TitleSection
              title="Projetos"
              description="Alguns dos projetos que desenvolvi"
            />
            <WorksList />
          </div>
        </section>

        {/* Formacao Section */}
        <section className="py-16" id="formacao">
          <div className="container mx-auto px-4">
            <TitleSection
              title="Formacao Academica"
              description="Minha formacao e certificacoes"
            />
            <EducationList />
          </div>
        </section>

        {/* Contato Section */}
        <section className="border-t bg-muted/40 py-16" id="contato">
          <div className="container mx-auto px-4">
            <TitleSection
              title="Contato"
              description="Vamos conversar sobre seu projeto"
            />
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="flex flex-col items-center justify-center p-8">
                <Avatar />
                <h2 className="mt-6 text-center text-2xl font-bold">
                  Andersen Cypriano
                </h2>
                <p className="text-muted-foreground">Desenvolvedor Front-end</p>
                <div className="mt-4">
                  <SocialLinks />
                </div>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="mb-6 text-muted-foreground">
                    Estou disponivel para novas oportunidades de trabalho,
                    projetos como freelancer ou parcerias profissionais. Envie
                    sua mensagem pelo formulario abaixo e retornarei o contato o
                    mais breve possivel.
                  </p>
                  <Contact />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
