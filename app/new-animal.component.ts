import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <h2><label>Enter Animal Details:</label></h2>
    <div class="new-animal">
      <label>Animal:</label>
      <input #newAnimal>
      <label>Name:</label>
      <input #newName>
      <label>Age:</label>
      <input type="number" #newAge>
      <label>Diet:</label>
      <input #newDiet>
      <label>Location:</label>
      <input #newLocation>
      <label>Caretakers:</label>
      <input type="number" #newCaretakers>
      <label>Sex:</label>
      <input #newSex>
      <label>Likes:</label>
      <input #newLikes>
      <label>Dislikes:</label>
      <input #newDislikes>
    </div>
    <div>
       <button (click)="submitForm(newAnimal.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);">Add</button>
    </div>

  `
})

export class NewAnimalComponent {
@Output() newAnimalSender = new EventEmitter();

  submitForm(animal: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(animal, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
