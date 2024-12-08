const shareBtn = document.getElementById("shareBtn");
const shareIconsActive = document.querySelector(".shareIconsActive");
const profileID = document.getElementById("profileID");
const card = document.querySelector(".card");

function revealShareLinks() {
    shareIconsActive.style.display = (shareIconsActive.style.display === 'flex') ? 'none' : 'flex';
    profileID.classList.toggle("hidden");
    card.classList.toggle("active");
}

shareBtn.addEventListener("click", revealShareLinks);