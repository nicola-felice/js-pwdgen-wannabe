// Chiedi all’utente il suo nome
const nameUser = prompt('inserisci il tuo nome:');

// poi chiedi il suo cognome
const surnameUser = prompt('inserisci il tuo cognome:');

// poi chiedi il suo colore preferito
const favouriteColor = prompt('inserisci il tuo colore preferito:');

// calcola password
const generatedPassword = `${nameUser}${surnameUser}${favouriteColor}40`;

// saluta l'utente
document.getElementById('salutoPersonalizzato').innerHTML += ` ${nameUser} ${String.fromCodePoint(0x1F604)}`;

// mostra password a schermo
document.getElementById('generatedPassword').innerHTML = `La tua (insicurissima) password è: ${generatedPassword}`;