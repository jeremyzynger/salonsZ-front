function toggleSM() {
  if (document.getElementById("mySidemenu").style.width === "100%") {
    // Si le menu est ouvert, on le ferme
    closeSM();
  } else {
    // Sinon, on l'ouvre
    openSM();
  }
}

function openSM() {
  document.getElementById("mySidemenu").style.width = "100%";
}

function closeSM() {
  document.getElementById("mySidemenu").style.width = "0";
}
document.addEventListener("DOMContentLoaded", function () {
  const timeInput = document.getElementById("time");

  // Créer un conteneur pour les boutons
  const timeContainer = document.createElement("div");
  timeContainer.classList.add("time-buttons");
  timeInput.parentNode.replaceChild(timeContainer, timeInput);

  // Liste des créneaux horaires disponibles
  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
  ];

  // Créer les boutons pour chaque créneau horaire
  timeSlots.forEach((time) => {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("time-button");
    button.textContent = time;
    button.setAttribute("data-time", time);

    // Ajouter un événement pour sélectionner l'heure
    button.addEventListener("click", function () {
      // Mettre à jour l'input caché avec le créneau horaire sélectionné
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = "time"; // Le même nom que l'input d'origine
      hiddenInput.value = time;
      timeContainer.appendChild(hiddenInput);

      // Mettre à jour l'apparence du bouton sélectionné
      document
        .querySelectorAll(".time-button")
        .forEach((b) => b.classList.remove("selected"));
      button.classList.add("selected");
    });

    timeContainer.appendChild(button);
  });
});
