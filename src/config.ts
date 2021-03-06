const BIBLIO_ROOT = '/api/v1';
export const authenticationEndpoint = `${BIBLIO_ROOT}/users/login`;
export const allBooksEndpoint = `${BIBLIO_ROOT}/books`;
export const selectedBookEndpoint  = `${BIBLIO_ROOT}/books/{id}`;
export const pingEndpoint  = `${BIBLIO_ROOT}/session/ping`;
export const STORAGE_KEY_AUTH_TOKEN='biblio-token';
export const STORAGE_KEY_USER='biblio-user';
