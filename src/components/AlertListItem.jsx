import { NavLink } from "react-router-dom";

function AlertListItem({ alert }) {
  return (
    <NavLink to={`/alert/${alert.id}`} className="no-underline">
      <div className="alert-item p-2 mb-4 border-b border-gray-300">
        {" "}
        <h2 className="text-xl font-bold hover:text-[#097d6c] text-gray-800">
          {alert.titre}
        </h2>
        <div className="bg-gray-300 px-4 py-1 mt-2 rounded-sm inline-block">
          <h3 className="text-sm font-bold text-gray-800">{alert.type}</h3>
        </div>
        <div className="flex items-center mt-2">
          <span className="mr-2 flex items-center">
            <span className="text-gray-500 semi-bold">
              {new Date(alert.dateDebut).toLocaleString("fr", {
                dateStyle: "full",
                timeStyle: "short",
              })}
            </span>
          </span>
        </div>
      </div>
    </NavLink>
  );
}

export default AlertListItem;
