import { TestBed } from '@angular/core/testing';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

import { SocialloginService } from './sociallogin.service';

describe('SocialloginService', () => {
  let service: SocialloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SocialAuthService] });
    service = TestBed.inject(SocialloginService);
  });


  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
