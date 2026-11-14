import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  imports: [ UpperCasePipe ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = [
    {
      id: 0,
      title: 'titre1',
      dueDate: "13-11-2024"
    },
    {
      id: 1,
      title: 'titre2',
      dueDate: "15-02-2027"
    }
  ];
}