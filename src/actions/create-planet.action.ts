import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

/* Partial sirve para indicar que es posible que algunos 
 * (o todos) los valores de Planet pueden venir como undefined
 * es lo mismo a definir todas propiedades con ?:
*/
export const createPlanetAction = async (planet: Partial<Planet>) => {
    try {
        const response = await planetsApi.post<Planet>('/', planet);
        return response.data;
    } catch (error) {
        console.error(error)
        return null;
    }
}

// FormData es el tipo de dato que genera un <form></form>
export const createPlanetActionForm = async (_prevState: unknown, queryData: FormData) => {
    const formData = Object.fromEntries(queryData.entries());

    try {
        const response = await planetsApi.post<Planet>('/', formData);
        return response.data;
    } catch (error) {
        console.error(error)
        throw new Error('No fue posible agregar el planeta');
    }
}