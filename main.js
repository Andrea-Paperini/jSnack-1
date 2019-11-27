function DispariPari(numero) {
    if (numero % 2 == 1) {
        return "dispari";
    } else {
        return "pari";
    }
}

function chiediNumeroUtente() {
    var numero = parseInt(prompt("Inserisci un numero"));
    return numero;
}
var numero_utente = chiediNumeroUtente();
var dispari_o_pari = DispariPari(numero_utente);
console.log(dispari_o_pari);
