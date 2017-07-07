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
      <li (click)="isAge(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">{{currentAnimal.animal}} {{currentAnimal.name}} {{currentAnimal.age}} {{currentAnimal.diet}} {{currentAnimal.location}} {{currentAnimal.caretakers}} {{currentAnimal.sex}} {{currentAnimal.likes}} {{currentAnimal.dislikes}}
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
   @Input() childAnimalList: Animal[];
   @Output() clickSender = new EventEmitter();

   filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

   editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
  // 
  // toggleDone(clickedTask: Animal, setAge: number) {
  //    clickedTask.age = setAge;
  //  }

}
