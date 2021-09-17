   
   
   "use strict";
   import axios from "axios";
   import {errorHandler, getHeaders} from "../lib/utils";
   
   
   export const custmizePortal =  async(baseURL, clientId) => {
           try {
               const {data} = await axios.get(baseURL + `/clients/v1/clients/${clientId}/portal-customisations`,
                {
                   headers: getHeaders()

               });
               return {
                   data: data.data
               }
           } catch (e) {
               return {error: errorHandler(e)};
           }
   }
