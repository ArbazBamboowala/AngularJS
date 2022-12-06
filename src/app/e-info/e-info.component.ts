import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers: [DataService]
})

export class EInfoComponent {
  infoRecieved1: string[]=[];
  
  infoRecieved2: string[]=[];
  
  infoRecieved3: string[]=[];
  getInfoFromService1(){
    this.infoRecieved1 = this.dservice.getInfo1()
  }
  getInfoFromService2(){
    this.infoRecieved2 = this.dservice.getInfo2()

  }
  getInfoFromService3(){
    this.infoRecieved3 = this.dservice.getInfo3()
  }
  constructor(private dservice: DataService){

  }
  updateInfo(frm: any): void{
    this.dservice.addInfo(frm.value.location)
    this.dservice.addInfo(frm.value.id)
  }

}
