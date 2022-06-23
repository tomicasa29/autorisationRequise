//let age = prompt("Quel âge avez vous?", 18);


function check(){
    var nbr;
    nbr = Number(document.getElementById("age").value);
    if(nbr < 18)
    {
       alert("Vous n'êtes pas un adulte");
    }
    else
    {
       alert("Vous êtes un adulte");
    }
}