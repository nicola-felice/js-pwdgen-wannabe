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



// copy password to clipboard function
function copyYourPassword() {
    document.querySelector("#copyPassword").value = generatedPassword;
    document.querySelector("#copyPassword").select();
    document.execCommand("copy");

    // change message when passw copied
    document.querySelector("#copyPasswordButton").innerHTML = `Copied! ${String.fromCodePoint(0x1F44D)}`    
}

// copy password on click
document.querySelector("#copyPasswordButton").addEventListener("click", copyYourPassword);