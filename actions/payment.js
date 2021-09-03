
"use strict";


import {errorHandler, getHeaders} from "../lib/utils";
import axios from "axios";

 

export const initializePaystack = async (baseURL, pymentData) => {
    try {
        const {data} = await axios.post(`${baseURL}/payments/v1/paystack/initialize`, 
        {
            ...pymentData
        },
        {
            headers: getHeaders(),
        });
        return {
            data: data
        }
    } catch (e) {
        return {error: errorHandler(e)};
    }
};


