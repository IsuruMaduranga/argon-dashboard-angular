import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFilesComponent } from './public-files.component';

describe('PublicFilesComponent', () => {
  let component: PublicFilesComponent;
  let fixture: ComponentFixture<PublicFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
