  console.log("login")

//Request to authenticate user
 
async function login(event){
    event.preventDefault();
    const userEmail=document.getElementById("email").value;
    const userPassword=document.getElementById('password').value;
    
    try{                    
       const response= await axios.post('http://localhost:2000/user/login', {userEmail, userPassword})
        if(response.status===200) {
            window.location.href="./chatapp.html"
        }     
    }
    catch(err){
        console.error(err);
    }
}

 


// Data Validations //

function showError(input, message) {
    try{
        input.parentElement.className = 'form-outline flex-fill mb-0 form-control error';
        document.querySelector('.formMessage').innerHTML = message;
    }
    catch(err){
        console.error(err);
    }
}

function showSuccess(input){
    try{
        input.parentElement.className = 'form-outline flex-fill mb-0 form-control success';
        document.querySelector('.formMessage').innerHTML = '';
    }
    catch(err){
        console.error(err);
    }
}

function checkEmail(input) {
    try{
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input.value.trim())) {
            showSuccess(input);
            return true;
        }else {
        showError(input, 'Email is Invalid');
            return false;
        }
    }
    catch(err){
        console.error(err);
    }
}

function checkPass(input) {
    try{
        if(input.value == undefined || input.value == null || input.value == ''){
            showError(input, 'Password is Empty');
            return false;
        }else{
            showSuccess(input);
            return true;
        }
    }
    catch(err){
        console.error(err);
    }
}