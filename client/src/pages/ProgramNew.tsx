import { useNavigate } from "react-router-dom";

import ProgramsForm from "../components/ProgramsForm";

function ProgramNew() {
  const navigate = useNavigate();

  const newPrograms = {
    id: 0,
    title: "",
    synopsis: "",
    poster: "",
    country: "",
    year: 0,
  };

  return (
    <ProgramsForm
      defaultValue={newPrograms}
      onSubmit={(ProgramsData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/programs`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ProgramsData),
        })
          .then((response) => response.json())
          .then((data) => {
            navigate(`/programs/${data.insertId}`);
          });
      }}
    >
      Ajouter
    </ProgramsForm>
  );
}

export default ProgramNew;
