import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaromszogKerSzamolComponent } from './haromszog-ker-szamol.component';

describe('HaromszogKerSzamolComponent', () => {
  let component: HaromszogKerSzamolComponent;
  let fixture: ComponentFixture<HaromszogKerSzamolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaromszogKerSzamolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HaromszogKerSzamolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
