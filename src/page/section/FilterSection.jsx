import Dropdown from "../../components/Dropdown";
import { arrondisements } from "../../components/data/arrondissement.js";
import { sujet } from "../../components/data/sujet.js";
import DateFilter from "../../components/DateFilter.jsx";

function FilterSection({
  arrondissementsSelectionnes,
  setArrondissementsSelectionnes,
  sujetsSelectionnes,
  setSujetsSelectionnes,
  setDateDebut,
  setDateFin,
}) {
  return (
    <div className="flex items-center gap-3 pt-2 p-4 w-full border-b border-gray-300 text-[#212529] font-semibold font-sans">
      {" "}
      <Dropdown
        placeholder="Arrondissement"
        valeurSelectionnee={arrondissementsSelectionnes}
        onChange={setArrondissementsSelectionnes}
        valeurs={arrondisements}
      />
      <DateFilter setDateDebut={setDateDebut} setDateFin={setDateFin} />
      <Dropdown
        placeholder="Sujet"
        valeurSelectionnee={sujetsSelectionnes}
        onChange={setSujetsSelectionnes}
        valeurs={sujet}
      />
      <div
        style={{ display: "flex", justifyContent: "flex-end" }}
        className="mt-8"
      ></div>
      <button
        onClick={() => {
          setArrondissementsSelectionnes([]);
          setSujetsSelectionnes([]);
          setDateDebut("");
          setDateFin("");
        }}
        className="border border-gray-300 rounded-full px-4 py-2 bg-white hover:bg-red-100 text-sm"
      >
        Réinitialiser les filtres
      </button>
    </div>
  );
}

export default FilterSection;
