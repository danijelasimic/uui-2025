// 1. Uzimanje ID-ja iz URL adrese
const urlParams = new URLSearchParams(window.location.search);
const proizvodId = urlParams.get('id');

// 2. UMESTO FETCH-A, KORISTIMO LOKALNE PODATKE
// (Ovde nalepi onaj isti objekt 'const podaci = {...}' koji imaš u script.js)
const podaci = {
    "graficke_karte": [
        { "id": "g1", "naziv": "NVIDIA RTX 5090 Ti", "cena": 2499, "opis": "Vrhunska snaga za 4K Ultra gaming.", "slika": "slike/gpu1.jpg" },
        { "id": "g2", "naziv": "AMD Radeon RX 8900 XTX", "cena": 1199, "opis": "Zver za rasterizaciju i FSR 4.0.", "slika": "slike/gpu2.jpg" },
        { "id": "g3", "naziv": "NVIDIA RTX 4080 Super", "cena": 1050, "opis": "Najbolji balans za Ray Tracing.", "slika": "slike/gpu3.jpg" },
        { "id": "g4", "naziv": "NVIDIA RTX 4070 Ti", "cena": 850, "opis": "Savršena karta za 1440p monitore.", "slika": "slike/gpu4.jpg" },
        { "id": "g5", "naziv": "AMD Radeon RX 7800 XT", "cena": 550, "opis": "Best-buy karta srednje klase.", "slika": "slike/gpu5.jpg" },
        { "id": "g6", "naziv": "NVIDIA RTX 4060 Ti", "cena": 400, "opis": "Efikasnost i DLSS 3 tehnologija.", "slika": "slike/gpu6.jpg" },
        { "id": "g7", "naziv": "AMD Radeon RX 7600", "cena": 280, "opis": "Budžet 1080p gaming rešenje.", "slika": "slike/gpu7.jpg" },
        { "id": "g8", "naziv": "NVIDIA RTX 3060 12GB", "cena": 300, "opis": "Legendarna karta sa dosta VRAM-a.", "slika": "slike/gpu8.jpg" },
        { "id": "g9", "naziv": "ASUS ROG Strix RTX 4090", "cena": 2100, "opis": "Premium hlađenje i dizajn.", "slika": "slike/gpu9.jpg" },
        { "id": "g10", "naziv": "MSI Gaming X Trio RTX 4070", "cena": 650, "opis": "Tiha i hladna u svim uslovima.", "slika": "slike/gpu10.jpg" },
        { "id": "g11", "naziv": "Gigabyte Windforce RTX 4060", "cena": 320, "opis": "Kompaktan dizajn za ITX kućišta.", "slika": "slike/gpu11.jpg" },
        { "id": "g12", "naziv": "Sapphire Pulse RX 7900 XT", "cena": 890, "opis": "Pouzdano hlađenje od Sapphire-a.", "slika": "slike/gpu12.jpg" }
    ],
    "procesori": [
    { "id": "c1", "naziv": "AMD Ryzen 9 7950X3D", "cena": 699, "opis": "Najbrži gaming procesor na svetu.", "slika": "slike/cpu1.jpg", "specifikacije": ["16 jezgra / 32 thread-a", "3D V-Cache tehnologija", "AM5 socket", "Boost do 5.7GHz"] },
    { "id": "c2", "naziv": "Intel Core i9-14900K", "cena": 620, "opis": "24 jezgra za brutalnu produktivnost.", "slika": "slike/cpu2.jpg", "specifikacije": ["8 P-jezgara + 16 E-jezgara", "Turbo Boost do 6.0GHz", "LGA 1700", "Podrška za DDR4/DDR5"] },
    { "id": "c3", "naziv": "AMD Ryzen 7 7800X3D", "cena": 450, "opis": "Omiljeni izbor svih gejmera.", "slika": "slike/cpu3.jpg", "specifikacije": ["8 jezgra / 16 thread-a", "Najbolji FPS po dolaru", "96MB L3 cache", "5.0GHz Boost"] },
    { "id": "c4", "naziv": "Intel Core i7-14700K", "cena": 430, "opis": "Odličan balans za strimovanje.", "slika": "slike/cpu4.jpg", "specifikacije": ["20 jezgra / 28 thread-a", "Poboljšan multithreading", "Intel UHD Graphics 770", "5.6GHz Boost"] },
    { "id": "c5", "naziv": "AMD Ryzen 5 7600X", "cena": 240, "opis": "Ulaznica u AM5 DDR5 svet.", "slika": "slike/cpu5.jpg", "specifikacije": ["6 jezgra / 12 thread-a", "Zen 4 arhitektura", "PCIe 5.0 podrška", "Sjajan za 1440p gaming"] },
    { "id": "c6", "naziv": "Intel Core i5-13600K", "cena": 320, "opis": "Kralj srednje kategorije.", "slika": "slike/cpu6.jpg", "specifikacije": ["14 jezgra / 20 thread-a", "Odličan za multitasking", "Stable overclocking", "LGA 1700"] },
    { "id": "c7", "naziv": "AMD Ryzen 9 5900X", "cena": 350, "opis": "Zver za AM4 platformu.", "slika": "slike/cpu7.jpg", "specifikacije": ["12 jezgra / 24 thread-a", "Podržava DDR4", "Zen 3 arhitektura", "4.8GHz Boost"] },
    { "id": "c8", "naziv": "Intel Core i5-12400F", "cena": 160, "opis": "Najbolja vrednost za malo novca.", "slika": "slike/cpu8.jpg", "specifikacije": ["6 jezgra / 12 thread-a", "Bez integrisane grafike", "Hladan i štedljiv", "Budžet gaming favorit"] },
    { "id": "c9", "naziv": "AMD Ryzen 7 5700X", "cena": 200, "opis": "8 jezgara za budžet build.", "slika": "slike/cpu9.jpg", "specifikacije": ["8 jezgra / 16 thread-a", "TDP samo 65W", "AM4 kompatibilnost", "Odličan za video editing"] },
    { "id": "c10", "naziv": "Intel Core i3-13100", "cena": 130, "opis": "Solidan izbor za kućni PC.", "slika": "slike/cpu10.jpg", "specifikacije": ["4 jezgra / 8 thread-a", "Intel Laminar RM1 kuler", "Podrška za 4K video", "DDR5 kompatibilan"] },
    { "id": "c11", "naziv": "AMD Ryzen 5 5600G", "cena": 150, "opis": "Procesor sa integrisanom grafikom.", "slika": "slike/cpu11.jpg", "specifikacije": ["Radeon Vega integrisana grafika", "6 jezgra", "Moguće igranje bez GPU-a", "AM4"] },
    { "id": "c12", "naziv": "Intel Core i9-12900K", "cena": 400, "opis": "Bivši šampion, i dalje moćan.", "slika": "slike/cpu12.jpg", "specifikacije": ["16 jezgra", "LGA 1700", "Odličan za workstation zadatke", "PCIe 5.0"] }
  ],
  "memorija_storage": [
    { "id": "r1", "naziv": "Corsair Dominator 64GB DDR5", "cena": 320, "opis": "6000MHz sa RGB osvetljenjem.", "slika": "slike/ram1.jpg", "specifikacije": ["2 x 32GB kit", "6000MT/s", "CL30 latencija", "Patented DHX cooling"] },
    { "id": "r2", "naziv": "Samsung 990 Pro 2TB", "cena": 190, "opis": "Najbrži NVMe Gen4 SSD.", "slika": "slike/ssd1.jpg", "specifikacije": ["Read: 7450 MB/s", "Write: 6900 MB/s", "V-NAND tehnologija", "5 godina garancije"] },
    { "id": "r3", "naziv": "Kingston Fury 32GB DDR5", "cena": 140, "opis": "Stabilna i brza memorija.", "slika": "slike/ram2.jpg", "specifikacije": ["2 x 16GB kit", "5200MT/s", "Plug N Play OC", "Low profile dizajn"] },
    { "id": "r4", "naziv": "WD Black SN850X 1TB", "cena": 110, "opis": "Vrhunski SSD za gejming konzole i PC.", "slika": "slike/ssd2.jpg", "specifikacije": ["Read: 7300 MB/s", "Game Mode 2.0", "Opcioni heatsink", "DirectStorage podrška"] },
    { "id": "r5", "naziv": "G.Skill Trident Z5 32GB", "cena": 160, "opis": "Ekstremna brzina od 7200MHz.", "slika": "slike/ram3.jpg", "specifikacije": ["DDR5-7200 CL34", "Elegantni aluminijumski heatspreader", "RGB personalizacija", "Intel XMP 3.0"] },
    { "id": "r6", "naziv": "Crucial P3 4TB NVMe", "cena": 250, "opis": "Ogroman prostor za sve tvoje igre.", "slika": "slike/ssd3.jpg", "specifikacije": ["4TB kapacitet", "3500 MB/s Read", "QLC tehnologija", "Dobra vrednost za skladištenje"] },
    { "id": "r7", "naziv": "Corsair Vengeance 16GB DDR4", "cena": 50, "opis": "Standard za DDR4 konfiguracije.", "slika": "slike/ram4.jpg", "specifikacije": ["2 x 8GB kit", "3200MHz", "CL16", "Legendarna stabilnost"] },
    { "id": "r8", "naziv": "Samsung 870 EVO 1TB", "cena": 90, "opis": "Pouzdan SATA SSD za skladištenje.", "slika": "slike/ssd4.jpg", "specifikacije": ["2.5 inča SATA", "560 MB/s Read", "Idealan za starije PC-eve", "Samsung Magician software"] },
    { "id": "r9", "naziv": "TeamGroup T-Force 32GB", "cena": 130, "opis": "Unikatan dizajn i visoke performanse.", "slika": "slike/ram5.jpg", "specifikacije": ["Delta RGB serija", "6000MHz", "120° širokougaono osvetljenje", "DDR5"] },
    { "id": "r10", "naziv": "Seagate FireCuda 2TB", "cena": 180, "opis": "Dizajniran za profesionalne gejmere.", "slika": "slike/ssd5.jpg", "specifikacije": ["Gen4 NVMe", "Ekstremna izdržljivost (TBW)", "Rescue Data Recovery usluge", "7300 MB/s"] },
    { "id": "r11", "naziv": "Kingston Renegade 32GB", "cena": 150, "opis": "Niska latencija, maksimalan FPS.", "slika": "slike/ram6.jpg", "specifikacije": ["DDR5-6400", "CL32 latencija", "Dizajn inspirisan trkama", "Intel & AMD sertifikovan"] },
    { "id": "r12", "naziv": "Sabrent Rocket 4 Plus 2TB", "cena": 210, "opis": "Brzina koja pomera granice.", "slika": "slike/ssd6.jpg", "specifikacije": ["7100 MB/s Read", "Napredni kontroler", "Wear Leveling", "Odlične performanse pod opterećenjem"] }
  ]
};

