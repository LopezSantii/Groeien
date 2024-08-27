import NavBar from "./components/NavBar";
import Header from "./components/Header/Header";
import { PlanesFlor, PlanesSanti } from "./components/Planes";
import CardUser from "./components/CardUser";
import Nosotros from "./components/Nosotros";
import TabPlanes from "./components/Tabs";
import Proyectos from "./components/Proyectos";
import Spline from "@splinetool/react-spline";

function App() {
  return (
    <div className="bg-app">
      <NavBar />
      <main className="flex flex-col items-center">
        <Header />
        <div className="flex flex-col items-center gap-36 lg:gap-64 max-w-[62vw]">
          <section className="nosotros">
            <h2 id="nosotros" className="text-4xl font-semibold mb-10">
              Sobre <span style={{ color: "white" }}>Nosotros</span>
            </h2>
            <div className="flex flex-col xl:flex-row items-start justify-center gap-10">
              <Nosotros />
              <div className="flex flex-col">
                <div className="flex flex-col gap-10">
                  <CardUser
                    img="./img/WhatsApp Image 2024-03-19 at 6.44.31 PM.jpeg"
                    name="Flor"
                    user="@Florchu"
                    description="Hola 👋 soy la Comunity Manager del equipo"
                  />
                  <CardUser
                    img="./img/9EBC93CC-9966-4F0F-86E4-DB696508A0CD.jpg"
                    name="Santi"
                    user="@santurron"
                    description="Hola 👋 soy el desarrollador del equipo"
                  />
                </div>
                <div className="h-[250px]">
                  <Spline scene="https://prod.spline.design/zNgigj5EDKqCvIJ4/scene.splinecode" />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2
              id="planes"
              style={{ color: "rgba(255, 255, 255, 0.677)" }}
              className="text-4xl font-semibold mb-10"
            >
              Nuestros <span style={{ color: "white" }}>Planes</span>
            </h2>
            <TabPlanes item1={<PlanesFlor />} item2={<PlanesSanti />} />
          </section>

          <section id="clientes" className="mb-36">
            <h2
              style={{ color: "rgba(255, 255, 255, 0.677)" }}
              className="text-4xl font-semibold mb-10"
            >
              Nuestros <span style={{ color: "white" }}>Clientes</span>
            </h2>
            <section className="grid grid-cols-3 gap-x-3 md:gap-y-6 gap-y-4">
              <div className="md:col-span-1 col-span-3">
                <Proyectos
                  avatarimg={"./img/logoProtect.jpeg"}
                  name={"Protect Group"}
                  img={"./img/protecGroup.jpg"}
                  link={"https://protecgroup.com.ar/"}
                />
              </div>
              <div className="md:col-span-1 col-span-3">
                <Proyectos
                  avatarimg={"./img/logosaludgourmet.png"}
                  name={"Salud Gourmet"}
                  img={"./img/saludgourmet.png"}
                  link={"https://saludgourmet.com.ar/"}
                />
              </div>
              <div className="md:col-span-1 col-span-3">
                <Proyectos
                  avatarimg={"./img/logoCosmiatramys.jpg"}
                  name={"Cosmiatramys"}
                  img={"./img/Cosmiatramys.png"}
                  link={
                    "https://www.instagram.com/cosmiatramys?igsh=ejF2dTVneWpubHFp"
                  }
                />
              </div>
              <div className="md:col-span-1 col-span-3">
                <Proyectos
                  avatarimg={"./img/logoaxe.jpg"}
                  name={"Axé Beauty"}
                  img={"./img/axe.png"}
                  link={"https://www.instagram.com/axe.beauty_"}
                />
              </div>
              <div className="md:col-span-1 col-span-3">
                <Proyectos
                  avatarimg={"./img/logoconsultorios.jpg"}
                  name={"Consultorios medicos integrales"}
                  img={"./img/consultorios.png"}
                  link={
                    "https://www.instagram.com/cmedicosintegrales?igsh=emo5aTdrM2hrMzY3"
                  }
                />
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
