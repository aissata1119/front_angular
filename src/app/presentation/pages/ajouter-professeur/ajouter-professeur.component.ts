import { NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-ajouter-professeur',
  standalone: true,
  imports:[ReactiveFormsModule,NgIf],
  templateUrl: './ajouter-professeur.component.html',
  styleUrls: ['./ajouter-professeur.component.css']
})
export class AjouterProfesseurComponent implements OnInit {
  formProfesseur!: FormGroup

  ngOnInit(): void {
    this.formProfesseur = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(10)]),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      gender: new FormControl('', Validators.required),
      
      
    });
  }

  isInvalidInput(fieldName: string): boolean {
    const field = this.formProfesseur.get(fieldName);
    return field ? field.invalid && (field.touched || field.dirty) : false;
  }

  saveData() {
    // Logic to handle form submission
  }
}

