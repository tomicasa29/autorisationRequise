function date1(){
    var age = prompt("jj/mm/aa"); //prompt est la commande qui sert à afficher (alerte)
    var jj = age.substring(0,2);
    var mm = age.substring(3,5);
    var aa = age.substring(6,10)
//substring prend le jour le mois et l'année

function getAge(date) {
    var diff = Date.now() - date.getTime(); // la difference entre la date d'aujourd'hui et la date que la personne va rentrer
    var age1 = new Date(diff); // nouvelle variable qui est le résultat de la soustraction
    return(age1.getUTCFullYear() - 1970)
}

if(age < 18)
    {
       alert("Vous n'êtes pas un adulte");
    }
    else
    {
       alert("Vous êtes un adulte");
    }






}