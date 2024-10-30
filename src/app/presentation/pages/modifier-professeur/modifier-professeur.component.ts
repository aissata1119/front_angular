import { NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-modifier-eleves',
  standalone: true,
  imports:[ReactiveFormsModule,NgIf],
  templateUrl: './modifier-professeur.component.html',
  styleUrls: ['./modifier-professeur.component.css']
})
export class ModifierProfesseurComponent implements OnInit {
  formModifierProfesseur!: FormGroup

  ngOnInit(): void {
    this.formModifierProfesseur = new FormGroup({
      birthday: new FormControl('', Validators.required),
      firstName: new FormControl('', [Validators.required, Validators.minLength(10)]),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      urlPicture: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      matricule: new FormControl('', Validators.required),
      phoneNumberFather: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)])
    });
  }

  isInvalidInput(fieldName: string): boolean {
    const field = this.formModifierProfesseur.get(fieldName);
    return field ? field.invalid && (field.touched || field.dirty) : false;
  }

  saveData() {
    // Logic to handle form submission
  }
}
