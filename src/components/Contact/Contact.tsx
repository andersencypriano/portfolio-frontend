export default function Contact () {
  return (
    <>
      <form action="" className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
        <input type="text" placeholder="Nome" className="mb-2.5 border-[1px] border-gray-400 outline-0 p-1 rounded-[5px] text-[.9rem]" required />
        <input type="email" placeholder="E-mail" className="mb-2.5 border-[1px] border-gray-400 outline-0 p-1 rounded-[5px] text-[.9rem]" required />
        <textarea placeholder="Mensagem" className="mb-2.5 border-[1px] border-gray-400 outline-0 p-1 rounded-[5px] text-[.9rem]" required></textarea>
        <div className="w-full flex justify-end">
          <button type="submit" className="w-[11rem] block text-center cursor-pointer sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:shadow-xl eases">Enviar</button>
        </div>
      </form>
    </>
  );
}