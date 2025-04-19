import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 
 * @param  {...any} inputs : classNames
 * @description: Este metodo combina classNames de tailwind con clsx
 * @returns  : merged classNames
 * 
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * 
 * @param {string} url: Direccion url ingresada por el usuario
 * @description: Este metodo valida si la url ingresada por el usuario es valida
 * 
 * @returns {boolean}: true si la url es valida, false si no lo es.
 *  
 */

export const isValidUrl = (url) =>{
  try{
    new URL(url)
    return true
  }catch(e){
    return false
  }
}