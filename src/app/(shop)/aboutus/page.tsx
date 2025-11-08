import { Title } from "@/components/ui/title/Title";

export default function AboutPage() {
  return (
    <section className="w-11/12 mx-auto">
      <Title title="ACERCA DE NOSOTROS"/>
      <div className="flex flex-col overflow-y-hidden w-full overflow-hidden cursor-pointer">
        <img src="/oreiro.jpg" alt="about us image" className="rounded-md w-full transition-transform duration-300 hover:scale-110 " />
      </div>
      <h1 className="mt-5 w-5/6 mx-auto text-gray-600 max-[600px]:text-md min-[600px]:text-lg text-center">Holi ❤️ Nosotros somos morenamora, un emprendimiento familiar, con experiencia de más de 20 años vendiendo productos de moda, accesorios, bijouterie, maquillaje & cuidados femeninos 💓 nuestro propósito es brindar la mejor atención & los mejores productos a precios accesibles 😍 creemos y apostamos a los artículos delicados, femeninos & prácticos ✨ tenemos como visión brindar la mejor atención, con honestidad, respeto y calidez 💓 De parte de todos los que somos , hacemos & creamos MORENA MORA ✨ Gracias por elegirnos ✨</h1>
    </section>

  )
    ;
}