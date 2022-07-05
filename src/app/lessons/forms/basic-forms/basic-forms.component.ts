import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-forms',
  templateUrl: './basic-forms.component.html',
  styleUrls: ['./basic-forms.component.scss']
})
export class BasicFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userData:any = {}

  getData(data:NgForm)
  {
    this.userData = data
  }


}
