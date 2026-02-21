# Projekat — Uvod u informatiku (MI25120)

## Struktura projekta
CIVIC_MILOS_MI120/
│
├── index.html          → početna strana
├── tema.html           → o meni, predmeti i materijali
├── kontakt.html        → kontakt forma (demo)
├── style.css           → spoljni CSS stilovi
├── script.js           → JavaScript (navigacija, scroll bar, forma)
├── main.tex            → LaTeX izvor
├── rad.pdf             → generisani PDF dokument
└── /slike              → slike korišćene u projektu (profil.jpg, hero.jpg, hero1.jpg)

## HTML deo
- Tri međusobno povezane stranice: index.html, tema.html, kontakt.html
- Korišćeni elementi: naslovi, paragrafi, liste, linkovi, slike, tabela, forma
- Navigacija funkcionalna i konzistentna
- Stilizacija preko spoljnog CSS fajla (style.css)
- Hover efekti na linkovima i dugmadima
- JavaScript (`script.js`) dodaje: scroll progress bar, aktivnu navigaciju, demo feedback za formu

## LaTeX deo
- Dokument na ćirilici (~1 strana)
- Naslov, autor, datum
- Sadržaj na početku
- Poglavlja i potpoglavlja
- Matematičke formule
- Jedna tabela
- Liste u različitim formatima
- Jedna slika (profil.jpg)
- Теорема, дефиниција, лема
- Tekstualni formati (bold, italic, boja)
- Kratak zaključak

## Kako pokrenuti projekat
1. Otvoriti `index.html` u web pregledaču (Chrome, Firefox, Edge).
2. Navigacija vodi na `tema.html` i `kontakt.html`.
3. Za PDF deo: kompajlirati `main.tex` pomoću XeLaTeX (npr. na Overleafu).
4. Generisani dokument se nalazi u `rad.pdf`.

## Napomena
- Sve putanje su relativne (`./slike/...`).
- Svi resursi su lokalni (nema eksternih CSS ili slika).
- Kontakt forma je demonstrativna (nema backend).

## Autor
Miloš — Matematički fakultet, Univerzitet u Beogradu  
Broj indeksa: MI25120  
Predmet: Uvod u informatiku