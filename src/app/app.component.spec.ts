import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig } from 'angularx-social-login';
import { AppComponent } from './app.component';
import { SocialloginService } from './services/sociallogin.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    const GOOGLE_CLIENT_ID = "428713053168-4ssq5usslhirfek7fu4u06lh63g6a0lr.apps.googleusercontent.com"
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
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

});
