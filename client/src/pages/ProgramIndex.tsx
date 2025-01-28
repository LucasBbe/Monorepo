import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { seriesI } from "../types/programs";

function ProgramsIndex() {
  const [programs, setPrograms] = useState([] as seriesI[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((data: seriesI[]) => {
        setPrograms(data);
      });
  }, []);
  return (
    <>
      <Link to={"/programs/new"}>Ajouter</Link>
      <ul>
        {programs.map((programs) => (
          <li key={programs.id}>
            <Link to={`/programs/${programs.id}`}>{programs.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProgramsIndex;
