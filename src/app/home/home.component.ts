import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private todoService: TodoService,
  ) {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data.dto;
      console.log(data);
    });
  }

  todos = [];

  ngOnInit(): void {}

  getTodos() {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
