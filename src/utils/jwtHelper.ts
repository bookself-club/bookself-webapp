import decode from 'jwt-decode';

interface Decoded {
  exp: number;
  role: string;
}

export function decodeToken(token: string) {
  return decode(token);
}

export function getTokenExpirationDate(token: string) {
  const decoded: Decoded = decode(token);
  if (!decoded.exp) {
    return null;
  }

  const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
  date.setUTCSeconds(decoded.exp);
  return date;
}

export function isTokenExpired(token: string) {
  const date = getTokenExpirationDate(token);
  const offsetSeconds = 0;
  if (date === null) {
    return false;
  }
  return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
}
