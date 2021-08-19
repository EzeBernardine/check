"use strict";
import axios from "axios";
import {errorHandler, getHeaders} from "../lib/utils";



export const airtime = {
    getNetworks: async (baseURL) => {
        try {
            const {data} = await axios.get(baseURL + `/3ps/v1/airtime/me`,{
                headers: getHeaders()
            });
            return {
                data: data.data
            }
        } catch (e) {
            return {error: e.message};
        }
    },
    buyAirtime: async (baseURL, payload, ledgerId) => {
        try {
            console.log("Get headers", getHeaders())
            const {data} = await axios.get(baseURL + `/users/v1/auths/me`,{
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
            const {data} = await axios.get(baseURL + `/3ps/v1/banks`,{
                headers: getHeaders(),
                params: {
                    provider: "paystack"
                }
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
            const {data} = await axios.post(baseURL + `/3ps/v2/transfer-auth/paystack`, payload,{
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

            payload.provider = "paystack";
            // const {data} = await axios.get(baseURL + `/3ps/v1/fundtransfer`,payload,{
            const {data} = await axios.post(baseURL + `/3ps/v1/fundtransfer/paystack`, payload,{
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
