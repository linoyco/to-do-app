export const STORAGE_KEY = 'token';

export function storeToken(token: string) {
	localStorage.setItem(STORAGE_KEY, token);
}

export function clearToken() {
	localStorage.removeItem(STORAGE_KEY);
}

export function getToken(): (string | null) {
	return localStorage.getItem(STORAGE_KEY);
}
