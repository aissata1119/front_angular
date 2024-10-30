import { NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-ajouter-utilisateurs',
  templateUrl: './ajouter-utilisateurs.component.html',
  standalone: true,
  imports:[ReactiveFormsModule,NgIf],
  styleUrls: ['./ajouter-utilisateurs.component.css']
})
export class AjouterUtilisateursComponent implements OnInit {
  formUtilisateurs!: FormGroup

  ngOnInit(): void {
    this.formUtilisateurs = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(10)]),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      gender: new FormControl('', Validators.required),
      
      
    });
  }

  isInvalidInput(fieldName: string): boolean {
    const field = this.formUtilisateurs.get(fieldName);
    return field ? field.invalid && (field.touched || field.dirty) : false;
  }

  saveData() {
    // Logic to handle form submission
  }
}

