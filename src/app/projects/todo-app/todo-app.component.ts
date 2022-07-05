import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todoList:any[] = []

  addTask(val:string)
  {
    this.todoList.push({id:this.todoList.length, name:val, isCompleted: false})
  }
  removeTask(id:number)
  {
    this.todoList = this.todoList.filter(item => item.id !== id)    
  }
  compltedTask(id:number)
  {
    this.todoList[id].isCompleted = !this.todoList[id].isCompleted 
  }
}
