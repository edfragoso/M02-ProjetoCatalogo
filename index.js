const express = require("express");
const res = require("express/lib/response");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const vinhoTinto = [
  {
    id: 1,
    nome: "Valparaiso Vitale Nebbiolo",
    uva: "Sangiovese",
    tipo: "Tinto",
    gradAlcoo: 12.5,
    safra: 2018,
    vinhedo: "Serra Gaúcha",
    classe: "Fino",
    Classificacao: "Seco",
    volume: 750,
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/v/a/valparaiso-nebbiolo.jpg",
  },

  {
    id: 2,
    nome: "Adega do Vale Cabernet Sauvignon",
    uva: "Cabernet Sauvignon",
    tipo: "Tinto",
    gradAlcoo: 10.5,
    safra: "Não Safrado",
    vinhedo: "Vale so São Francisco - BA",
    classe: "Fino",
    Classificacao: "Seco",
    volume: 750,
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/a/d/adega-do-vale---cs.jpg",
  },

  {
    id: 3,
    nome: "Rio Sol 8 Gran Reserva",
    uva: "Assemblage",
    tipo: "Tinto",
    gradAlcoo: 13.5,
    safra: 2017,
    vinhedo: "Vale so São Francisco - BA",
    classe: "Fino",
    Classificacao: "Seco",
    volume: 750,
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/r/i/rio-sol-8-gan-reserva.jpg",
  },

  {
    id: 4,
    nome: "Rio Sol Cabernet Sauvignon",
    uva: "Cabernet Sauvignon",
    tipo: "Tinto",
    gradAlcoo: 13,
    safra: 2018,
    vinhedo: "Vale so São Francisco - BA",
    classe: "Fino",
    Classificacao: "Seco",
    volume: 750,
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/r/i/rio-sol-cabernet-sauvignon.jpg",
  },
];
const vinhoBranco = [
  {
    id: 1,
    nome: "Amitié Chardonnay OAK Barrel",
    uva: "Chardonnay",
    tipo: "Branco",
    gradAlcoo: 14,
    safra: 2020,
    vinhedo: "Campanha Gaúcha",
    classe: "Fino",
    Classificacao: "Seco",
    volume: 750,
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/a/m/amitie-chardonnay_1_.jpg",
  },

  {
    id: 2,
    nome: "Valparaiso Vitale Torrontés",
    uva: "Torrontés",
    tipo: "Branco",
    gradAlcoo: 12,
    safra: 2020,
    vinhedo: "Vila Rica - Barão - RS",
    classe: "Fino",
    Classificacao: "Seco",
    volume: 750,
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/v/a/valparaiso-torrontes.jpg",
  },

  {
    id: 3,
    nome: "Valparaiso Vitale Chardonnay",
    uva: "Chardonnay",
    tipo: "Branco",
    gradAlcoo: 12,
    safra: 2018,
    vinhedo: "Vila Rica - Barão - RS",
    classe: "Fino",
    Classificacao: "Seco",
    volume: 750,
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/v/a/valparaiso-chardonnay.jpg",
  },

  {
    id: 4,
    nome: "Tempos de Góes Sauvignon Blanc Reserva",
    uva: "Sauvignon Blanc",
    tipo: "Branco",
    gradAlcoo: 12.5,
    safra: 2021,
    vinhedo: "São Roque - São Paulo",
    classe: "Fino",
    Classificacao: "Seco",
    volume: 750,
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/g/_/g_es_tempo_de_goes_sauvignon-blanc.jpg",
  },
];
// ## Rotas ##
app.get("/", (req, res) => {
  res.render("index", { vinhoTinto, vinhoBranco });
});

app.get("/descricaoVT/:id", (req, res) => {
  let id = +req.params.id;
  vt = vinhoTinto.find((vt) => vt.id === id);
  res.render("descricaoVT", { vt });
});

app.get("/descricaoVB/:id", (req, res) => {
  let id = +req.params.id;
  vb = vinhoBranco.find((vb) => vb.id === id);
  res.render("descricaoVB", { vb });
});

app.get("/vinhosTintos", (req, res) => {
    res.render("vinhosTintos", {vinhoTinto}); 
});

app.get("/vinhosBrancos", (req, res) => {
    res.render("vinhosBrancos", {vinhoBranco}); 
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
