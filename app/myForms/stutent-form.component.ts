import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Student} from "./student";
@Component({
  moduleId: module.id,
  selector: 'student-form',
  templateUrl: 'student-form.component.html'
})
export class StudentFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new Student(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit() { this.submitted = true; }
  newHero() {
    this.model = new Student(42, '', '');
  }
}
