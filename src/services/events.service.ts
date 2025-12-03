import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { evt } from 'src/models/event';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient:HttpClient){}
   GETALLMembers():Observable<any[]>{
     //generation de la requete http en mode get 
     return this.httpClient.get<any[]>('http://localhost:6000/events')//relaison avec spring boot
   }
   saveEvt(event:Event): Observable<void> {
      return this.httpClient.post<void>( 'http://localhost:6000/events', event)

    }
   /*AddMembers(evt: evt):Observable<void>{
     return this.httpClient.post<void>('http://localhost:3000/events',evt)//relaison avec spring boot
   }
 
   deleteMember(id: string): Observable<void> {
   return this.httpClient.delete<void>(`http://localhost:3000/events/${id}`);
 }
 getMemberById(idCourant:string):Observable<evt>{
     //generation de la requete http en mode get 
     return this.httpClient.get<evt>(`http://localhost:3000/events/${idCourant}`);
 }
 updateMember(idCourant:string,m:evt):Observable<void>{
     //generation de la requete http en mode get 
     return this.httpClient.put<void>(`http://localhost:3000/events/${idCourant}`,m);
 }*/
}
