const canvas = document.getElementById("Matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// KLASA SYMBOL
// Predstavlja jedan simbol koji pada niz ekran
class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = "";
    this.canvasHeight = canvasHeight;
  }
  // DRAW METODA
  // Crta simbol na canvasu i pomera ga nadole
  draw(ctx) {
    // Randomizuje simbol koji ce biti prikazan
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length),
    );
    // Crta simbol na canvasu
    ctx.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}
// KLASA EFFECT
// Upravlja svim simbolima koji se nalaze na ekranu
class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 15;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
  // PRIVATNA METODA INITIALIZE
  // Kreira jedan Symbol za svaku kolonu
  #initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }
  // RESIZE METODA
  // Poziva se kada promenimo veličinu prozora pretraživača
  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
}

const effect = new Effect(canvas.width, canvas.height);
// PODEŠAVANJE ANIMACIJE
let lastTime = 0;
const fps = 30;
const nextFrame = 1000 / fps;
let timer = 0;

// ANIMATE FUNKCIJA
// Glavna funkcija koja stalno ponavlja animaciju
function animate(timestamp) {
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  if (timer >= nextFrame) {
    // Ovo je veoma važno za Matrix efekat.
    // Umesto da potpuno obrišemo ekran, preko njega
    // stavimo poluprovidnu crnu boju.
  
    // Zbog toga prethodni simboli polako nestaju
    // i dobijamo efekat "traga".
    ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
    ctx.textAlign = "center";
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
    ctx.fillStyle = "#0aff0a";
    ctx.font = effect.fontSize + "px monospace";
    effect.symbols.forEach((symbol) => symbol.draw(ctx));
    timer = 0;
  } else {
    timer += deltaTime;
  }
  requestAnimationFrame(animate);
}
animate(0);
// RESIZE EVENT
// Prati promenu veličine browser prozora
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    effect.resize(canvas.width, canvas.height);
  });
