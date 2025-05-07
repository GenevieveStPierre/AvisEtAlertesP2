import handleSubscribe from "./unhandledOneClick.js";

function AlertSubscribe() {
  return (
    <div className="bg-gray-100 text-gray-800 mx-5 my-1 p-4">
      {" "}
      <h2 className="text-lg font-semibold mb-3">S'abonner aux alertes</h2>{" "}
      <p className="text-gray-500 semi-bold">
        Pour recevoir des avis et alertes par courriel ou texto, vous devez
        avoir créé un compte.
      </p>
      <a
        href="#"
        onClick={handleSubscribe}
        className="text-blue-600 hover:underline font-medium"
      >
        M'abonner →
      </a>
    </div>
  );
}

export default AlertSubscribe;
