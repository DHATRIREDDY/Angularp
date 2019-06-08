import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t2comp',
  template: '<h2>welcome {{name}}</h2><input [id]="myId" type="text" value="hello"><br><br><input [disabled]="isDisabled" id=" {{myId}} " type="text" value="Remo">',
  styles: ['']
})
export class T2compComponent implements OnInit {
  public name="aditi";
  public myId="keyId";

  constructor() { }

  ngOnInit() {
  }

}
