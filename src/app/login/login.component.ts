import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string =''
  password:string=''

  //injection de dependance 
  constructor(private AS:AuthService, private router:Router){}
  login(){
    this.AS.signInWithEmailAndPassword(this.email,this.password).then(()=>{
      this.router.navigate(['/member'])
    });
  }


}
