document.addEventListener("DOMContentLoaded", function () {
  const consentBox = document.getElementById("consentBox");
  const acceptBtn = document.querySelector(".consentButton");
  const rejectBtn = document.querySelector(".rejectButton");

  // Crée un cookie avec une durée en secondes
  function setCookie(name, value, seconds) {
    const date = new Date();
    date.setTime(date.getTime() + (seconds * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  // Lit un cookie
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
      const [key, value] = c.split("=");
      if (key === name) return value;
    }
    return null;
  }

  // Affiche ou masque la boîte de consentement
  const consent = getCookie("cookieConsent");
  if (!consent) {
    consentBox.style.display = "flex";
  } else {
    consentBox.style.display = "none";
  }

  // Bouton Accepter
  acceptBtn.addEventListener("click", () => {
    setCookie("cookieConsent", "accepted", 30); // expire en 30 secondes
    consentBox.style.display = "none";
  });

  // Bouton Refuser
  rejectBtn.addEventListener("click", () => {
    setCookie("cookieConsent", "rejected", 30); // expire en 30 secondes
    consentBox.style.display = "none";
  });
});
