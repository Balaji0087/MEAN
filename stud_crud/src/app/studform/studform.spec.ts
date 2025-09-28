import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studform } from './studform';

describe('Studform', () => {
  let component: Studform;
  let fixture: ComponentFixture<Studform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
