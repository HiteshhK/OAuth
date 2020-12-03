import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('HTML Elements', () => {
    it('should have a  login header', () => {
      const el = fixture.debugElement.query(By.css('h4'));
      expect(el.nativeElement.textContent).toBe('Login page');
    });
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
