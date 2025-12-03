import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/models/member';
//injectable sur toute la root (creation d'instance)
@Injectable({
  providedIn: 'root'
})
//@injectable --> indique que le service accepte 
export class MemberService {
  constructor(private httpClient:HttpClient){}
  GETALLMembers():Observable<Member[]>{
    //generation de la requete http en mode get 
    return this.httpClient.get<Member[]>('http://localhost:6000/member')//relaison avec spring boot
  }
  AddMembers(m: Member):Observable<void>{
    return this.httpClient.post<void>('http://localhost:3000/member',m)//relaison avec spring boot
  }

  deleteMember(id: string): Observable<void> {
  return this.httpClient.delete<void>(`http://localhost:3000/member/${id}`);
}
getMemberById(idCourant:string):Observable<Member>{
    //generation de la requete http en mode get 
    return this.httpClient.get<Member>(`http://localhost:3000/member/${idCourant}`);
}
updateMember(idCourant:string,m:Member):Observable<void>{
    //generation de la requete http en mode get 
    return this.httpClient.put<void>(`http://localhost:3000/member/${idCourant}`,m);
}
}
