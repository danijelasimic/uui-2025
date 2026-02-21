// --- 1. INICIJALIZACIJA PODATAKA ---
let korpa = JSON.parse(localStorage.getItem('korpa')) || [];

// --- 2. FUNKCIJA ZA PRIKAZ TABELE ---
function prikaziKorpu() {
    const tabela = document.getElementById('tabela-proizvodi');
    const sadrzaj = document.getElementById('korpa-sadrzaj');
    const prazna = document.getElementById('korpa-prazna');
    const ukupnoDisplay = document.getElementById('ukupna-cena-korpe');

    if (!tabela || !sadrzaj || !prazna) return;

    if (korpa.length === 0) {
        sadrzaj.style.display = 'none';
        prazna.style.display = 'block';
        return;
    }

    sadrzaj.style.display = 'block';
    prazna.style.display = 'none';
    tabela.innerHTML = '';
    let ukupnaSuma = 0;

    korpa.forEach((p, index) => {
        let sumaProizvoda = p.cena * p.kolicina;
        ukupnaSuma += sumaProizvoda;
        tabela.innerHTML += `
            <tr>
                <td style="padding: 20px;">${p.naziv}</td>
                <td style="padding: 20px;">${p.cena} €</td>
                <td style="padding: 20px;">${p.kolicina}</td>
                <td style="padding: 20px; color: #00eaff; font-weight: bold;">${sumaProizvoda} €</td>
                <td style="padding: 20px;"><button class="btn-izbaci" onclick="izbaciIzKorpe(${index})">Izbaci 1 kom</button></td>
            </tr>
        `;
    });
    if (ukupnoDisplay) {
        ukupnoDisplay.innerText = `Ukupno za uplatu: ${ukupnaSuma} €`;
    }
}

// --- 3. IZBACIVANJE IZ KORPE ---
window.izbaciIzKorpe = function(index) {
    if (korpa[index].kolicina > 1) {
        korpa[index].kolicina -= 1;
    } else {
        korpa.splice(index, 1);
    }
    localStorage.setItem('korpa', JSON.stringify(korpa));
    prikaziKorpu();
};

// --- 4. LOGIKA ZA PLAĆANJE (MODAL) ---
document.addEventListener('DOMContentLoaded', () => {
    prikaziKorpu(); // Pokreni odmah čim se učita strana

    const platiBtn = document.getElementById('plati-btn');
    if (platiBtn) {
        platiBtn.onclick = () => {
            if (korpa.length === 0) {
                alert("Korpa je prazna!");
                return;
            }

            const listaRecenzija = document.getElementById('recenzija-lista');
            const modal = document.getElementById('modal-recenzija');
            
            if (!listaRecenzija || !modal) return;

            listaRecenzija.innerHTML = ''; // Čistimo listu pre punjenja

            // Generiši zvezdice za svaki proizvod koji je bio u korpi
            korpa.forEach(p => {
                listaRecenzija.innerHTML += `
                    <div class="rating-box" style="margin-bottom: 20px; padding: 10px; border-bottom: 1px solid #333;">
                        <p style="color: #c77dff; font-weight: bold;">${p.naziv}</p>
                        <div class="star-rating">
                            ${[1, 2, 3, 4, 5].map(num => `
                                <i class="fa-regular fa-star" 
                                   style="cursor:pointer; font-size: 25px; color: #ffca08;" 
                                   onclick="oceni(this, ${num}, '${p.id}')"></i>
                            `).join('')}
                        </div>
                    </div>
                `;
            });

            // Prikaži modal
            modal.style.display = 'flex';

            // VAŽNO: Prvo prikaži modal, pa onda obriši korpu iz memorije
            localStorage.removeItem('korpa');
            // Ne čistimo lokalnu promenljivu 'korpa' odmah da bi modal mogao da se popuni
        };
    }
});

// --- 5. OCENJIVANJE ---
window.oceni = function(element, ocena, proizvodId) {
    const parent = element.parentElement;
    const zvezde = parent.querySelectorAll('i');

    zvezde.forEach((s, i) => {
        if (i < ocena) {
            s.classList.replace('fa-regular', 'fa-solid');
        } else {
            s.classList.replace('fa-solid', 'fa-regular');
        }
    });

    let sveRecenzije = JSON.parse(localStorage.getItem('sve_recenzije')) || [];
    sveRecenzije.push({
        proizvodId: proizvodId,
        ocena: ocena,
        datum: new Date().toLocaleDateString()
    });
    localStorage.setItem('sve_recenzije', JSON.stringify(sveRecenzije));

    parent.style.pointerEvents = "none";
    parent.style.opacity = "0.5";
    alert("Hvala na oceni!");
};