document.getElementById('kontakt-forma').onsubmit = function (e) {
    // 1. Spreči podrazumevano ponašanje (da stranica ne odleti odmah)
    e.preventDefault();

    // 2. Uzmi vrednosti da proveriš da li su prazne
    const ime = document.getElementById('ime-prezime').value;
    const adresa = document.getElementById('adresa').value;
    const email = document.getElementById('email').value;

    if (ime === "" || adresa === "" || email === "") {
        alert("Molimo vas popunite sva polja!");
        return;
    }

    // 3. KLJUČNI DEO: Upisivanje u localStorage
    // Koristimo tačno onaj ključ koji detalji.js traži
    localStorage.setItem('korisnik_popunio_formu', 'true');

    // Opciono: Sačuvaj i ime da možeš da ga pozdraviš u korpi
    localStorage.setItem('ime_korisnika', ime);

    // 4. Potvrda korisniku
    alert("Hvala, " + ime + "! Vaš nalog je sada aktivan i možete kupovati.");

    // 5. Preusmeravanje na komponente
    window.location.href = "komponente.html";
};