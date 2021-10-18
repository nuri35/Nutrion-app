const axios = require('axios');
class recipeinfom{
    constructor(id){

        this.baseUrl = "https://api.spoonacular.com/";
        this.apiKey = "7c8f379bbea0473bac4cac3ff016a1de";
        this.id = id;

        this.axiosNesne = axios.create({
            baseURL: this.baseUrl,
            headers:{
               
                Authorization :this.apiKey
               
              },
            params : {
               
                apiKey:this.apiKey,
                includeNutrition:false
            }
            
        });

        this.arx = [];
    }

   async recipeinfox(){
        try{
          
          

            const recipexx =  await this.axiosNesne.get(`recipes/${this.id }/information`)
           
   
            return recipexx.data.sourceUrl;
           
     
        }catch(err){  
     
            return err.response;
        }
          



    }




}

export default function infxrec(idx) {
    
    const bılgıgetır =  new recipeinfom(idx).recipeinfox();
    return bılgıgetır;
}