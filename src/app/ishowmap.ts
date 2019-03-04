
export interface IShowmap {
    id:number
    name: string
    type:string
    language:string
    genres:string[]
    status:string
    premiered:string
    officialSite:string
    schedule :{
        time:string
        days:string
    }
    rating:{
        average:string
    }
    network:{
        name:string
        country:{
            name:string
        }
    }
    image:{
        medium:string
        large:string
    }
   summary:string
    
    
    
    
    
}
//schedule:string
//network:string
  //  rating:number
    //summary:string