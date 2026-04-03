export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Andersen Cypriano. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            Construido com React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
