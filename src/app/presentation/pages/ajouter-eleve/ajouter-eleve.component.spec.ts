import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEleveComponent } from './ajouter-eleve.component';

describe('AjouterEleveComponent', () => {
  let component: AjouterEleveComponent;
  let fixture: ComponentFixture<AjouterEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterEleveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
