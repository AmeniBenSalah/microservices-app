import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-generate-template',
  templateUrl: './generate-template.component.html',
  styleUrls: ['./generate-template.component.css']
})
export class GenerateTemplateComponent {
  constructor(private AS:AuthService, private router:Router){}
logout() {
    this.AS.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
