import { useState } from "react";
import down from "../assets/down.png";

function Dropdown({
  valeurSelectionnee = [],
  valeurs = [],
  onChange,
  placeholder,
}) {
  const [ouvert, setOuvert] = useState(false);

  function handleChoix(arr) {
    let autreSelection;
    if (valeurSelectionnee.includes(arr)) {
      autreSelection = valeurSelectionnee.filter((item) => item !== arr);
    } else {
      autreSelection = [...valeurSelectionnee, arr];
    }
    onChange(autreSelection);
  }

  return (
    <div className="relative inline-block text-left cursor-pointer">
      <button
        onClick={() => setOuvert(!ouvert)}
        className={`border rounded-full px-4 py-2 text-sm font-medium bg-white text-black flex items-center justify-between cursor-pointer ${
          valeurSelectionnee.length > 0 ? "border-blue-300" : "border-gray-300"
        }`}
      >
        {placeholder}
        <img src={down} style={{ height: "1rem" }} alt="Chevron dropdown" />
      </button>

      {ouvert && (
        <div className="absolute mt-2 w-64 bg-white border-gray-200 rounded-lg shadow z-10 max-h-64 overflow-y-auto">
          <ul className="p-2 space-y-1">
            {valeurs.map((arr) => (
              <li
                key={arr}
                className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded"
                onClick={() => {
                  handleChoix(arr);
                }}
              >
                <input
                  type="checkbox"
                  onChange={() => handleChoix(arr)}
                  checked={valeurSelectionnee.includes(arr)}
                  className="form-checkbox flex-shrink-0 h-5 w-5 text-blue-600 border-gray-400 rounded cursor-pointer mt-1"
                  style={{ accentColor: "#097d6c" }}
                />
                <span className="text-black break-words w-full">{arr}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
