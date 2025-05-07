import { useState } from "react";
import AlertList from "../components/AlertList";
import AlertSubscribe from "../components/AlertSubscribe";
import { compareDate } from "../components/DateFilter.jsx";
import TopNavBar from "../components/TopNavBar";
import AvisEtAlertesSection from "./section/AvisEtAlertesSection";
import FilterSection from "./section/FilterSection";

function HomePage({ alerts }) {
  const [searchValue, setSearchValue] = useState("");
  const [arrondissementsSelectionnes, setArrondissementsSelectionnes] =
    useState([]);
  const [sujetsSelectionnes, setSujetsSelectionnes] = useState([]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");

  const [limit, setLimit] = useState(12);

  const filteredAlerts = alerts?.filter((alert) => {
    const matchQuery =
      alert.titre.toLowerCase().includes(searchValue.toLowerCase()) ||
      alert.type.toLowerCase().includes(searchValue.toLowerCase());

    const matchArrondissement =
      arrondissementsSelectionnes.length === 0 ||
      arrondissementsSelectionnes.some((arr) =>
        alert.titre.toLowerCase().includes(arr.toLowerCase())
      );

    const matchSujet =
      sujetsSelectionnes.length === 0 ||
      sujetsSelectionnes.includes(alert.type);

    let matchDate = true;

    if (dateDebut !== "" && dateFin !== "") {
      matchDate =
        compareDate(dateDebut, alert.dateDebut) <= 0 &&
        compareDate(dateFin, alert.dateDebut) >= 0;
    }

    return matchQuery && matchArrondissement && matchSujet && matchDate;
  });

  const limitedAlerts = filteredAlerts.slice(0, limit);

  const handleFilterChange = (selectedArrondissements, selectedSujets) => {
    setArrondissementsSelectionnes(selectedArrondissements);
    setSujetsSelectionnes(selectedSujets);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TopNavBar />
      <AvisEtAlertesSection onChange={handleChange} query={searchValue} />
      <FilterSection
        arrondissementsSelectionnes={arrondissementsSelectionnes}
        setArrondissementsSelectionnes={setArrondissementsSelectionnes}
        sujetsSelectionnes={sujetsSelectionnes}
        setSujetsSelectionnes={setSujetsSelectionnes}
        setDateDebut={setDateDebut}
        setDateFin={setDateFin}
      />
      <AlertList filteredAlerts={limitedAlerts} />
      {limit < filteredAlerts.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setLimit(limit + 12)}
            className="border border-gray-300 rounded-full px-4 py-2 bg-white hover:bg-gray-100 text-sm"
          >
            Afficher plus d'alertes
          </button>
        </div>
      )}
      <AlertSubscribe />
    </div>
  );
}

export default HomePage;
