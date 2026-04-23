

window.onload = function () {
  const Numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const Palo = ["Diamantes", "Treboles", "Corazones", "Picas"];

  const randomNumero = Math.floor(Math.random() * Numero.length);
  const randomPalo = Math.floor(Math.random() * Palo.length);

  document.getElementById("numero").innerHTML = Numero[randomNumero];

  function ObtenerPalo(palo) {
    switch (palo) {
      case "Diamantes": return "diamantes";
      case "Picas": return "picas";
      case "Corazones": return "corazones";
      case "Treboles": return "treboles";
    }
  }

  const claseElegida = ObtenerPalo(Palo[randomPalo]);

  document.querySelectorAll(".palo").forEach((paloElement) => {
    paloElement.classList.add(claseElegida);
  });
};
