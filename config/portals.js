
import {custmizePortal} from '../actions/portal'
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import {Alert} from "kodobe-react-components";



export const usePortalsConfig = () => {
    const [ configuration, setConfiguration ] = useState(false)
    const clientId =  Cookies.get("client-id")
    const baseURL = process.env.BASE_ENDPOINT;
    
    useEffect(() => {
        const handelPortalCustimization = async () => {
            const {data, error} = await custmizePortal(baseURL, clientId)
            if(error) return Alert.showError({content: error})
            
            if(data) {
                setConfiguration(data)
                // console.log(data, 'portal')
            }
        }
         handelPortalCustimization();
      }, [ ]);

    return { configuration }
}
