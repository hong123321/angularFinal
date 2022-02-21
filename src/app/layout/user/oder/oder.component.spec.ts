import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OderComponent } from './oder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('OderComponent', () => {
  let component: OderComponent;
  let fixture: ComponentFixture<OderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderComponent ],
      imports:[
        ReactiveFormsModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
