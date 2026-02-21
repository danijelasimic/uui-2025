# Seminarski projekat: Meteorologija i razvoj računara

Ovaj projekat istražuje uticaj računarske tehnologije na razvoj vremenskih prognoza.  
Sadrži HTML stranice, kao i LaTeX dokumentaciju za detaljniji opis.

---

## Struktura projekta

/tanja_tosakovic_mi25201
│
├─ index.html # Početna stranica
├─ modeli.html # Stranica o numeričkim i AI modelima
├─ istorija.html # Tabela i istorija razvoja modela
├─ style.css # Glavni CSS za sve stranice
├─ slike/ # Folder sa slikama
├─ main.tex # Izvorni kod za rad.pdf, LaTeX dokument
├─ rad.pdf # PDF dokumentacija
└─ README.md # Ovaj fajl

---

## Kako pogledati projekat

1. Otvorite bilo koji web pregledač (Chrome, Firefox, Edge...).  
2. Dvaput kliknite na `index.html` da otvorite početnu stranicu.  
3. Pomoću navigacije možete pristupiti `istorija.html`, `modeli.html` i `kontakt.html`.  
4. Slike i tabele su integrisane u stranice radi vizuelne podrške sadržaju.

---

## Kompilacija PDF rada

PDF dokumentacija se generiše iz LaTeX fajla `main.tex`.  

### Na Windows-u

1. Uverite se da imate instaliran TeX distribuciju (npr. **TeX Live**).  
2. Otvorite VS Code i instalirajte ekstenziju **LaTeX Workshop**.  
3. Otvorite `main.tex` u VS Code.  
4. Koristite komandu **Build LaTeX project**.  
5. Na izlazu će biti generisan `rad.pdf`. 

Ako rad.pdf ne nastane, proveriti da li je path do TeX kompajlera u sistemskoj promenljivoj PATH.

### Na Linux-u

1. Instalirajte TeX Live ako nije instaliran, na primer:

   sudo apt install texlive-full

2. Otvorite terminal u folderu sa main.tex.
3. pdflatex main.tex
4. pdflatex main.tex 


### Korišćenje Overleaf-a

1. Posetite Overleaf i prijavite se.

2. Kreirajte novi projekat i otpremite sve fajlove (main.tex, slike/ i ostale potrebne fajlove).

3. Kliknite Recompile da biste generisali rad.pdf.

## Аутор

Tanja Tošaković 
