import { NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  standalone: true,
  imports:[ReactiveFormsModule,NgIf],
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent implements OnInit {
  formModifierUtilisateur!: FormGroup

  ngOnInit(): void {
    this.formModifierUtilisateur = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(10)]),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      gender: new FormControl('', Validators.required),
      
      
    });
  }

  isInvalidInput(fieldName: string): boolean {
    const field = this.formModifierUtilisateur.get(fieldName);
    return field ? field.invalid && (field.touched || field.dirty) : false;
  }

  saveData() {
    // Logic to handle form submission
  }
}

