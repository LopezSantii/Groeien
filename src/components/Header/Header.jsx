import Spline from "@splinetool/react-spline";

export default function Header() {
  return (
    <section className="max-w-[vw100] flex xl:flex-row flex-col items-center justify-center xl:gap-96 xl:mt-30 m-10 h-[65vh]">
      <p className="nosotros text-4xl md:text-7xl xl:w-96 font-semibold">
        <span style={{ color: "white" }}>Impulsa</span> tu
        <span style={{ color: "white" }}> Empresa</span>
      </p>
      <div className="h-[450px] w-[450px]">
        <Spline scene="https://prod.spline.design/2ZkJRGH4OWWgTiuX/scene.splinecode" />
      </div>
    </section>
  );
}
