import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputcontrol',
  templateUrl: './inputcontrol.component.html',
  styleUrls: ['./inputcontrol.component.scss']
})
export class InputcontrolComponent{

  constructor() { }
  seachvalue:string=""

onsearch(ele:HTMLInputElement):void{
  this.seachvalue=ele.value
  ele.value=""
}


}
