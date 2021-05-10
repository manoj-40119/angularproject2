import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
myheading:string;
enablebutton:boolean;
mystyle:string;
desc="this is my app";
isdisplay=false;
productArray=[];
inpvalue:string;
homecount=0;
//productArray=[{name:"oneplus", tag:"reliable",stock:0,availability:"no"},{name:"samsung",tag:"durable",stock:1,availability:"yes"},{name:"iphone",tag:"branded",stock:2,availability:"yes"}]
     constructor(private apiservice:ApiService){
  if(Math.random()>0.5){
     this.myheading="Product List items",
     this.enablebutton=false;
     this.mystyle="block"
   }else{
     this.myheading="Profile";
     this.enablebutton=true;
     this.mystyle="none";
   }
  }
  ngOnInit(): void {
  }
  displayItems(){
    this.desc="the following items are shown for demo";
    this.isdisplay=!this.isdisplay;
    //new ApiService().getValue();
    this.apiservice.getValue().subscribe((a)=>{console.log(a);
    },(b)=>{console.log(b);
    })


 this.apiservice.getValue().subscribe(
      
      (a)=>{console.log(a);
             this.productArray =a;
    },
    
    
    (b)=>{console.log(b);
    })
    
  }
  filter(){
  this.productArray = this.productArray.filter((a)=>{
    return  this.inpvalue === a.name
  })
}
incrementCheckout(){
  this.homecount=this.homecount+1;
}

}
