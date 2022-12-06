import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info1: string[] = ["JohnMathew",'E234','jm@abc.net']
  info2: string[] = ["Rob Net",'E235','rn@abc.net']
  info3: string[] = ['Rose Adams','E236','ra@abc.net']

  getInfo1():string[]{
    return this.info1
  }
  
  getInfo2():string[]{
    return this.info2
  }
  
  getInfo3():string[]{
    return this.info3
  }
  addInfo(info: string){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }
  constructor() { }
}
