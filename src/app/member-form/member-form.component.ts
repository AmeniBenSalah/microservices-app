import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{
  constructor(private MS:MemberService, private router:Router, private activatedRoute:ActivatedRoute){}
  // declaration de form
  form!: FormGroup
  // initialisation de form 
   ngOnInit(): void 
  {    //1 recupere la route active
    const idCourant=this.activatedRoute.snapshot.params['id']
    //2 si la route contient id 
    if (idCourant){
      this.MS.getMemberById(idCourant).subscribe((m)=>{
          this.form=new FormGroup({
          cin: new FormControl(m.cin,[Validators.required]),
          name: new FormControl(m.name),
          type: new FormControl(m.type),
          cv: new FormControl(m.cv),
          createdDate: new FormControl(m.createdDate),
   })
      });
    }
    //3 get member by id => extraction dans le formulaire

    //4 sinon create 
    else{
   this.form=new FormGroup({
    cin: new FormControl(null),
    name: new FormControl(null),
    type: new FormControl(null),
    cv: new FormControl(null),
    createdDate: new FormControl(null),

   })  
  }}
  sub(){
     const idCourant=this.activatedRoute.snapshot.params['id']
     if (idCourant)
      this.MS.updateMember(idCourant,this.form.value).subscribe(()=> this.router.navigate(['']))
   console.log(this.form.value);
   //injecter le service
   //appeler addMember
   this.MS.AddMembers(this.form.value).subscribe(() => {this.router.navigate(['/member'])})
  }
  
}


