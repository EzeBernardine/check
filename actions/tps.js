"use strict";
import axios from "axios";
import {getHeaders} from "../lib/utils";



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


export const fundtransfer = {
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
            return {error: e.message};
        }
    },
    createTransferAuth: async (baseURL, payload, ledgerId) => {
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
