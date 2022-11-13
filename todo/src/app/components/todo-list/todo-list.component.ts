import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public _todo: Todo[] = [
    {id: 1, completed: false, title: "test"},
  ];

  public todoTitle: string | undefined;

  constructor() {
   }

  ngOnInit(): void {
  }

}
