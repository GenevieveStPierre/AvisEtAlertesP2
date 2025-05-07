function AlertDetailSection({ alert }) {
  if (!alert) {
    return <p>Alerte introuvable.</p>;
  }

  return (
    <div className="alert-detail-section-container" style={{ padding: "1rem" }}>
      <h1>{alert.titre}</h1>
      <p>
        <strong>Type :</strong> {alert.type || "Non spécifié"}
      </p>
      {alert.description && (
        <p>
          <strong>Description :</strong> {alert.description}
        </p>
      )}
      <p>
        <strong>Arrondissement :</strong>{" "}
        {alert.arrondissement || "Non spécifié"}
      </p>
      <p>
        <strong>Date début :</strong>{" "}
        {alert.dateDebut
          ? new Date(alert.dateDebut).toLocaleString("fr", {
              dateStyle: "full",
              timeStyle: "short",
            })
          : "Non spécifiée"}
      </p>
      <p>
        <strong>Date fin :</strong>{" "}
        {alert.dateFin
          ? new Date(alert.dateFin).toLocaleString("fr", {
              dateStyle: "full",
              timeStyle: "short",
            })
          : "Non spécifiée"}
      </p>

      {alert.coordinates?.length > 0 && (
        <p>
          <strong>Coordonnées :</strong> {alert.coordinates.join(", ")}
        </p>
      )}
    </div>
  );
}

export default AlertDetailSection;
