import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studlist } from './studlist';

describe('Studlist', () => {
  let component: Studlist;
  let fixture: ComponentFixture<Studlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
