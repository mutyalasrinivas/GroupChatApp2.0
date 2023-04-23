 
console.log("hello")

async function signup(event) {
    try{
        event.preventDefault();
        const obj = {
            userName:document.getElementById('name').value,
            userEmail:document.getElementById('email').value,
            userPassword:document.getElementById('password').value
        }
        console.log(obj)
        
     const response= await axios.post('http://localhost:2000/user/signup',obj)
        if(response.status=201){
            window.location.href="./login.html"
             alert ("Successfull Signup")
            console.log(response);
        }
        else{
            throw new Error('failed to signup')
        }

        }
    catch(err){
        console.log(err);
        alert("User alredy Exist");
        document.body.innerHTML=`<div style="color:red;">${err}</div>`;
    }
}
