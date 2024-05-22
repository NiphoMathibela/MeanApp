import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
close() {
throw new Error('Method not implemented.');
}

  @Input() errorMessage: string = ''; // Declare an input property for the error message

  constructor() { }

  ngOnInit(): void { }
}
