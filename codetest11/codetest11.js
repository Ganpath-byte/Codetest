function AddNumbers(){
    let a = 100;
    let b = 200;
    //console.log(a+b);
    document.getElementById('heading-two').innerText = (a+b);
}

//AddNumbers();

function AddNumbers(){
    let a = 100;
    let b = 200;

    document.getElementById('heading-two').innerText = (a+b);
    document.getElementById('para1').innerHTML = "<h1>New Heading One</h1>"
}

function getInput(){
    let username = document.getElementById('username').value;
    document.getElementById('heading-three').innerText = "Hello, " + username;
    document.getElementById('div1').style.backgroundColor = "Red";
}

document.getElementById('btn1').addEventListener('click', getInput)

//window.location.href = 'codetest10.html'

let fName = "Harry";
let passWord = "Potter";
document.getElementById('form1').addEventListener('submit',function(event){
    if(document.getElementById('firstname').value; == fName && passWord == 
    document.getElementById('password').value){
        console.log('Success');
    }else{
        event.preventDefault();
    }
})