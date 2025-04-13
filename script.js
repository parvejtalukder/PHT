function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const imageContainer = document.getElementById("imageContainer");

    if (input === "sukria") {
        imageContainer.classList.remove("hidden");
    } else {
        imageContainer.classList.add("hidden");
        alert("No match found. Please try 'Sukria'.");
    }
}
