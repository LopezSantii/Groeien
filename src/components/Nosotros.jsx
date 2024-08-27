import { Card, CardBody, ScrollShadow } from "@nextui-org/react";

export default function Nosotros() {
  return (
    <Card isBlurred>
      <CardBody>
        <ScrollShadow hideScrollBar className="xl:max-w-[900px] h-[455px]">
          <div className="flex flex-col gap-2">
            <p>
              🌟 Bienvenidos a
              <span className="text-violet-700 font-bold"> Groeien</span>, tu
              aliado estratégico en el mundo digital. Nos especializamos en dos
              pilares fundamentales: servicios de{" "}
              <span className="text-violet-700 font-bold">
                {" "}
                Community Manager
              </span>{" "}
              y{" "}
              <span className="text-violet-700 font-bold">
                Desarrollo Web
              </span>{" "}
              a medida.
            </p>
            <p>
              Entendemos que la presencia en línea es crucial en el entorno
              empresarial actual. Por eso, nos dedicamos a ofrecerte soluciones
              integrales para potenciar tu{" "}
              <span className="text-violet-700 font-bold">Marca</span> en las{" "}
              <span className="text-violet-700 font-bold">Redes Sociales</span>{" "}
              y en la <span className="text-violet-700 font-bold">Web</span>.
            </p>
            <p>
              Con un equipo dinámico y comprometido, liderado por dos mentes
              apasionadas por el mundo digital, te garantizamos resultados
              excepcionales. Permítenos presentarte a quienes están detrás de
              cada proyecto:
            </p>
            <p>
              🌸<span className="text-violet-700 font-bold"> Flor</span> ,
              nuestra experta en Community Manager, es la encargada de impulsar
              tu presencia en redes sociales. Con su creatividad y habilidades
              estratégicas, Flor se asegurará de que tu marca se destaque en el
              mundo digital, interactuando con tu audiencia de manera auténtica
              y efectiva.
            </p>
            <p>
              💻 Por otro lado,{" "}
              <span className="text-violet-700 font-bold">Santi</span>, nuestro
              Desarrollador Web, es el arquitecto detrás de tu presencia en
              línea. Con años de experiencia y un enfoque meticuloso, Santi se
              encarga de traducir tus ideas en sitios web funcionales y
              atractivos, adaptados a tus necesidades específicas.
            </p>
            <p>
              En <span className="text-violet-700 font-bold">Groeien</span>, nos
              comprometemos a brindarte un servicio personalizado y de calidad.
              Ya sea que necesites fortalecer tu presencia en redes sociales o
              crear una página web impactante, estamos aquí para ayudarte a
              alcanzar tus objetivos digitales.
            </p>
          </div>
          <p>
            ¡Únete a nosotros y lleva tu marca al siguiente nivel en el
            <span className="text-violet-700 font-bold"> Mundo Digital!</span>
            🚀
          </p>
        </ScrollShadow>
      </CardBody>
    </Card>
  );
}
