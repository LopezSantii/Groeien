import CardPlan from "./CardPlan";

const planes = {
  flor: {
    plan1: [
      "4 publicaciones mensuales (posteo, carrusel, reel)",
      "12 Historias mensuales",
      "Creación de gráficas",
      "Creación de copys",
      "Calendario mensual de contenidos",
    ],
    plan2: [
      "8 publicaciones mensuales (posteo, carrusel, reel)",
      "20 Historias mensuales",
      "Creación de gráficas",
      "Creación de copys",
      "Calendario mensual de contenidos",
    ],
    plan3: [
      "12 publicaciones mensuales (posteo, carrusel, reel)",
      "25 Historias mensuales",
      "Creación de gráficas",
      "Creación de copys",
      "Calendario mensual de contenidos",
    ],
    plan4: [
      "18 publicaciones mensuales (posteo, carrusel, reel)",
      "30 Historias mensuales",
      "Creación de gráficas",
      "Creación de copys",
      "Calendario mensual de contenidos",
    ],
    plan5: [
      "22 publicaciones mensuales (posteo, carrusel, reel)",
      "40 Historias mensuales",
      "Creación de gráficas",
      "Creación de copys",
      "Calendario mensual de contenidos",
    ],
  },
  santi: {
    plan1: [
      "Sitio responsivo de una sola página ",
      "Formulario de contacto ",
      "Enlaces sociales (Facebook, Instagram, WhatsApp, etc)",
      "Google Maps",
    ],
    plan2: [
      "Plan Básico + Diseño/maquetación personalizada",
      "Sitio web de hasta 5 páginas",
      "Animaciones",
      "Dominio Propio, como email personalizado (incluye cargos adicionales)",
    ],
    plan3: [
      "Todo lo que incluyen los demás planes",
      "Base de datos que contenga las ordenes de compras realizadas, productos con su stock respectivo",
      "Compras en la web mediante mercado pago",
      "1 actualizaciones gratis",
    ],
    plan4: [
      "Todo lo que incluyen los demás planes",
      "Aplicacion totalmente personalizada como por ejemplo un Sistema de gestion",
    ],
  },
};

export function PlanesFlor() {
  return (
    <>
      {planes && ( // Verificar si 'planes' tiene datos antes de renderizar
        <section className="gap-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-stretch gap-y-10">
          <CardPlan info={planes.flor.plan1} user="@Florchu" name="Plan 1" />
          <CardPlan info={planes.flor.plan2} user="@Florchu" name="Plan 2" />
          <CardPlan info={planes.flor.plan3} user="@Florchu" name="Plan 3" />
          <CardPlan info={planes.flor.plan4} user="@Florchu" name="Plan 4" />
          <CardPlan info={planes.flor.plan5} user="@Florchu" name="Plan 5" />
        </section>
      )}
    </>
  );
}

export function PlanesSanti() {
  return (
    <>
      {planes && ( // Verificar si 'planes' tiene datos antes de renderizar
        <section className="gap-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-stretch gap-y-10">
          <CardPlan info={planes.santi.plan1} user="@Santi" name="Plan 1" />
          <CardPlan info={planes.santi.plan2} user="@Santi" name="Plan 2" />
          <CardPlan info={planes.santi.plan3} user="@Santi" name="Plan 3" />
          <CardPlan info={planes.santi.plan4} user="@Santi" name="Plan 4" />
        </section>
      )}
    </>
  );
}
