let stars=0;
let days=0;
let cost=0;

function NumGiorni() {
    var messaggio;
    const giorni = prompt("Inserisci il numero di giorni :", "inserire numero");
    if (giorni == null || giorni == "")
          messaggio = "Non hai inserito il numero dei giorni";
    else
         messaggio= "Il tuo soggirono durerà " + giorni + " giorni ";
    document.getElementById("visualizza").innerHTML = messaggio;
    console.log(giorni);
     days=giorni;
    }



function numstelle() {
    var messaggio;
    const stelle = prompt("Inserisci il numero di stelle che vuoi che il tuo hotel abbia :", "inserire numero da 1 a 4 ");
         messaggio= "Il tuo hotel avrà " + stelle+ " stelle";
    document.getElementById("visualizza3").innerHTML = messaggio;
    console.log(stelle);
     stars=stelle;
    }


    

function budget() {
    var messaggio;
    const costo = prompt("Inserisci il tuo budget  totale :", "inserire numero");
    if (costo == null || costo == "")
            messaggio= "Non hai inserito il tuo budget";
    else
         messaggio= "Il tuo budget sarà " + costo + " euro ";
    document.getElementById("visualizza2").innerHTML = messaggio;
    console.log(costo);
     cost=costo;

        }

 function prezzo(){
     var message;
    let  price= days * (stars*50) ;
     document.getElementById("vis").innerHTML = price;
     if(cost < price){
        message= "il costo complessivo del viaggio è maggiore del tuo budget";
        document.getElementById("vis1").innerHTML = message;

    }
   
 }    

