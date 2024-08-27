import Proyectos from "./Proyectos";

export default function Clientes() {
  return (
    <section className="grid grid-cols-3 gap-x-3 md:gap-y-6 gap-y-4">
      <div className="md:col-span-1 col-span-3">
        <Proyectos
          avatarimg={"/logoProtect.jpeg"}
          name={"Protect Group"}
          img={"/protecGroup.jpg"}
          link={"https://protecgroup.com.ar/"}
        />
      </div>
      <div className="md:col-span-1 col-span-3">
        <Proyectos
          avatarimg={"/logosaludgourmet.png"}
          name={"Salud Gourmet"}
          img={"/saludgourmet.png"}
          link={"https://saludgourmet.com.ar/"}
        />
      </div>
      <div className="md:col-span-1 col-span-3">
        <Proyectos
          avatarimg={"/logoCosmiatramys.jpg"}
          name={"Cosmiatramys"}
          img={"/Cosmiatramys.png"}
          link={"https://www.instagram.com/cosmiatramys?igsh=ejF2dTVneWpubHFp"}
        />
      </div>
      <div className="md:col-span-1 col-span-3">
        <Proyectos
          avatarimg={"/logoaxe.jpg"}
          name={"Axé Beauty"}
          img={"/axe.png"}
          link={"https://www.instagram.com/axe.beauty_"}
        />
      </div>
      <div className="md:col-span-1 col-span-3">
        <Proyectos
          avatarimg={"/logoconsultorios.jpg"}
          name={"Consultorios medicos integrales"}
          img={"/consultorios.png"}
          link={
            "https://www.instagram.com/cmedicosintegrales?igsh=emo5aTdrM2hrMzY3"
          }
        />
      </div>
    </section>
  );
}
