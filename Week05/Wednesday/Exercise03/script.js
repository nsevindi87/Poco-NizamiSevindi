let userAlert = alert(
  "In what language should I say Hello World? To input language go on!"
);
let userInput = prompt("Türkish = tr  German = de Spanish = es");

function handleLang(pLang) {
  if (pLang == "tr") {
    console.log("Merhaba Dünya");
    alert("Merhaba Dünya");
  } else if (pLang == "de") {
    console.log("Grüezi Welt");
    alert("Grüezi Welt");
  } else if (pLang == "es") {
    console.log("Hola Mundo");
    alert("Hola Mundo");
  } else console.log("Hello World");
  alert("Hello World");
}

handleLang(userInput);
