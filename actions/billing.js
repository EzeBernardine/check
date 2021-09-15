"use strict";


import {errorHandler, getHeaders} from "../lib/utils";
import axios from "axios";

export const getWallet = async (baseURL, ledgerId,userId) => {
    try {
        const {data} = await axios.get(baseURL + `/billing/wallets`,{
            headers: getHeaders(),
            params: {
                clientLedgerId: ledgerId,
                customerId: userId
            }
        });
        return {
            data: data
        }
    } catch (e) {
        return {error: errorHandler(e)};
    }
};

export const getWalletTransactions = async (baseURL, ledgerId, userId) => {
    try {
        const {data} = await axios.get(baseURL + `/billing/wallet-transactions`,{
            headers: getHeaders(),
            params: {
                clientLedgerId: ledgerId,
                customerId: userId,
            }
        });
        return {
            data: data
        }
    } catch (e) {
        return {error: errorHandler(e)};
    }
};

export const getClientLedgers= async (baseURL) => {
    try {
        const {data} = await axios.get(baseURL + `/billing/client-ledger`,{
            headers: getHeaders(),
        });
        return {
            data: data
        }
    } catch (e) {
        return {error: errorHandler(e)};
    }
};

export const getClientLedger = async (baseURL, clientLedgerId) => {
    try {
        const {data} = await axios.get(baseURL + `/billing/client-ledger/${clientLedgerId}`,{
            headers: getHeaders(),
        });
        return {
            data: data
        }
    } catch (e) {
        return {error: errorHandler(e)};
    }
};

export const getPaymentProvider = async (baseURL, clientLedgerId) => {
    try {
        // const {data} = await axios.get(baseURL + `/billing/payment-providers/?clientLedgerId=${clientLedgerId}`,{
        const {data} = await axios.get(baseURL + `/billing/payment-providers/?clientLedgerId=${clientLedgerId}`,{
            headers: getHeaders(),
        });
        return {
            data: data
        }
    } catch (e) {
        return {error: errorHandler(e)};
    }
};
export const getPaymentProviderByQuery = async (baseURL, query) => {
    try {
        // const {data} = await axios.get(baseURL + `/billing/payment-providers/?clientLedgerId=${clientLedgerId}`,{
        const {data} = await axios.get(baseURL + `/billing/payment-providers/`,{
            headers: getHeaders(),
            params: query
        });
        return {
            data: data
        }
    } catch (e) {
        return {error: errorHandler(e)};
    }
};


