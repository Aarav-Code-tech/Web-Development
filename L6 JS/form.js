function validate(e){
    e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const age = document.getElementById("age").value;
        const msgbox = document.getElementById("message");
        let a = "";
        if(email === ""){
            a = "pls enter email";
            msgbox.style.color="red";
        }
        else if(password === ""){
            a = "password should have atleast 8 and maximum 16 characters";
            msgbox.style.color="red";
        }
        else if(age === ""){
            a = "Age must be between 6 and 120 years";
            msgbox.style.color="red";
        }
        else{
            a = "Login Succesful";
            msgbox.style.color="green";
        }
        msgbox.innerText=a



}