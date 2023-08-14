import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileregComponent } from './profilereg.component';

describe('ProfileregComponent', () => {
  let component: ProfileregComponent;
  let fixture: ComponentFixture<ProfileregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileregComponent]
    });
    fixture = TestBed.createComponent(ProfileregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
