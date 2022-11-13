import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  public todos: Array<Todo> = new Array<Todo>();

  public todoTitle: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  public createTodo(): void {
    var id = this.todos.length > 0 ? this.todos[this.todos.length - 1].id++ : 1;
    
    this.todos.push(
      {
        id: id, completed: false, title: this.todoTitle,
      }
    );
  }

  public removeTodo(index: number): void {
    this.todos.splice(index,1);
  }

}
