import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierElevesComponent } from './modifier-eleves.component';

describe('ModifierElevesComponent', () => {
  let component: ModifierElevesComponent;
  let fixture: ComponentFixture<ModifierElevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierElevesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
