"use client";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    title: "Banho & Tosa",
    description:
      "Inclui banho com produtos específicos para o tipo de pelagem e pelo do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "1h",
    price: "$50",
    icon: <Scissors />,
  },
  {
    title: "Consulta Veterinária",
    description:
      "Consulta com veterinário qualificado, incluindo exame físico e orientações sobre cuidados com a saúde do seu pet.",
    duration: "30min",
    price: "$80",
    icon: <Syringe />,
  },
  {
    title: "Táxi Pet",
    description:
      "Transporte seguro e confortável para o seu pet, com motorista treinado e veículo adaptado.",
    duration: "Variável",
    price: "$40",
    icon: <CarTaxiFront />,
  },
  {
    title: "Hotel para Pet",
    description:
      "Acomodação em ambiente seguro e confortável, com alimentação e cuidados personalizados para seu animal de estimação.",
    duration: "Diária",
    price: "$70",
    icon: <Hotel />,
  },
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1E293B] text-white rounded-2xl p-6 space-y-6 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 pt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                        >
                          <WhatsappLogo className="w-5 h-5" />
                          Entrar em contato
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="flex items-center justify-center 
            rounded-full bg-white shadow-lg w-10 h-10 absolute left-3
            -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="flex items-center justify-center 
            rounded-full bg-white shadow-lg w-10 h-10 absolute -right-6
            -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
