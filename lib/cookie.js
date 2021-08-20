import cookies from "js-cookie";

export const Actions = {
  set: "SET",
  get: "GET",
  remove: "REMOVE",
};

export const Cookie = ({ key, defaultValue, action }) => {
  if (action === Actions.set) {
    cookies.set(key, defaultValue);
  }

  if (action === Actions.remove) {
    cookies.remove(key);
  }

  let valueFromCookie = action === Actions.get ? cookies.get(key) : null;

  return valueFromCookie;
};

/**
 * 
 * @param {Cookie} cookie 
 * @returns array of all values from cookie
 */
export const ExtractCookies = (cookie) =>
  cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .reduce((accumulator, [key, value]) => ({
      ...accumulator,
      [key.trim()]: decodeURIComponent(value),
    }));
