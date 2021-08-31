
"use strict";


import {errorHandler, getHeaders} from "../lib/utils";
import axios from "axios";

export const getInvoices = async (baseURL, userId) => {
    try {
        const {data} = await axios.get(`${baseURL}/invoicing/v1/invoices`,{
            headers: getHeaders(),
            // params: {
            //     customerId: userId
            // }
        });
        return {
            data: data
        }
    } catch (e) {
        return {error: errorHandler(e)};
    }
};


