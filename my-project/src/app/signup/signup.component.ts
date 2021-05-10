import { Component, OnInit ,DoCheck} from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,DoCheck {
signupform:FormGroup
  constructor(private fb:FormBuilder,private apiservice:ApiService) { }

  ngOnInit(): void {
    console.log("Initiated");
    this.signupform = this.fb.group({
      name:[null, [Validators.required,Validators.minLength(5)]],
      stocks:[null, Validators.required],
      tag:[null, Validators.required]
    })
  }
  ngDoCheck(){
    console.log('Updated')
  }
  ngDesrtroy(){

  }
  postvalue(){
    console.log(this.signupform.value);
    this.apiservice.postForm(this.signupform.value).subscribe(
      ()=>{
        console.log('SUBMITTED SUCCESSFULLY');
        
      },()=>{
        console.log('SOME ERROR OCCURED');
      }
    )
    
  }
  }



