import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { seriesI } from "../types/programs";

import CategoryDeleteForm from "../components/ProgramsDeleteForm";

function ProgramsDetail() {
  const { id } = useParams();
  const [program, setProgram] = useState(null as null | seriesI);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: seriesI) => {
        setProgram(data);
      });
  }, [id]);

  return (
    program && (
      <>
        <h1>{program.title}</h1>
        <Link to={`/programs/${program.id}/edit`}>Modifier</Link>
        <CategoryDeleteForm id={program.id}>Supprimer</CategoryDeleteForm>
      </>
    )
  );
}

export default ProgramsDetail;
