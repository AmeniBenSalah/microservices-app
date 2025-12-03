import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',// utiliser le sélecteur 'app-member' pour intégrer ce composant dans d'autres templates
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  //injection de dep: consiste a creer une instance privée du service dans le constructeur 
  // du composant(a condition que le service soit décoré avec @Injectable
  constructor(private MS:MemberService, private dialog:MatDialog){}
  title="Projet Lab"
  dataSource:any[]= []
  //appeler le service MemberService pour récupérer les données des membres depuis le backend
  //a la reception des resultats ==> les stocker dans la variable dataSource

  //la methode ngOnInit est appelée automatiquement par Angular une fois que le composant est initialisé
  displayedColumns: string[] = ['id', 'cin', 'name', 'type','cv','createdDate','actions']
  //appeler le service 
  //dataSource
  ngOnInit() 
    //injection du service MemberService pour récupérer les données des membres depuis le backend
    //a la reception des resultats ==> les stocker dans la variable dataSource
  {
    //variable locale qui contient les données reçues du backendet bje la stocke dans dataSource pour l'affichager.
    this.MS.GETALLMembers().subscribe((x) => {this.dataSource=x}) //fleche_1
    
  }

  delete(id: string) {
  //1.lancer la boite de dialogue de confirmation
  let dialogRef = this.dialog.open(ConfirmDialogComponent, {
  height: '200px',
  width: '300px',
  });
  
     //2.attendre le rep de l'utilisateur
    dialogRef.afterClosed().subscribe(result => {
      if (result) {//si l'utilisateur a cliqué sur confirmer
        this.MS.deleteMember(id).subscribe(
      ()=>{//refaire la req GET pour rafraichir la liste des membres
        this.MS.GETALLMembers().subscribe(
          (data)=>{
            this.dataSource=data;
          }
        );

      }
    );
  }});
  } 


}