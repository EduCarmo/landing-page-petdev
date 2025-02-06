import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 border-white rounded-lg overflow-hidden">
              <Image
                src={about2Img}
                alt="foto do gato"
                fill
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              voluptas aspernatur odio id voluptatem corporis praesentium
              impedit quo, uis eum, odit doloribus illum earum cupiditate quas
              non laborum est repudiandae?
            </p>

            <ul className="space-y-4 mt-10">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 1995
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 Veterinarios
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                href="#"
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via Whatsapp
              </a>

              <a
                href="#"
                className=" text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da Loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
