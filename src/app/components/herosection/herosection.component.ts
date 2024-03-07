import { Component } from '@angular/core';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css',
})
export class HerosectionComponent {
  groceryList = [
    { id: 1, name: 'Apples', quantity: 5 },
    { id: 2, name: 'Bananas', quantity: 8 },
    { id: 3, name: 'Milk', quantity: 2 },
    { id: 4, name: 'Bread', quantity: 1 },
    { id: 5, name: 'Eggs', quantity: 12 },
  ];
}
