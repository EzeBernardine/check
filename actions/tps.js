"use strict";
import axios from "axios";
import {errorHandler, getHeaders} from "../lib/utils";


export const disburse = {
    initialize: async (baseURL, type) => {
        try {
            console.log("Get headers", getHeaders())
            const {data} = await axios.get(baseURL + `/3ps/v1/disbursement/` + type + "/initialize",  {
                headers: getHeaders()
            });
            return {
                data: data.data
            }
        } catch (e) {
            return {error: errorHandler(e)};
        }
    },

    process: async (baseURL, type, payload) => {
        try {
            const headers = getHeaders();
            const {data} = await axios.post(baseURL + `/3ps/v1/disbursement/` + type + "/process",  {
                clientId: headers["client-id"],
                ...payload
            },{
                headers
            });
            return {
                data: data.data
            }
        } catch (e) {
            return {error: errorHandler(e)};
        }
    },
}

export const transferAuth = {
    createTransferAuth: async (baseURL, type, payload) => {
        try {
            console.log("Get headers", getHeaders())
            const {data} = await axios.post(baseURL + `/3ps/v2/transfer-auth`, {
                type,
                ...payload
            }, {
                headers: getHeaders()
            });
            return {
                data: data.data
            }
        } catch (e) {
            return {error: errorHandler(e)};
        }
    },
}

export const airtime = {
    getNetworks: async (baseURL) => {
        try {
            // const {data} = await axios.get(baseURL + `/3ps/v1/airtime/networks`,{
            const {data} = await axios.get(baseURL + `/3ps/v1/airtime/networks`, {
                headers: getHeaders()
            });
            return {
                data: data.data
            }
        } catch (e) {
            return {error: e.message};
        }
    },
    buyAirtime: async (baseURL, payload) => {
        try {

            //to be removed
            const {data} = await axios.post(baseURL + `/3ps/v1/airtime`, {
                ...payload,
                amount: payload.amount * 100
            }, {
                headers: getHeaders()
            });
            return {
                data: data.data
            }
        } catch (e) {
            return {error: e.message};
        }
    }
}


export const fundsTransfer = {
    getBanksList: async (baseURL) => {
        try {
            const {data} = await axios.get(baseURL + `/3ps/v1/banks`, {
                headers: getHeaders()
            });
            return {
                data: data.data
            }
        } catch (e) {
            return {error: errorHandler(e)};
        }
    },
    createTransferAuth: async (baseURL, payload) => {
        try {
            console.log("Get headers", getHeaders())

            payload.provider = "paystack";
            // const {data} = await axios.get(baseURL + `/3ps/v2/transfer-auth`,payload,{
            const {data} = await axios.post(baseURL + `/3ps/v2/transfer-auth/paystack`, payload, {
                headers: getHeaders()
            });
            return {
                data: data.data
            }
        } catch (e) {
            return {error: errorHandler(e)};
        }
    },
    makeFundsTransfer: async (baseURL, payload) => {
        try {
            console.log("Get headers", getHeaders())
            // const {data} = await axios.get(baseURL + `/3ps/v1/fundtransfer`,payload,{
            const {data} = await axios.post(baseURL + `/3ps/v1/fundtransfer`, {
                ...payload,
                amount: payload.amount * 100
            }, {
                headers: getHeaders()
            });
            return {
                data: data.data
            }
        } catch (e) {
            return {error: errorHandler(e)};
        }
    }
}
