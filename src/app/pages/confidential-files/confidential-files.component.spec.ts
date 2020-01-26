import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialFilesComponent } from './confidential-files.component';

describe('IconsComponent', () => {
  let component: ConfidentialFilesComponent;
  let fixture: ComponentFixture<ConfidentialFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
