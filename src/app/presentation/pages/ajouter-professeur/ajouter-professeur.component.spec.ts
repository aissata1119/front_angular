import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProfesseurComponent } from './ajouter-professeur.component';

describe('AjouterProfesseurComponent', () => {
  let component: AjouterProfesseurComponent;
  let fixture: ComponentFixture<AjouterProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterProfesseurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
