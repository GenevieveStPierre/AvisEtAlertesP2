import AlertListItem from "./AlertListItem";
import React, { useState } from "react";

function AlertList({ filteredAlerts }) {
  return (
    <div style={{ padding: "0 5rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {filteredAlerts.map((alert) => (
          <AlertListItem key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );
}
export default AlertList;
