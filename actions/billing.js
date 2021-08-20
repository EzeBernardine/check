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
