import API from "./api";

export const corsService = async (URL) => {
    try{
        const response = await API.get(`/url?url=${URL}`);
        return response;
    }catch(error){
        console.log("Error en el servicio de corsService");
        throw error;
    }
}