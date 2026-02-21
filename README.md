# uui-2025
Repozitorijum za izradu seminarskog iz predmeta Uvod u informatiku za školsku 2025/2026 godinu


Cilj ovog zadatka je da naučite osnovni GitHub tok rada koji se koristi u praksi:
**fork → branch → commit → push → pull request → code review**.

Sve izmene se rade preko GitHub-a. Direktan rad na glavnoj grani (`main`) **nije dozvoljen**.

---

## 1. Kreiranje GitHub naloga

1. Otvorite https://github.com
2. Napravite nalog koristeći **fakultetski mejl**:
```

[indeks@alas.matf.bg.ac.rs]

````
3. Zapamtite svoje **GitHub korisničko ime** – koristićete ga u projektu.

---

## 2. Kreiranje Personal Access Token-a (PAT)

GitHub više **ne dozvoljava korišćenje lozinke** za `git push`. Umesto toga koristi se token.

1. Na GitHub-u:
- Kliknite na sliku profila → **Settings**
- **Developer settings**
- **Personal access tokens**
- **Tokens (classic)**
- **Generate new token**

2. Podešavanja tokena:
- Expiration: po izboru (npr. 30 dana)
- Scope:
  - ✔ `repo` (obavezno)

3. Kliknite **Generate token** i **kopirajte token**
> Token se prikazuje samo jednom – sačuvajte ga.

---

## 3. Fork repozitorijuma

1. Otvorite glavni repozitorijum predmeta
2. Kliknite **Fork**
3. Sada imate **svoju kopiju repozitorijuma** na svom nalogu

---

## 4. Kloniranje repozitorijuma

U terminalu:

```bash
git clone https://github.com/VAŠ_GITHUB_USERNAME/uui-2025.git
cd uui-2025
````

Ako Git traži identitet:

```bash
git config --global user.name "Ime Prezime"
git config --global user.email "indeks@alas.matf.bg.ac.rs" (na primer mi25005@alas.matf.bg.ac.rs)
```

---

## 5. Pravljenje branch-a

Nikada ne radite direktno na `main`.

```bash
git switch -c ime_prezime_indeks
```

---

## 6. Struktura projekta i izmene

### 6.2 Kreiranje sopstvenog foldera

Napravite folder:

```bash
studenti/ime_prezime_mi25005/
```

U njemu napravite sadržaj prema [uputstvu](https://poincare.matf.bg.ac.rs/~danijela.simic/uui.html).

---

## 7. Add i commit

```bash
git add .
git commit -m "Add mini-task for ime_prezime_mi25005"
```

---

## 8. Push na GitHub

```bash
git push -u origin ime_prezime_mi25005
```

Kada Git pita:

* **Username**: vaše GitHub korisničko ime
* **Password**: nalepite **Personal Access Token**

* Tokom rada može se više puta dodavati sadržaj (korišćenjem naredbi `add`, `commit` i `push`).

---

## 9. Pravljenje Pull Request-a

Kada ste kompletno završili projekat i želite da predate svoj seminarski na pregled i ocenu, onda idete na ovaj korak. Pre ovog koraka možete više puta raditi `commit`, ali ako ste zavšili sve i ne planirate ništa novo da dodajte idete na ovaj korak, tj. na korak **broj 9**.

1. Otvorite svoj fork na GitHub-u
2. Kliknite **Compare & Pull Request**
3. Proverite:

   * Base repository: **repo predmeta**
   * Base branch: `main`
4. Kliknite **Create Pull Request**

> Vi **ne merge-ujete** Pull Request. Samo ga podnosite.

---

## 10. Izmene nakon komentara

Ako dobijete komentare na PR:

1. Izmenite fajlove lokalno
2. Ponovo uradite:

   ```bash
   git add .
   git commit -m "Fix comments"
   git push
   ```
3. Pull Request se automatski ažurira

---

## 11. Code review 

Svaki student mora da uradi **2 code review-a** na Pull Request-ovima drugih kolega.

---

#### 11.1 Kako da pronađete Pull Request za review

1. Otvorite **glavni repozitorijum predmeta** (ne vaš fork).
2. Kliknite na karticu **Pull requests**.
3. Izaberite neki Pull Request koji **nije vaš**.

---

#### 11.2 Kako da uradite code review (korak-po-korak)

1. U okviru izabranog Pull Request-a kliknite na karticu **Files changed**.
2. Pregledajte izmene:

   * da li je dodat samo jedan `<li>` red u `index.html`
   * da li postoji folder `students/ime_prezime_mi25005/`
   * da li link u `<li>` vodi na postojeći `index.html`
   * ....
3. Kliknite na **plavi plus (`+`)** pored linije koda koju komentarišete.
4. Upišite komentar (npr.:

   * “Link ka mini-zadatku radi i vodi na ispravan fajl.”
   * “Naziv foldera nije po zadatom formatu.”)

---

#### 11.3 Kako da pošaljete review

1. Nakon što ste dodali komentar(e), kliknite **Review changes** (gore desno).
2. Izaberite jednu od opcija:

   * **Comment** – ako ostavljate komentar bez odobravanja
   * **Approve** – ako je sve u redu (obavezno dodati kratko obrazloženje)
3. Kliknite **Submit review**.

> Review bez teksta (npr. samo “LGTM”) se **ne priznaje**.

---

#### 11.5 Šta se smatra validnim review-om

Validan review je:

* komentar koji ukazuje na grešku ili poboljšanje, **ili**
* approval sa kratkim objašnjenjem (1–2 rečenice)

Nevalidan review je:

* “LGTM”
* “OK”
* “Super”
* review bez ikakvog teksta

---

#### 11.6 Nakon review-a

* Autor Pull Request-a vidi komentare i po potrebi pravi nove izmene.
* Review se automatski povezuje sa Pull Request-om.
* Nije potrebno dodatno slati mejl ili poruku.


---

## 12. Merge

* Pull Request **merge-uje isključivo nastavnik**
* Vi samo čekate da PR bude pregledan i prihvaćen

---

## Važne napomene

* Ne menjati tuđe foldere
* Ne menjati tuđe `<li>` redove
* Ne raditi direktno na `main`
* Bez velikih i binarnih fajlova

---

Ovaj proces je sličan onome što se koristi u realnim softverskim timovima
(prekočili smo korak `rebase`, koji se obično izvodi ali svi ostali koraci su
tu).

