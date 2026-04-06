import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
// import { toast } from "sonner"
import * as z from "zod"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input"



const formSchema = z.object({
  name: z.string().min(2, "Preencha o campo nome"),
  email: z.email("Preencha o campo e-mail"),
  messagem: z.string().min(10, "Preencha o campo mensagem")
});



export default function FormContact() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      messagem: ""
    }
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
  }
  return (
    <>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>Nome</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Login button not working on mobile"
                        autoComplete="off"
                      />
                    </Field>
                  )}
                />
              </FieldGroup>

            </form>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>


      {/* <form action="" className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
        <input type="text" placeholder="Nome" className="mb-2.5 border-[1px] border-gray-400 outline-0 p-1 rounded-[5px] text-[.9rem]" required />
        <input type="email" placeholder="E-mail" className="mb-2.5 border-[1px] border-gray-400 outline-0 p-1 rounded-[5px] text-[.9rem]" required />
        <textarea placeholder="Mensagem" className="mb-2.5 border-[1px] border-gray-400 outline-0 p-1 rounded-[5px] text-[.9rem]" required></textarea>
        <div className="w-full flex justify-end">
          <button type="submit" className="w-[11rem] block text-center cursor-pointer sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:shadow-xl eases">Enviar</button>
        </div>
      </form> */}
    </>
  );
}