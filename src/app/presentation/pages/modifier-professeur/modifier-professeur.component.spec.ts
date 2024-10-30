import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProfesseurComponent } from './modifier-professeur.component';

describe('ModifierProfesseurComponent', () => {
  let component: ModifierProfesseurComponent;
  let fixture: ComponentFixture<ModifierProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierProfesseurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
