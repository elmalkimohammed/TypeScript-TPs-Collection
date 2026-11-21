import { UpperCasePipe } from '@angular/common';
import { Component , computed, signal } from '@angular/core';

interface Task {
  id: number,
  title: string,
  dueDate: string

}

@Component({
  selector: 'app-task-list',
  imports: [UpperCasePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

  addedTaskName = signal('');

  tasks = signal<Task[]>([
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
  ])
  count = computed( ()=> this.tasks().length )

  add( task: Task ) {
    this.tasks.update( items => [...items, task] )
  }

  addTask() {
    const t = this.addedTaskName().trim();   // ← lecture avec ()
    if (!t) return;

    const current = this.tasks();
    const nextId = current.length === 0
      ? 1
      : Math.max(...current.map(x => x.id)) + 1;

    this.add({ id: nextId, title: t, dueDate: '' });

    this.addedTaskName.set('');
  }

  clear() {
    this.tasks.set( [] )
  }

}
