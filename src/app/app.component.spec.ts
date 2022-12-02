import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appCompomentFixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
    appCompomentFixture = TestBed.createComponent(AppComponent);
    appComponent = appCompomentFixture.componentInstance;
  });

  it('should create the app', () => {
    const app = appComponent;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const app = appComponent;
    expect(app.title).toEqual('my-app');
  });

  // TEST HTML DOM ? OR ONLY METHODS
  // it('should render title', () => {
  //   appCompomentFixture.detectChanges();
  //   const componentDOM = appCompomentFixture.nativeElement as HTMLElement;
  //   expect(componentDOM.querySelector('.content span')?.textContent).toContain('my-app app is running!');
  // });
});
