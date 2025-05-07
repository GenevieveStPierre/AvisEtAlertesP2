import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import PageAlertDetails from "./page/PageAlertDetails.jsx";
import { useEffect, useState } from "react";

const API_URL =
  "https://donnees.montreal.ca/api/3/action/datastore_search?resource_id=fc6e5f85-7eba-451c-8243-bdf35c2ab336";

function fetchAlerts(setAlerts) {
  fetch(API_URL)
    .then((response) => {
      console.log("Response status:", response.status); // Log the response status
      return response.json();
    })
    .then((data) => {
      const alertsData = data.result?.records || [];

      const mappedAlerts = alertsData.map((alert) => ({
        id: alert._id,
        titre: alert.titre,
        type: alert.type,
        dateDebut: new Date(alert.date_debut),
        dateFin: new Date(alert.date_fin),
      }));

      mappedAlerts.sort((a, b) => a.dateDebut - b.dateDebut).reverse();

      setAlerts(mappedAlerts);
    })
    .catch((error) => console.error("Error fetching alerts:", error));
}

function App() {
  const [alerts, setAlerts] = useState([]);
  useEffect(() => {
    fetchAlerts(setAlerts);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage alerts={alerts} />} />
        <Route
          path="/alert/:alertId"
          element={<PageAlertDetails alerts={alerts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./page/HomePage.jsx";
// import PageAlertDetails from "./page/PageAlertDetails.jsx";
// import { useEffect, useState } from "react";

// async function getData(limit = 20) {
//   const url = `https://donnees.montreal.ca/api/3/action/datastore_search?resource_id=fc6e5f85-7eba-451c-8243-bdf35c2ab336&limit=${limit}`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     console.log("Response data:", response); // Log the response data

//     const json = await response.json();
//     return json.result;
//   } catch (error) {
//     console.error("Error fetching alerts:", error);
//     return null;
//   }
// }

// function App() {
//   const [alerts, setAlerts] = useState([]);

//   useEffect(() => {
//     async function fetchAlerts() {
//       let result = await getData();

//       const alertsData = result.records || [];

//       const mappedAlerts = alertsData.map((alert) => ({
//         id: alert._id,
//         titre: alert.titre,
//         type: alert.type,
//         dateDebut: new Date(alert.date_debut),
//         dateFin: new Date(alert.date_fin),
//       }));

//       mappedAlerts.sort((a, b) => a.dateDebut - b.dateDebut).reverse();

//       setAlerts(mappedAlerts);
//     }

//     fetchAlerts();
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage alerts={alerts} />} />
//         <Route
//           path="/alert/:alertId"
//           element={<PageAlertDetails alerts={alerts} />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