// 3. LOGIKA ZA PRIKAZ (Bez fetch-a)
const prikaziDetalje = () => {
    // Spajamo sve kategorije u jednu listu za lakšu pretragu
    const sviProizvodi = [
        ...podaci.graficke_karte,
        ...podaci.procesori,
        ...podaci.memorija_storage
    ];

    const proizvod = sviProizvodi.find(p => p.id === proizvodId);

    if (proizvod) {
        const osnovnaCena = proizvod.cena;

        // --- Logika za prosečnu ocenu ---
        let sveOcene = JSON.parse(localStorage.getItem('sve_recenzije')) || [];
        let oceneZaOvajProizvod = sveOcene.filter(o => o.proizvodId === proizvod.id);
        let ocenaTekst = '';

        if (oceneZaOvajProizvod.length > 0) {
            let suma = oceneZaOvajProizvod.reduce((acc, curr) => acc + curr.ocena, 0);
            let prosek = (suma / oceneZaOvajProizvod.length).toFixed(1);
            ocenaTekst = `<div style="color: #ffca08; margin-bottom: 5px;">★ ${prosek} (${oceneZaOvajProizvod.length} recenzija)</div>`;
        }

        document.getElementById('detalji-slika').src = proizvod.slika;
        document.getElementById('detalji-naslov').innerText = proizvod.naziv;
        document.getElementById('detalji-cena').innerHTML = `${ocenaTekst} Cena: ${osnovnaCena} €`;

        document.getElementById('detalji-opis').innerHTML = `
            <p style="margin-bottom: 15px;">${proizvod.opis}</p>
            <strong style="color: #c77dff;">Tehničke specifikacije:</strong>
            <ul id="lista-specifikacija" style="margin-top: 10px; color: #d1d1d1; line-height: 1.8;"></ul>
        `;

        const lista = document.getElementById('lista-specifikacija');
        if (proizvod.specifikacije) {
            proizvod.specifikacije.forEach(item => {
                let li = document.createElement('li');
                li.innerText = item;
                lista.appendChild(li);
            });
        }

        const akcijeKontejner = document.getElementById('proizvod-akcije');
        akcijeKontejner.innerHTML = `
            <div class="quantity-control" style="display:flex; align-items:center; gap:10px; margin-bottom:20px;">
                <button id="minus-btn" class="qty-icon-btn" style="background:none; border:none; color:white; cursor:pointer; font-size:20px;"><i class="fa-solid fa-circle-minus"></i></button>
                <input type="number" id="kolicina-input" value="1" min="1" readonly style="width:40px; text-align:center; background:#0d1220; color:white; border:1px solid #c77dff;">
                <button id="plus-btn" class="qty-icon-btn" style="background:none; border:none; color:white; cursor:pointer; font-size:20px;"><i class="fa-solid fa-circle-plus"></i></button>
            </div>
            <button class="buy-btn" id="dodaj-u-korpu-btn">Dodaj u korpu</button>
        `;

        const inputKolicina = document.getElementById('kolicina-input');
        const cenaDisplay = document.getElementById('detalji-cena');
        const btnDodaj = document.getElementById('dodaj-u-korpu-btn');

        // Provera da li sme da kupi
        const proveriStatusKupovine = () => {
            if (localStorage.getItem('korisnik_popunio_formu') !== 'true') {
                btnDodaj.style.opacity = "0.5";
                btnDodaj.style.cursor = "not-allowed";
                btnDodaj.innerHTML = '<i class="fa-solid fa-lock"></i> Prijavite se';
            }
        };
        proveriStatusKupovine();

        btnDodaj.onclick = () => {
            if (localStorage.getItem('korisnik_popunio_formu') !== 'true') {
                alert("Morate popuniti kontakt formu!");
                window.location.href = "kontakt.html";
                return;
            }

            let korpa = JSON.parse(localStorage.getItem('korpa')) || [];
            const kolicinaZaDodavanje = parseInt(inputKolicina.value);

            const postojeciIndex = korpa.findIndex(p => p.id === proizvod.id);
            if (postojeciIndex > -1) {
                korpa[postojeciIndex].kolicina += kolicinaZaDodavanje;
            } else {
                korpa.push({
                    id: proizvod.id,
                    naziv: proizvod.naziv,
                    cena: proizvod.cena,
                    kolicina: kolicinaZaDodavanje
                });
            }

            localStorage.setItem('korpa', JSON.stringify(korpa));
            alert(`Dodato: ${kolicinaZaDodavanje}x ${proizvod.naziv}`);
        };

        document.getElementById('plus-btn').onclick = () => {
            inputKolicina.value = parseInt(inputKolicina.value) + 1;
            cenaDisplay.innerHTML = `${ocenaTekst} Cena: ${parseInt(inputKolicina.value) * osnovnaCena} €`;
        };

        document.getElementById('minus-btn').onclick = () => {
            if (parseInt(inputKolicina.value) > 1) {
                inputKolicina.value = parseInt(inputKolicina.value) - 1;
                cenaDisplay.innerHTML = `${ocenaTekst} Cena: ${parseInt(inputKolicina.value) * osnovnaCena} €`;
            }
        };

    } else {
        document.getElementById('detalji-proizvoda').innerHTML = "<h1>Proizvod nije pronađen!</h1>";
    }
};

// Pokreni funkciju
document.addEventListener('DOMContentLoaded', prikaziDetalje);