import "../App.css";
import { useState } from "react";
import down from "../assets/down.png";

export function compareDate(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  if (d1 < d2) return -1;
  if (d1 > d2) return 1;

  return 0;
}

function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  return d.toISOString().split("T")[0];
}

function DateFilter({ setDateDebut, setDateFin }) {
  const [ouvert, setOuvert] = useState(false);
  const [debut, setDebut] = useState("");
  const [fin, setFin] = useState("");

  const handleApply = () => {
    setDateDebut(debut);
    setDateFin(fin);
    setOuvert(false);
  };

  const handleReset = () => {
    setDebut("");
    setFin("");
    setDateDebut("");
    setDateFin("");
    setOuvert(false);
  };

  const affichage =
    debut && fin ? `${formatDate(debut)} → ${formatDate(fin)}` : "Date";

  return (
    <div className="relative inline-block text-left cursor-pointer">
      <button
        onClick={() => setOuvert(!ouvert)}
        className={`border rounded-full px-4 py-2 text-sm font-medium text-[#212529] flex items-center justify-between whitespace-nowrap transition-colors duration-200 ${
          debut && fin
            ? "border-green-600"
            : "border-gray-300 hover:text-[#097d6c]"
        }`}
        style={{
          boxShadow:
            debut && fin
              ? "0 0 0 .125rem #fff, 0 0 0 .25rem #0079c4"
              : undefined,
        }}
      >
        {affichage}
        <img src={down} className="h-4 ml-1" alt="Chevron dropdown" />
      </button>

      {ouvert && (
        <div className="absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4 w-72 space-y-2">
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-[#212529] font-semibold">
              De:{" "}
              <input
                type="date"
                value={debut}
                onChange={(e) => setDebut(e.target.value)}
                className="border rounded px-2 py-1 w-full text-sm text-[#212529] font-semibold"
              />
            </label>
            <label className="text-sm text-[#212529] font-semibold">
              À:{" "}
              <input
                type="date"
                value={fin}
                onChange={(e) => setFin(e.target.value)}
                className="border rounded px-2 py-1 w-full text-sm text-[#212529] font-semibold"
              />
            </label>
          </div>
          <div className="flex justify-end gap-4 mt-2">
            <button
              onClick={handleReset}
              className={`border rounded-full px-4 py-3 text-sm font-semibold text-[#212529] flex items-center gap-2 transition-colors duration-200 ${"border-gray-300 hover:bg-[#097d6c] hover:text-white"}`}
            >
              Réinitialiser
            </button>
            <button
              onClick={handleApply}
              className={`border rounded-full px-4 py-3 text-sm font-semibold text-[#212529] flex items-center gap-2 transition-colors duration-200 bg-green-600 text-white hover:bg-green-700`}
            >
              Appliquer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DateFilter;
