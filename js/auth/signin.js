const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSingin = document.getElementById("btnSignin");

btnSingin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        alert("Vous etes connecté");

        //Il faudra récupérer le vrai token
        const token = "ifghebhgoerbgvoeùrigbuvùoerv";
        setToken(token);
        //Placer ce token en cookie
        setCookie(roleCookieName, "client", 7)
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}
