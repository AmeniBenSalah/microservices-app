import { Component } from '@angular/core';
import { Member } from 'src/models/member';
import { EventsService } from 'src/services/events.service';
import { MemberService } from 'src/services/member.service';
import { ChartDataset, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Nb_Members:number=0;
  Nb_Events:number=0;
  Nb_Tools:number=0;
  Nb_Pub:number=0;
  Nb_Teacher:number=0;
  Nb_Student:number=0;

  // line-chart.component.ts
  chartDataLine: ChartDataset[] = [{data: [ 1551, 1688, 1800, 1895, 2124, 2124 ]}];
  chartLabelsLine: string[] = [];
  chartOptions: ChartOptions = {};
  
  // pie-chart.component.ts
  chartDataPie: ChartDataset[] = [ {data: [ ]}];
  chartLabelsPie: string[] = ['teacher','student'];
  Nom: string[] = [];
  constructor(private MS: MemberService,private ES:EventsService){
    this.MS.GETALLMembers().subscribe((res)=> {this.Nb_Events=res.length;
      for(let i=0;i<this.Nb_Members;i++)
      {if (res [i].type ==='teacher')
        this.Nb_Teacher++;
        else this.Nb_Student++;
      this.Nom.push(res[i].name)
      this.Tab_Events.push(res [i].tabEvents.length); // affecter au chart dataline
      }
      this.chartDataPie = [{data: [ this.Nb_Teacher,this.Nb_Student]}];
      this.chartLabelsLine=this.Nom;
    })
    //this.ES.GETA().subscribe((res)=> {this.Nb_Events=resizeBy.length})
  }
}
