const historia = [{
    //0
    text: "aquesta historia tracta sobre una persona que ha de decidir el seu futur a partir de les opcions que trii. \n" +  
          "si decideixes seguir, click SI, i si vols que el programa acabi click NO \n" +
          "que vols escriure? ",
    si: 1,
    no: 2,
}, 
{
    //1
    text: "has decicit continuar amb la historia",
    si: 3,
    btnNo: false
}, 
{
    //2
    text: "aquesta historia s-ha acabat!",
    no: 1,
    fi: true
}, 
{
    //3
    text: "vaja t-has trobat amb el señor PEKKA, aixo es un enemic poderos \n" +  
          " click SI si vols atacar o NO si vols surtir corrent com un Montapuercos",
    si: 4,
    no: 5,
}, 
{
    //4
    text: "has decidit atacar, tira una torre infernal o una bandida \n" +
    "depen del que triïs guanyaràs la batalla o et donarà tal wantazo que t'enviara a aña \n" +
    "per utilitzar la torre infernal click SI i per la bandida click NO \n" +
    "que vols esciure?",
    si: 6,
    no: 7
},
{
    //5
    text: "has decidit sortir corrents com un champion \n" +
    "no tornis per aqui bobo",
    si: 2,
    fi: true
},

{
    //6
    text: "has decidit utilitzar la torre infernal, \n" +
          "la torre infernal es una arma que destrueix el PEKKA en un moment, has agafat l'opcio mes optima",
    si: 8 
},
{
    //7
    text: "has decidit utilitzar la bandida \n"+
          "la bandida es molt useles contra un PEKKA, has perdut.",
},
{
    //8
    text: "has destruit al PEKKA, enhorabona, ets un geni",
    fi: true
}
];


    let array = [];

    let indexpagina = 0;
    document.getElementById("restart").hidden= true;

      let pagina = 0;
      let text = document.querySelector(".text");
      text.textContent = historia[pagina].text;
      
      usuari();

      function boton(){
        document.getElementById("si").hidden= true;
        document.getElementById("no").hidden= true;
        document.getElementById("restart").hidden= false;
      }
      

      function contador(){
        document.querySelector(".box").innerHTML=pagina;
      }

      function inici(){
        pagina = 0;
        text.textContent = historia[pagina].text;
        contador();
        
      }

      function proba(){
          if(historia[pagina].btnNo === false){
            document.getElementById("no").hidden= true;
          }
      }
      
      function sortir(){
        pagina = 2;
        text.textContent = historia[pagina].text;
        contador();
        boton();
      }

      function ferSi() {
        pagina = pagina = historia[pagina].si;
        text.textContent = historia[pagina].text;
        contador();
        cami();
        proba();
        if(historia[pagina].fi === true){
          boton();
        }
      }

      function ferNo() {
        pagina = pagina = historia[pagina].no;
        text.textContent = historia[pagina].text;
        contador();
        cami();
        proba();
        if(historia[pagina].fi === true){
          boton();
        }
      }


     /*  function usuari() {
        let persona = prompt("Escriu el teu nom");
        if (persona != null) {
          console.log('funciona');
          document.getElementById("demo").innerHTML = "Hola " + persona ;
        }
      }   */

      function cami(){

          /*.push afageix l'element que posem per parametre, 
             es a dir, hem creat un array buit que es diu array, 
             llavors dins de l'array buit, li afegim amb el .push array.push(pagina) la pagina de l'array principal.
          */
          array.push(pagina);
          
          array=document.getElementById("camii").innerHTML = array;
          
      }

      
     
