const btnCreate = document.querySelector("#create-button");

function verificate(pass, confirmPass) {
    if (pass == confirmPass) {
        console.log(pass);
        console.log(confirmPass);
        return true;
    }
}

btnCreate.addEventListener("click", () =>{
    const password = document.querySelector("input[name='password']").value;
    const confirmPassword = document.querySelector("input[name='confirm-password']").value;

    console.log(password, confirmPassword);
    if (verificate(password, confirmPassword)) {
        alert("Successful Connection.")   
    }else
        alert("Connection failed, check that the passwords are the same.")
});

