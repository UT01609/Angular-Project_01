import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgSelectModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_1';

  selectedCar: number=1;

  cars = [
      { id: 1, name: 'Country code' },
      { id: 2, name: '+94' },
      { id: 3, name: '+91' },
      { id: 4, name: '+44' },
      { id: 5, name: '+11' }
  ];
}
