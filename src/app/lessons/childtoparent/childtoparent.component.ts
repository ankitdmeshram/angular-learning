import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.scss']
})
export class ChildtoparentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  update(val:string)
  {
    console.log(val)
  }

}
