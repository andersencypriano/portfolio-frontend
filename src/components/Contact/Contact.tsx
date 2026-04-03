import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium leading-none">
          Nome
        </label>
        <Input id="name" type="text" placeholder="Seu nome" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium leading-none">
          E-mail
        </label>
        <Input id="email" type="email" placeholder="seu@email.com" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none">
          Mensagem
        </label>
        <Textarea
          id="message"
          placeholder="Sua mensagem..."
          className="min-h-[120px]"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        <Send className="mr-2 h-4 w-4" />
        Enviar mensagem
      </Button>
    </form>
  );
}
