// alert("coucou");
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    // alert("Bouton cliqué");
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    
    if(mailInput.value == "admin@mail.com" && passwordInput.value == "C@lou1972"){
        alert("Vous ètes connecté");
        //Il faudra récupérer le vrai token
        const token = "AttentionCeciNestPasLeVraiTokenIlVaFalloirLeCréerPlustard";
        setToken(token);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
        alert("Vous n'ètes pas connecté");
    }
}