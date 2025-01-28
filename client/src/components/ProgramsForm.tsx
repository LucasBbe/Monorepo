import type { ReactNode } from "react";
import type { seriesI } from "../types/programs";

interface ProgramsFormProps {
  children: ReactNode;
  defaultValue: seriesI;
  onSubmit: (category: seriesI) => void;
}

function ProgramsForm({ children, defaultValue, onSubmit }: ProgramsFormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const id = formData.get("id") as unknown as number;
        const title = formData.get("title") as string;
        const synopsis = formData.get("synopsis") as string;
        const poster = formData.get("poster") as string;
        const country = formData.get("country") as string;
        const year = formData.get("year") as unknown as number;

        onSubmit({
          id,
          title,
          synopsis,
          poster,
          country,
          year,
        });
      }}
    >
      <label htmlFor="synopsis">Description de la série</label>
      <input
        type="text"
        name="title"
        defaultValue={defaultValue.title}
        placeholder="Titre"
      />
      <label htmlFor="poster">Lien de l'image de la série</label>
      <input
        type="text"
        name="synopsis"
        defaultValue={defaultValue.synopsis}
        placeholder="Description"
      />
      <label htmlFor="country">Pays de production de la série</label>
      <input
        type="text"
        name="poster"
        defaultValue={defaultValue.poster}
        placeholder="URL de l'image"
      />
      <label htmlFor="year">Année de production de la série</label>
      <input
        type="text"
        name="country"
        defaultValue={defaultValue.country}
        placeholder="Pays de production"
      />
      <label htmlFor="category_id">Catégorie de la série</label>
      <input
        type="text"
        name="year"
        defaultValue={defaultValue.year}
        placeholder="Année de production"
      />
      <button type="submit">{children}</button>
    </form>
  );
}

export default ProgramsForm;
