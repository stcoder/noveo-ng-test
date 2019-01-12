import {Injectable} from '@angular/core';
import {ConfigService} from '../../services/config.service';
import {Observable, of, throwError} from 'rxjs';

export const ACCESS_TOKEN_KEY_REGEXP = /access_token=([^&]+)/;
export const EXPIRES_KEY_REGEXP = /expires_in=([^&]+)/;
export const ERROR_KEY_REGEXP = /error=([^&]+)/;
export const ERROR_DESCRIPTION_KEY_REGEXP = /error_description=([^&]+)/;

export type AuthErrorType = 'access_denied' | 'unauthorized_client';

export interface AuthError {
  type: AuthErrorType;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _OAuthUrl: URL;
  get OAuthUrl(): string  { return this._OAuthUrl.href; }

  constructor(
    private configService: ConfigService
  ) {
    this._OAuthUrl = new URL(this.configService.get('yandex_api.auth.url'));
    this._OAuthUrl.searchParams.set('response_type', 'token');
    this._OAuthUrl.searchParams.set('client_id', this.configService.get('yandex_api.auth.client_id'));
  }

  getAuthorizationToken(): string | null {
    return localStorage.getItem('access_token');
  }

  verificationToken(hash: string): Observable<boolean> {
    if (!hash) {
      return of(false);
    }

    if (ACCESS_TOKEN_KEY_REGEXP.test(hash)) {
      const access_token: string = ACCESS_TOKEN_KEY_REGEXP.exec(hash)[1];
      const expires_in: string = (Date.now() + parseInt(EXPIRES_KEY_REGEXP.exec(hash)[1], 0)).toString();
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('expires', expires_in);

      return of(true);
    }

    const error: AuthError = {
      type: ERROR_KEY_REGEXP.exec(hash)[1] as AuthErrorType,
      description: ERROR_DESCRIPTION_KEY_REGEXP.exec(hash)[1]
    };

    return throwError(error);
  }

  isNeedRefreshToken(): boolean {
    const expires: string = localStorage.getItem('expires');

    if (!expires) {
      return true;
    }

    const expiresAt: number = parseInt(expires, 0);
    return Date.now() > expiresAt;
  }
}
