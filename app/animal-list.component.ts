import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="youngAnimals">Baby Animals</option>
      <option value="oldAnimals" selected="selected">Animals over 2 Years Old</option>
    </select>
    <ul>
      <li>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
   @Input() childAnimalList: Animal[];
   @Output() clickSender = new EventEmitter();

   filterByAge: number = 2;

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

   editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  toggleDone(clickedTask: Animal, setAge: number) {
     clickedTask.age = setAge;
   }

}
