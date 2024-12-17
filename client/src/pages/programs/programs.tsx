import "./programs.css";
import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import type { seriesI } from "../../types/programs";

function programs() {
  const [serie, setSerie] = useState<seriesI[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setSerie(data));
  }, []);
  console.info(serie);
  // serie.map(() => {});

  return (
    <>
      <header>
        <h1>page Programs</h1>
      </header>

      <main id="programs-main">
        {serie.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            country={el.country}
            year={el.year}
            title={el.title}
            poster={el.poster}
            synopsis={el.synopsis}
          />
        ))}
      </main>
    </>
  );
}

export default programs;
