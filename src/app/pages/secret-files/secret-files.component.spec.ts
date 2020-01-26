import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretFilesComponent } from './secret-files.component';

describe('IconsComponent', () => {
  let component: SecretFilesComponent;
  let fixture: ComponentFixture<SecretFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
