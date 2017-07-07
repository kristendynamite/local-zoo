import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h2>New Animal Entry Form</h2>
    <h3>Enter Animal Details Below:</h3>
    <div class="new-animal">
      <div>
        <label>Name:</label>
        <input #newName>
      </div>
      <div>
        <label>Animal:</label>
        <input #newAnimal>
      </div>
      <div>
        <label>Age:</label>
        <input type="number" #newAge>
      </div>
      <div>
        <label>Diet:</label>
        <input #newDiet>
      </div>
      <div>
        <label>Location:</label>
        <input #newLocation>
      </div>
      <div>
        <label>Caretakers:</label>
        <input type="number" #newCaretakers>
      </div>
      <div>
        <label>Sex:</label>
        <input #newSex>
      </div>
      <div>
        <label>Likes:</label>
        <input #newLikes>
      </div>
      <div>
        <label>Dislikes:</label>
        <input #newDislikes>
      </div>
    </div>
    <div>
       <button (click)="submitForm(newName.value, newAnimal.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);">Add</button>
    </div>

  `
})

export class NewAnimalComponent {
@Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, animal: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(name, animal, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
