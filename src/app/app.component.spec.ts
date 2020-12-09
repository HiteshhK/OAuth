import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig } from 'angularx-social-login';
import { AppComponent } from './app.component';
import { SocialloginService } from './services/sociallogin.service';
import { TitleComponent } from './title/title.component';
describe('AppComponent', () => {
  let service: SocialloginService;
  beforeEach(async(() => {
    const GOOGLE_CLIENT_ID = ""
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        TitleComponent
      ],
      providers: [SocialloginService, SocialAuthService,
        {
          provide: "SocialAuthServiceConfig",
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(GOOGLE_CLIENT_ID, {
                  scope: "profile email"
                })
              }
            ]
          } as SocialAuthServiceConfig
        }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'OAuth-login'`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.componentInstance;
    expect(app.title).toEqual('OAuth-login');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('OAuth-login');
  });
  describe('HTML Content', () => {
    it('should initially have a Signin button', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const el = fixture.debugElement.query(By.css('button'));
      fixture.detectChanges();
      expect(el.nativeElement.textContent).toBe('SignIn');
    })
    it('should have a SignOut button when logged in', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.componentInstance.service.loggedIn = true;
      const el = fixture.debugElement.query(By.css('button'));
      fixture.detectChanges();
      expect(el.nativeElement.textContent).toBe('SignOut');
    })

    it('should show logged in user name in h2', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.componentInstance.service.loggedIn = true;
      fixture.componentInstance.service.user = {
        email: '',
        id: '',
        name: 'hitesh',
        provider: ''
      }
      fixture.detectChanges();
      const el = fixture.debugElement.query(By.css('h2'));
      expect(el.nativeElement.textContent).toBe('Welcome hitesh');
    })
  })

});
