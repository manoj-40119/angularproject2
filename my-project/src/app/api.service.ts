import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn:"root" //service to be globally accessible
})
export class ApiService {

  constructor(private myhttp:HttpClient) {
    
   }

   getValue(){
     console.log("welcome to my service file");
     return this.myhttp.get<any>("http://localhost:3001/products");
     
   }
   postForm(data){
    return this.myhttp.post<any>("http://localhost:3001/products",data);

   }
}
