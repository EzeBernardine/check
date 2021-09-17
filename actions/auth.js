"use strict";
import axios from "axios";
import {getHeaders} from "../lib/utils";



export const auth = async (baseURL) => {
    try {
        // console.log( getHeaders(), ' getHeaders()')
        const {data} = await axios.get(baseURL + `/users/v1/auths/me`,{
            headers: getHeaders()
        });
        return {
            data: data.data
        }
    } catch (e) {
        return {error: e.message};
    }
};
