// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import ProgramsForm from "../components/ProgramsForm";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: string;
};

// function ProgramsEdit() {
//   const navigate = useNavigate();

//   const { id } = useParams();
//   const [program, setProgram] = useState(null as null | Program);

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
//       .then((response) => response.json())
//       .then((data: Program) => {
//         setProgram(data);
//       });
//   }, [id]);

//   return (
//     program && (
//       <ProgramsForm
//         defaultValue={program}
//         onSubmit={(categoryData) => {
//           fetch(`${import.meta.env.VITE_API_URL}/api/programs/${program.id}`, {
//             method: "put",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(categoryData),
//           }).then((response) => {
//             if (response.status === 204) {
//               navigate(`/programs/${program.id}`);
//             }
//           });
//         }}
//       >
//         Modifier
//       </ProgramsForm>
//     )
//   );
// }

// export default ProgramsEdit;
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import type { Program } from "../../../server/src/modules/program/programRepository";
// import ProgramForm from "../components/ProgramForm";

function ProgramEdit() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [program, setProgram] = useState(null as null | Program);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: Program) => {
        setProgram(data);
      });
  }, [id]);

  return (
    program && (
      <ProgramsForm
        defaultValue={program}
        onSubmit={(programData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/programs/${program.id}`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(programData),
          }).then((response) => {
            if (response.status === 204) {
              navigate(`/programs/${program.id}`);
            }
          });
        }}
      >
        Modifier
      </ProgramsForm>
    )
  );
}

export default ProgramEdit;
