import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
    @Input() todo: Todo;
    @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

    constructor(private todoService: TodoService) {}

    ngOnInit(): void {}
    //set dynamic Classes
    setClasses() {
        let classes = {
            todo: true,
            'is-complete': this.todo.completed,
        };
        return classes;
    }
    onToggle(todo) {
        //toggle in UI
        todo.completed = !todo.completed;
        //toogle in devServerTarget
        this.todoService
            .toggleCompleted(todo)
            .subscribe((todo) => console.log(todo));
    }
    onDelete(todo) {
        this.deleteTodo.emit(todo);
    }

}
