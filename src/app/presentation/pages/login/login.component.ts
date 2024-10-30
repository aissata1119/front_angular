
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  formForm! : FormGroup;

  ngOnInit(): void {
    this.formForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(15)]) ,
      description : new FormControl('',[Validators.required, Validators.minLength(25)])
      
    });
    // console.log(this.formForm.value);

      
  }
  isInvalidInput(field : AbstractControl){ /idans une classe on na des methodes qui n'ont pas besoin du mot clé function lorsquon les declare/ 
    return field.invalid && (field.dirty || field.touched);
  }

}
