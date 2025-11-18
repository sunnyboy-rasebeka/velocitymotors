

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

