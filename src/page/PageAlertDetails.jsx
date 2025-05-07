import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AlertDetailSection from "./section/AlertDetailSection";
import TopNavBar from "../components/TopNavBar";

function PageAlertDetails({ alerts }) {
  const { alertId } = useParams();
  const [selectedAlert, setSelectedAlert] = useState(null);

  useEffect(() => {
    setSelectedAlert(
      alerts.find((alert) => alert.id.toString() === alertId.toString()) || null
    );
  }, [alerts, alertId]);

  return (
    <div
      className="page-alert-details"
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <TopNavBar />
      <AlertDetailSection alert={selectedAlert} />
    </div>
  );
}

export default PageAlertDetails;
