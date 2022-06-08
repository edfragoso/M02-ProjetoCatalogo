const express = require("express");
const res = require("express/lib/response");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
let menssagem = "";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


let vinhoTinto = [
  {
    id: 1,
    nome: "Valparaiso Vitale Nebbiolo",
    uva: "Sangiovese",
    tipo: "tinto",
    gradAlcoo: "12.5",
    safra: "2018",
    vinhedo: "Serra Gaúcha",
    classe: "Fino",
    classificacao: "Seco",
    volume: "750",
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/v/a/valparaiso-nebbiolo.jpg",
  },

  {
    id: 2,
    nome: "Adega do Vale Cabernet Sauvignon",
    uva: "Cabernet Sauvignon",
    tipo: "tinto",
    gradAlcoo: "10.5",
    safra: "Não Safrado",
    vinhedo: "Vale so São Francisco - BA",
    classe: "Fino",
    classificacao: "Seco",
    volume: "750",
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/a/d/adega-do-vale---cs.jpg",
  },

  {
    id: 3,
    nome: "Rio Sol 8 Gran Reserva",
    uva: "Assemblage",
    tipo: "tinto",
    gradAlcoo: "13.5",
    safra: "2017",
    vinhedo: "Vale so São Francisco - BA",
    classe: "Fino",
    classificacao: "Seco",
    volume: "750",
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/r/i/rio-sol-8-gan-reserva.jpg",
  },

  {
    id: 4,
    nome: "Rio Sol Cabernet Sauvignon",
    uva: "Cabernet Sauvignon",
    tipo: "tinto",
    gradAlcoo: "13",
    safra: "2018",
    vinhedo: "Vale so São Francisco - BA",
    classe: "Fino",
    classificacao: "Seco",
    volume: "750",
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/r/i/rio-sol-cabernet-sauvignon.jpg",
  },
];
let vinhoBranco = [
  {
    id: 1,
    nome: "Amitié Chardonnay OAK Barrel",
    uva: "Chardonnay",
    tipo: "branco",
    gradAlcoo: "14",
    safra: "2020",
    vinhedo: "Campanha Gaúcha",
    classe: "Fino",
    classificacao: "Seco",
    volume: "750",
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/a/m/amitie-chardonnay_1_.jpg",
  },

  {
    id: 2,
    nome: "Valparaiso Vitale Torrontés",
    uva: "Torrontés",
    tipo: "branco",
    gradAlcoo: "12",
    safra: "2020",
    vinhedo: "Vila Rica - Barão - RS",
    classe: "Fino",
    classificacao: "Seco",
    volume: "750",
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/v/a/valparaiso-torrontes.jpg",
  },

  {
    id: 3,
    nome: "Valparaiso Vitale Chardonnay",
    uva: "Chardonnay",
    tipo: "branco",
    gradAlcoo: "12",
    safra: "2018",
    vinhedo: "Vila Rica - Barão - RS",
    classe: "Fino",
    classificacao: "Seco",
    volume: "750",
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/v/a/valparaiso-chardonnay.jpg",
  },

  {
    id: 4,
    nome: "Tempos de Góes Sauvignon Blanc Reserva",
    uva: "Sauvignon Blanc",
    tipo: "branco",
    gradAlcoo: "12.5",
    safra: "2021",
    vinhedo: "São Roque - São Paulo",
    classe: "Fino",
    classificacao: "Seco",
    volume: "750",
    img: "https://www.vinhosevinhos.com/media/catalog/product/cache/f551083cd20de7ac8cf7d25adc91480d/g/_/g_es_tempo_de_goes_sauvignon-blanc.jpg",
  },
];
// ## Rotas ##
app.get("/", (req, res) => {
  setTimeout(() => {
    menssagem = "";
  }, 1000);
  res.render("index", { vinhoTinto, vinhoBranco, menssagem });
});

app.get("/descricaoVT/:id", (req, res) => {
  let id = +req.params.id;
  let vinhoT = vinhoTinto.find((vinho) => vinho && (vinho.id === id));
  res.render("descricaoVT", { vinhoT });
});

app.get("/descricaoVB/:id", (req, res) => {
  let id = +req.params.id;
  let vinhoB = vinhoBranco.find((vinho) => vinho && (vinho.id === id));
  res.render("descricaoVB", { vinhoB });
});

app.get("/vinhosTintos", (req, res) => {
    res.render("vinhosTintos", {vinhoTinto}); 
});

app.get("/vinhosBrancos", (req, res) => {
    res.render("vinhosBrancos", {vinhoBranco}); 
});

app.get("/cadastro", (req, res) => {
  vinho = undefined;
  res.render("formulario");
});

app.post("/cadastrar", (req, res) => {
  let vinho = req.body;
  if (vinho.tipo == 'tinto') {
    vinho.id = vinhoTinto.length + 1;
    vinhoTinto.push(vinho);
  } else {
    vinho.id = vinhoBranco.length + 1;
    vinhoBranco.push(vinho);
  }
  menssagem = `Cadastro do ${vinho.nome} efetuado com sucesso!!`;
  res.redirect("/");
});

app.get("/editarVT/:id", (req, res) => {
  let id = +req.params.id;
  let vinho = req.body;
  vinho = vinhoTinto.find((vinho) => vinho && (vinho.id === id));
  menssagem = `Alteração do Vinho ${vinho.nome} efetuado com sucesso!!`;
  res.render("formulario", { vinho });
});

app.get("/editarVB/:id", (req, res) => {
  let id = +req.params.id; 
  vinho = vinhoBranco.find((vinho) => vinho && (vinho.id === id));
  menssagem = `Alteração do Vinho ${vinho.nome} efetuado com sucesso!!`;
  res.render("formulario", { vinho });
});

app.post("/upDate/:id", (req, res) => {
  let id = +req.params.id - 1;
  let newVinho = req.body;
  if (newVinho.tipo == 'tinto') {
    newVinho.id = id + 1;
    vinhoTinto[id] = newVinho;
  } else {
    newVinho.id = id + 1;
    vinhoBranco[id] = newVinho;
  }
  res.redirect("/");
});

app.get("/deleteVT/:id", (req, res) => {
  let id = +req.params.id - 1;
  delete vinhoTinto[id];
  menssagem = "Vinho deletado";
  res.redirect("/");
});

app.get("/deleteVB/:id", (req, res) => {
  let id = +req.params.id - 1;
  delete vinhoBranco[id];
  menssagem = "Vinho deletado";
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);  
});
