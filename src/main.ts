import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


/**
 * @typedef {Object.<(string), any>} State
 * @property {Array<Article | UsualProduct>} articles
 * @property {boolean} isLoading
 * @property {boolean} error
 * @property {string} route
 */
/**
 * @type {State}
 */
export const INITIAL_STATE = {
  articles: [],
  isLoading: false,
  error: false,
  route: '/',
}

/**
 * Checks if there is a user logged in by verifying the presence of a token
 * in the local storage.
 *
 * @returns {boolean} True if the user is logged in, false otherwise.
 */
export function isUserLoggedIn() {
  const userData = getDataFromSessionStorage()
  return userData?.user?.token
}

/**
 * Retrieves the shopping list data from session storage.
 *
 * @returns {State} Saved state.
 * If no data is found, returns an empty State object.
 */
export function getDataFromSessionStorage() {
  const defaultValue = JSON.stringify(INITIAL_STATE)
  return JSON.parse(sessionStorage.getItem('shoppingList') || defaultValue)
}
