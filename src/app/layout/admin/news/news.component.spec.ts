import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { AdminService } from '../../service/admin.service';

import { NewsComponent } from './news.component';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  const adminService = jasmine.createSpyObj('adminService', ['postNews']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        MessageService,
        {provide: AdminService, useValue: adminService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    expect(component.forms.valid).toBeFalsy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onSubmit', () => {
    const mockTableData2 = {
      title: 'abc',
      decription: 'dddd',
      image: 'C:\\fakepath\\1111.jpg',
      content: 'bsc',
      create_At: 123,
    };

    component.onSubmit(mockTableData2);
    // const a : File ;
    // const image = {a: {
    //    name : 'abc.png'
    // }};


    const image = component.selecttedFile.name;
    const mockTableData3 = {
      content: 'sdf',
      create_At: 'Tue Mar 01 2022 16:42:47 GMT+0700 (Indochina Time) {}',
      decription: 'sDa',
      image,
      title: 'srfa'
    };
    // adminService.postNews(mockTableData3).and.returnValue(of({ status: 200}));
    adminService.postNews(mockTableData3).subscribe(
      data => expect(data).toEqual({type: 0}, 'should return the employee'),
    );
  });

});
