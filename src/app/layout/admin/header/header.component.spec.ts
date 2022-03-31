import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Confirmation, ConfirmationService, MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MenubarModule } from 'primeng/menubar';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { By } from 'protractor';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const confirmationService = jasmine.createSpyObj('confirmationService', ['confirm']);
  const  text = 'Log out';
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        MenubarModule,
      ],
      providers:[
        { provide: ConfirmationService, useValue: confirmationService
        },
        MessageService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create manu', () => {
    const mockTableData = {
      target: {
        innerText: 'Log out',
      }
    };
    component.menu(mockTableData);
    // spyOn(confirmationService, 'confirm').and.callFake((confirmation: Confirmation) => confirmation.accept());

    expect(confirmationService.confirm).toHaveBeenCalled();
  });

  // it('should call confirm with accept button click', () => {
  //   const fixture = TestBed.createComponent(HeaderComponent);
  //   const component = fixture.componentInstance;
  //   let confirmdialog : ConfirmDialog;
  //   confirmdialog = fixture.debugElement.query(By.css('p-confirmdialog')).componentInstance;
  //   let accept = spyOn(confirmdialog,"accept").and.callThrough();
  //   component.menu();
  //   fixture.detectChanges();
  //   let acceptBtn = fixture.debugElement.nativeElement.querySelector('.p-confirm-dialog-accept');
  //   acceptBtn.click();
  //   expect(accept).toHaveBeenCalled();
  // })
});
