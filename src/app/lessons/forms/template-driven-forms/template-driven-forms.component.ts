import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userLogin(item: any)
  {
    console.log(item)
  }

}
