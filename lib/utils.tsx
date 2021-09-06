
import router from "next/router";
import {getAuthenticationToken, getClientId} from "./localStorage";

export const getHeaders = () => {
    return {
        "client-id": getClientId(),
        Authorization: "Bearer " + getAuthenticationToken()
    }
}
export const errorHandler = (err: any, defaulted: boolean = false) => {
    if (defaulted) {
        return "Ops!, an error occurred.";
    }

    console.log("Error", err.response?.data?.error);
    let messageString = "";
    if (!err.response) {
        messageString += "Network error! check your network and try again";
    } else if (err?.response?.data?.error){
        messageString = err?.response?.data?.error;
    }
    else {
        let data = err.response.data.results;
        if (!err.response.data.results) {
            data = err.response.data;
        }
        messageString = loopObj(data);
    }

    console.log("Message", messageString, messageString.replace(/{|}|'|\[|\]/g, ""));
    return messageString.replace(/{|}|'|\[|\]/g, "");
};

const loopObj = (obj: object) => {
    let agg = "";
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            agg += `<div>${key}: ${
                typeof obj[key] === "object" ? loopObj(obj[key]) : obj[key]
            }</div>`;
        }
    }
    return agg;
};

export const goto404 = () => {
    router.push("/404");
};


export const redirectToLogin = (AUTH_URL: string) => {
    window.location.href =
      AUTH_URL +
      `?redirect=${window.location.host}&extra=${window.location.pathname}`;
  };