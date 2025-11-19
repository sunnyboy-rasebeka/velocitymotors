

function openLightbox(imageSrc) {
    document.getElementById("lightbox-img").src = imageSrc;
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}


function validate () {
    let name = document.getElementById("cname").value
    let email = document.getElementById("cemail").value
    let reason = document.getElementById("reason").value
    let msg = document.getElementById("message").value

    if (name === "" || email === "" || reason === "" || msg === "") {
        alert("Please fill in all fields before submitting.");
        return;
}

function validate () {
     let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let car = document.getElementById("carSelection").value

}

function validate () {
    var map = L.map('map').setView([-26.2041, 28.0473], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Velocity Motors Map'
}).addTo(map)

L.marker([-26.2041, 28.0473])
    .addTo(map)
    .bindPopup("Velocity Motors - Pretoria</b><br>Head Office")

}