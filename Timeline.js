var preistoriaString = "Preistoria";
var etàDelBronzoAnticoString = "Età del Bronzo Antico";
var etàDelBronzoMedioString = "Età del Bronzo Medio";
var etàDelBronzoTardoString = "Età del Bronzo Tardo";
var civiltàMinoicaString = "Civiltà Minoica";
var civiltàMiceneaString = "Civiltà Micenea";
var etàOscuraString = "Età Oscura";
var etàArcaicaString = "Età Arcaica";
var formazioneDellePoleisString = "Formazione delle poleis";
var colonizzazioneECrescitaDellePoleisString = "Colonizzazione e crescita delle poleis";
var transizioneVersoLaClassicitàString = "Transizione verso la classicità";
var etàClassicaString = "Età Classica";
var altoClassicoString = "Alto Classico";
var pienoClassicoString = "Pieno Classico";
var etàEllenisticaString = "Età Ellenistica";
var altoEllenismoString = "Alto Ellenismo";
var tardoEllenismoString = "Tardo Ellenismo";
var dominazioneRomanaString = "Dominazione romana";
var doriString = "Dori";
var distruzioneDiCorintoString = "Distruzione di Corinto";
var nasceArthurEvansString = "Nasce Arthur Evans";
var nasceHeinrichSchliemannString = "Nasce Heinrich Schliemann";
var acheiString = "Achei";
var guerraDiTroiaString = "Guerra di troia";
var arthurEvansScopreString = "Arthur Evans scopre la civiltà cretese, iniziando gli scavi nel sito di Cnosso";
var nascitaDellePolisString = "Nascita delle polis";

var itemsArray = [
    { id: 1, content: preistoriaString, start: "-004000", end: "-003000", type: "background", className: "indigo" },
    { id: 2, content: etàDelBronzoAnticoString, start: "-003000", end: "-001600", type: "background", className: "orange" },
    { id: 3, content: etàDelBronzoMedioString, start: "-001600", end: "-001400", type: "background", className: "lime" },
    { id: 4, content: etàDelBronzoTardoString, start: "-001400", end: "-001100", type: "background", className: "cyan" },
    { id: 5, content: civiltàMinoicaString, start: "-002700", end: "-001400" },
    { id: 6, content: civiltàMiceneaString, start: "-001600", end: "-001100" },
    { id: 7, content: etàOscuraString, start: "-001100", end: "-000800", type: "background", className: "darkgray" },
    { id: 8, content: etàArcaicaString, start: "-000800", end: "-000500", type: "background", className: "yellow" },
    { id: 9, content: formazioneDellePoleisString, start: "-000800", end: "-000700" },
    { id: 10, content: colonizzazioneECrescitaDellePoleisString, start: "-000700", end: "-000600" },
    { id: 11, content: transizioneVersoLaClassicitàString, start: "-000600", end: "-000500" },
    { id: 12, content: etàClassicaString, start: "-000500", end: "-000323", type: "background", className: "purple" },
    { id: 13, content: altoClassicoString, start: "-000500", end: "-000400" },
    { id: 14, content: pienoClassicoString, start: "-000400", end: "-000323" },
    { id: 15, content: etàEllenisticaString, start: "-000323", end: "-000146", type: "background", className: "pink" },
    { id: 16, content: altoEllenismoString, start: "-000323", end: "-000200" },
    { id: 17, content: tardoEllenismoString, start: "-000200", end: "-000146" },
    { id: 18, content: dominazioneRomanaString, start: "-000146", end: "00476", type: "background", className: "brown" },
    { id: 19, content: doriString, start: "-001100", end: "-000500" },
    { id: 20, content: distruzioneDiCorintoString, start: "-000146", end: "-000146", type: "box" },
    { id: 21, content: nasceArthurEvansString, start: "001851-7-8", type: "box" },
    { id: 22, content: nasceHeinrichSchliemannString, start: "001822-1-6", type: "box" },
    { id: 23, content: acheiString, start: "-002000", end: "-001200" },
    { id: 24, content: guerraDiTroiaString, start: "-001300", end: "-001200" },
    { id: 25, content: arthurEvansScopreString, start: "001900", end: "1900", type: "box" },
    { id: 26, content: nascitaDellePolisString, start: "-000800-01-01", type: "box" }
];

itemsArray.forEach(function (item) {
    if (item.end && item.end !== item.start) {
        item.title = item.content + " (" + item.start + ", " + item.end + ")";
    } else {
        item.title = item.content + " (" + item.start + ")";
    }
});

var items = new vis.DataSet(itemsArray);