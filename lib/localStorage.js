import React from "react";

/**
 *
 * @param {String} key The key to set in localStorage for this value
 * @param {Object} defaultValue The value to use if it is not already in localStorage
 */
export const LocalStorageState = (key, defaultValue) => {
  let browser = typeof window !== "undefined";
  console.log(browser, key, defaultValue);
  defaultValue &&
    browser &&
    window.localStorage.setItem(key, JSON.stringify(defaultValue));

  let valueInLocalStorage = browser ? window.localStorage.getItem(key) : null;
  if (valueInLocalStorage) {
    return JSON.parse(valueInLocalStorage);
  }

  return valueInLocalStorage;
};
