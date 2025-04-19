import { corsService } from "../services/corsService";


/**
 * 
 * @param {Function} serviceCall: Servicio cors 
 * @param {string} URL: Url a verificar  
 * @returns {Promise<Object}  
 */

const handleCorsData = async (serviceCall,URL) => {
    try{
        const response = await serviceCall(URL);
        return response.data
    }catch(error){
        console.log(error);
        throw error;
    }
}

export const corsAdapter = {
    corsInspector: (URL) => handleCorsData(corsService,URL),
}