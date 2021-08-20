"use strict";

import Cookies from "js-cookie";

export const deleteAllCookies = () => {
    Object.keys(Cookies.get()).forEach(function(cookieName) {
        console.log("cookieName", cookieName)
        var neededAttributes = {
            // Here you pass the same attributes that were used when the cookie was created
            // and are required when removing the cookie
        };
        Cookies.remove(cookieName, neededAttributes);
    });
}
