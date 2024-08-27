import CardPlan from "./CardPlan";
import { useEffect, useState } from "react";
import PlanesList from "../services/services";

export function PlanesFlor() {
  const [planes, setPlanes] = useState(null);

  useEffect(() => {
    PlanesList().then((data) => setPlanes(data.flor));
  }, []);
  return (
    <>
      {planes && ( // Verificar si 'planes' tiene datos antes de renderizar
        <section className="gap-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-stretch gap-y-10">
          <CardPlan info={planes.plan1} user="@Florchu" name="Plan 1" />
          <CardPlan info={planes.plan2} user="@Florchu" name="Plan 2" />
          <CardPlan info={planes.plan3} user="@Florchu" name="Plan 3" />
          <CardPlan info={planes.plan4} user="@Florchu" name="Plan 4" />
          <CardPlan info={planes.plan5} user="@Florchu" name="Plan 5" />
        </section>
      )}
    </>
  );
}

export function PlanesSanti() {
  const [planes, setPlanes] = useState(null);

  useEffect(() => {
    PlanesList().then((data) => setPlanes(data.santi));
  }, []);
  return (
    <>
      {planes && ( // Verificar si 'planes' tiene datos antes de renderizar
        <section className="gap-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-stretch gap-y-10">
          <CardPlan info={planes.plan1} user="@Santi" name="Plan 1" />
          <CardPlan info={planes.plan2} user="@Santi" name="Plan 2" />
          <CardPlan info={planes.plan3} user="@Santi" name="Plan 3" />
          <CardPlan info={planes.plan4} user="@Santi" name="Plan 4" />
        </section>
      )}
    </>
  );
}
