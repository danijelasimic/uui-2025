## UUI seminarski – Malone Lam studija slučaja

Ovo je seminarski projekat iz oblasti sajber bezbednosti sa fokusom na
person‑to‑person krađu kriptovaluta kroz slučaj Malone Lama.

Projekat se sastoji iz:
- HTML/CSS dela (narativ + analiza i izvori)
- LaTeX dela (kratak akademski tekst u PDF formatu)

---

### Struktura foldera

- `index.html` – početna stranica sa narativom
- `tema.html` – detaljnija analiza napada, faza i izvora
- `autor.html` – informacije o autoru i pouke priče
- `style.css` – zajednički stil za sve stranice
- `slike/` – korišćene slike (logo kripto menjačnice, fotografija Malone Lama)
- `muzika/` – lokalni audio fajl korišćen za „Muzika“ opciju u meniju
- `main.tex` – LaTeX izvor kratkog akademskog rada
- `rad.pdf` – generisani PDF rada iz `main.tex`
- `README.md` – ovaj opis projekta

---

### Pokretanje HTML dela

1. Otvoriti glavni folder projekta.
2. Pokrenuti fajl `index.html` u pregledaču
3. Navigacija u vrhu stranice vodi na:
   - „Početna“ (`index.html`)
   - „Tema“ (`tema.html`)
   - „O autoru“ (`autor.html`)
4. Svi resursi (slike, CSS, muzika) su lokalni – nema eksternih CDN linkova.

---

### LaTeX deo – rad.pdf

- Izvorni fajl rada je `main.tex`.
- PDF fajl zove se `rad.pdf` i nalazi se u istom folderu.
- Dokument je na ćirilici i sadrži:
  - naslov, autora i datum
  - sadržaj (table of contents) na početku
  - poglavlja i potpoglavlja (`\section`, `\subsection`)
  - bar jednu matematičku formulu
  - jednu tabelu
  - liste u različitim formatima
  - jednu sliku (logo kripto menjačnice) poravnatu levo uz tekst
  - teoremu, definiciju i lemu na srpskom jeziku
  - tekst u različitim formatima (bold, italic, obojeni delovi)
  - kratak zaključak

Za ponovno generisanje PDF-a (npr. na Linux/Windows okruženju sa TeX Live ili MiKTeX):

```bash
pdflatex -interaction=nonstopmode -jobname=rad main.tex
```

Komanda se pokreće iz glavnog foldera projekta (gde se nalazi `main.tex`).

---

### Napomena

- Ceo projekat je samodovoljan, bez zavisnosti od interneta za prikaz sadržaja.