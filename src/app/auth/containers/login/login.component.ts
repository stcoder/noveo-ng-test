import {Component} from '@angular/core';
import {AuthError, AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginUrl: string;
  public error: AuthError;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private authService: AuthService
  ) {
    this.activeRoute.fragment.pipe(
      switchMap((hash: string) => {
        this.error = null;
        return this.authService.verificationToken(hash);
      }),
      catchError(err => (this.error = err, of(false)))
    ).subscribe(result => {
      if (result) {
        this.router.navigate(['/']);
      }
    });

    this.loginUrl = authService.OAuthUrl;
  }
}
