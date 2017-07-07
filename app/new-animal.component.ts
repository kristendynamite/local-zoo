import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <div>
      <label>Enter Animal Details:</label>
      <input #newAnimal>
      <input #newName>
      <input #newAge>
      <input #newDiet>
      <input #newLocation>
      <input #newCaretakers>
      <input #newSex>
      <input #newLikes>
      <input #newDislikes>
    </div>
    <div>
    <div>
       <button (click)="submitForm(newAnimal.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newAnimal.value='', newName.value='', newAge.value='', newDiet.value='', newLocation.value='', newCaretakers.value='', newSex.value='',newLikes.value='', newDislikes.value='';">Add</button>
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
