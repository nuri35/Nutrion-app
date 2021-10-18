import tarifgetir from "./recipe.js";
import tarifinfo from "./recipeınfo.js";


class Ekran {
    constructor(){
        this.query = document.querySelector(".query");
        this.tur = document.querySelector(".tur");
        this.diet = document.querySelector(".diet");
        this.carbs = document.querySelector(".carbs");
        this.pro = document.querySelector(".pro");
        this.yag = document.querySelector(".yag");
        this.cal = document.querySelector(".cal");
        this.receveconta=document.querySelector(".receveconta");
        this.button = document.querySelector(".button");

        this.recipecallinf =[];
        // this.myr = [];
        this.button.addEventListener("click",()=> this.getreciveinfo());

    }
async  getreciveinfo() {
    

        const arr = [];
        arr.push(this.query.value,this.tur.value,this.diet.value,this.carbs.value,this.pro.value,this.yag.value,this.cal.value);
        
           
const recipefod = await tarifgetir(arr);



   
          
                for(let i =0; i<recipefod.length;i++){
                    const {id} = recipefod[i];

                    const recinfx = await tarifinfo(id);

                    
                    this.recipecallinf[i] = recinfx
                 
                }
                   
        
        
    
       
            this.writescren(recipefod, this.recipecallinf);

   
} 

writescren(paz,links){

for(let i =0; i<paz.length;i++){
    const {title,image ,...remainobj} = paz[i];

    const {nutrition:{nutrients}} = paz[i];
  
  //  const {name,amount,unit} = nutrients[0];    
  
  



    this.receveconta.innerHTML+=`<div class="card" style="width: 19rem;">
    <img class="card-img-top" src="${image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      
      <p class="card-text px">
   
      ${nutrients[0].name} ${nutrients[0].amount} ${nutrients[0].unit+"<br>"}
       ${nutrients[1].name} ${nutrients[1].amount} ${nutrients[1].unit+"<br>"}
      ${nutrients[2].name} ${nutrients[2].amount} ${nutrients[2].unit+"<br>"}
     ${nutrients[3].name} ${nutrients[3].amount} ${nutrients[3].unit+"<br>"}
     
      </p>

      <a class="card-text px" href="${links[i]}">Tarif linki: 

      </a>

          
     
     
  </div>
</div>
`

// ${nutrients[0].name} ${nutrients[0].amount} ${nutrients[0].unit+"<br>"}
// ${nutrients[1].name} ${nutrients[1].amount} ${nutrients[1].unit+"<br>"}
// ${nutrients[2].name} ${nutrients[2].amount} ${nutrients[2].unit+"<br>"}
// ${nutrients[3].name} ${nutrients[3].amount} ${nutrients[3].unit+"<br>"}

// this.abc = document.createElement("p");
//  this.cardboy = document.querySelector(".card-body");

// const {nutrition:{nutrients}} = paz[i];
// // console.log(nutrients)
// // this.px = document.querySelector(".px");


// for(let m =0;m<nutrients.length;m++){
   
//    const {name,amount,unit} = nutrients[m];
//    this.abc.innerHTML += name + " " + amount + " " + unit+"<br>";
  

// }
// this.cardboy.appendChild(this.abc);

}







}

}



export default function uygulamayıbaslat(){

  new Ekran();

}

