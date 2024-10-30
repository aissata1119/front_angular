import { NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-ajouter-eleve',
  standalone: true,
  imports:[ReactiveFormsModule,NgIf],
  templateUrl: './ajouter-eleve.component.html',
  styleUrls: ['./ajouter-eleve.component.css']
})
export class AjouterEleveComponent implements OnInit {
  formEleve!: FormGroup;

  ngOnInit(): void {
    this.formEleve = new FormGroup({
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
    const field = this.formEleve.get(fieldName);
    return field ? field.invalid && (field.touched || field.dirty) : false;
  }

  saveData() {
    // Logic to handle form submission
  }
}
