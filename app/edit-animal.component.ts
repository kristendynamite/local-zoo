import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">
        <h3>{{childSelectedAnimal.name}} the {{childSelectedAnimal.animal}}</h3>
        <hr>
        <h3>Edit Name, Age, or Caretaker Information</h3>
        <label>Enter New Name:</label>
        <input [(ngModel)]="childSelectedAnimal.name">
        <label>Enter New Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age">
        <label>Enter New Caretaker Information:</label>
        <input [(ngModel)]="childSelectedAnimal.caretakers">

        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
