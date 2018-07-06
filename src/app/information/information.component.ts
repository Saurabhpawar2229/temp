import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  public LogChange(data)
  {
    console.log(data);
  }

  constructor() { }

  ngOnInit() {
  }

}
