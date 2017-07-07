import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
       <div class="container">
      <h1>Animal Tracker</h1>


      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>

      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Zoo Animal Tracker';
  selectedTask = null;

  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Aspen', 6, 'salmon', 'Arctic Exhibit', 2, 'female', 'hair dryer', 'baths'),
    new Animal('Cheetah', 'Chester', 5, 'grass and oxen', 'African Exhibit', 2, 'female', 'playing fetch', 'thunder'),
    new Animal('Elephant', 'Lola', 1, 'peanuts', 'Outdoor Exhibit', 2, 'female', 'painting and baths', 'loud noises')
  ];

  // editAnimal(clickedAnimal) {
  //   this.selectedAnimal = clickedAnimal;
  //
  // }
  //
  // finishedEditing() {
  //   this.selectedAnimal = null;
  // }

  addAnimal(newAnimalFromChild: Animal) {
   this.masterAnimalList.push(newAnimalFromChild);
 }

}
