import { isTokenExpired, decodeToken } from './jwtHelper';

export default class AuthService {
  public static logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('token');
  }

  public static isAuthenticated() {
    // Checks if there is a saved token and it's still valid
    const token = localStorage.getItem('token');
    if (token) {
      return !isTokenExpired(token);
    }
    return false;
  }

  public static finishAuthentication(token: string) {
    localStorage.setItem('token', token);
  }

  public static decode() {
    const token = this.getToken();
    if (token) {
      return decodeToken(token);
    }
    return null;
  }

  private static getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('token');
  }
}
