const axios = require('axios');

class recipeapi{
constructor(par){
    
    this.query = par[0];
    this.cuisine= par[1];
    this.diet=par[2];
    this.minCarbs=par[3];
    this.minProtein=par[4];
    this.minFat=par[5];
    this.minCalories=par[6];

    this.baseUrl = "https://api.spoonacular.com/";
    this.apiKey = "7c8f379bbea0473bac4cac3ff016a1de";

    this.axiosNesne = axios.create({
        baseURL: this.baseUrl,
        headers:{
           
            Authorization :this.apiKey
           
          },
        params : {
           
            query: this.query,
            cuisine: this.cuisine,
            apiKey:this.apiKey,
            diet:this.diet,
            minCarbs:this.minCarbs,
            minProtein:this.minProtein,
            minFat:this.minFat,
            minCalories:this.minCalories

        }
        
    });
}

async recipegetapi(){ 
    try{
    
        const recipewaitapi =  await this.axiosNesne.get("recipes/complexSearch");
    

   return recipewaitapi.data.results;
    
    
    }catch(err){  
 
        return `oppps veri çekilemedi ${err.response.status}`
    }
       
    }




}


export default function recipeget(parx) {

    const tarifgetirx =  new recipeapi(parx).recipegetapi();
    return tarifgetirx;
    
}