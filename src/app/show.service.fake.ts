import { Observable,of } from "rxjs";

import {IShowService} from './show.service'
import { IShowmap } from './ishowmap';


export class ShowServiceFake implements IShowService{

    private fakeShow1:IShowmap[] = [
        {
            id: 139,  
        name: "girls",
        type:"scripted",
        language:"English",
        genres:["Drama","Romance"],
        status:"Ended",
        premiered:"12-20-2006",
        officialSite:"www.abc.com",
        schedule :{
            time:"22.00",
            days:"monday"
        },
        rating:{
            average:"8.7"
        },
        network:{
            name:"HBO",
            country:{
                name:"United States"
            }
        },
        image:{
            medium:"",
            large:""
        },
        summary:""
}];
     
    

    private fakeShow:IShowmap={
            id: 139,  
            name: "girls",
            type:"scripted",
            language:"English",
            genres:["Drama","Romance"],
            status:"Ended",
            premiered:"12-20-2006",
            officialSite:"www.abc.com",
            schedule :{
                time:"22.00",
                days:"monday"
            },
            rating:{
                average:"8.7"
            },
            network:{
                name:"HBO",
                country:{
                    name:"United States"
                }
            },
            image:{
                medium:"",
                large:""
            },
            summary:""
   


    }


   public getShowMapData(search:string):Observable<IShowmap[]>{
        return of(this.fakeShow1);
        
    }

    public getShow(search:string):Observable<IShowmap>{
        return of(this.fakeShow);
        
    }
}