import Search from "../../components/Search.jsx";

function AvisEtAlertesSection({ onChange, query }) {
  return (
    <div className="avis-et-alertes-container">
      <h1>Avis et alertes</h1>
      <p>Trouver un avis</p>
      <Search onChange={onChange} query={query} />
    </div>
  );
}

export default AvisEtAlertesSection;
