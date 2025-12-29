import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBulletinComponent } from './section-bulletin.component';

describe('SectionBulletinComponent', () => {
  let component: SectionBulletinComponent;
  let fixture: ComponentFixture<SectionBulletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBulletinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
