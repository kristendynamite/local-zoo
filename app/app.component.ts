import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="header">
        <img class="moana-img" src="/resources/images/Moana.png">
        <h1>Moana's Animal Island</h1>
        <img id="heihei-img" src="/resources/images/Heihei.png">
        <img id="pua-img" src="/resources/images/Pua.png">
      </div>

      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>

      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Zoo Animal Tracker';
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Hei Hei', 'Rooster', 6, 'rocks', 'Canoe', 2, 'male', 'swallowing inedible objects', 'being lost at sea', './resources/images/Heihei.png'),
    new Animal('Pua', 'Pig', 2, 'carrots and apples', 'Farm', 2, 'male', 'coconut water and sailing', 'rough seas and being away from Moana', './resources/images/Pua.png'),
    new Animal('Lola', 'Elephant', 1, 'peanuts', 'Exotic exhibit', 2, 'female', 'painting and baths', 'loud noises', './resources/images/Moana.png')
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;

  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
   this.masterAnimalList.push(newAnimalFromChild);
 }

}
