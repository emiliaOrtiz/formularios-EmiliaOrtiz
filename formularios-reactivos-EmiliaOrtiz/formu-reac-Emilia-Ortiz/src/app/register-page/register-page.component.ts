import { group } from '@angular/animations';
import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators,AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  firstNameControl= new FormControl('Emilia',[Validators.required,Validators.minLength(3)]);
  lastNameControl= new FormControl('ortiz',[Validators.required]);
  emailControl=new FormControl(' ',[Validators.email,Validators.required]);
  passControl=new FormControl('******',[Validators.minLength(6),Validators.required]);
  repassControl=new FormControl('******',Validators.minLength(6));

  loginForm= new FormGroup({
    firstName:this.firstNameControl,
    lastName:this.lastNameControl,
    email:this.emailControl,
    pass:this.passControl,
    repass:this.repassControl,
  },{
   validators:[this.passwordValidator]
  })
  
  passwordValidator(group: AbstractControl){
  return()=>{
    if((this.passControl.value)!==(this.repassControl.value)){
      return {
        passwordValidator:true
      }
    }
    return null;
  } 
}

onSubmit(){
  console.log(this.loginForm.value);
}

}
