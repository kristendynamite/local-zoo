import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="animal-list">
      FILTER BY: <select (change)="onChange($event.target.value)">
        <option value="youngAnimals">Baby Animals</option>
        <option value="oldAnimals" selected="selected">Animals over 2 Years Old</option>
        <option value="allAnimals">All Animals</option>
      </select>
      <ul>
        <li (click)="isAge(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age:filterByAge"> {{currentAnimal.name}} the {{currentAnimal.animal}} <br>Age: {{currentAnimal.age}} <br>Diet: {{currentAnimal.diet}} <br>Location: {{currentAnimal.location}} <br>Caretakers: {{currentAnimal.caretakers}} <br>Gender: {{currentAnimal.sex}} <br>Likes: {{currentAnimal.likes}} <br>Disklikes: {{currentAnimal.dislikes}} <br> {{currentAnimal.image}}
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
        </li>
      </ul>
    </div>
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
