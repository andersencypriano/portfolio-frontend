import { Github, Linkedin, FileDown } from "lucide-react";
import { Button } from "../ui/button";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost" size="icon" asChild href="https://github.com/andersencypriano" target="_blank" rel="noopener noreferrer">
        <Github className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" asChild href="https://www.linkedin.com/in/andrecypriano/" target="_blank" rel="noopener noreferrer">
        <Linkedin className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" asChild href="#" target="_blank" rel="noopener noreferrer">
        <FileDown className="h-4 w-4" />
      </Button>
    </div>
  );
}
