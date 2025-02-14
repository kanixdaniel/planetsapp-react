import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

const sleep = async () => {
    return new Promise((r) => setTimeout(r, 2000));
}

export const updatePlanetAction = async (planet: Planet) => {
    try {
        await sleep();
        throw new Error('error controlado');
        const response = await planetsApi.patch<Planet>(`/${planet.id}`, planet);
        console.log('Se actualizó planeta');
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el planeta', error);
        throw new Error('Error al actualizar el planeta')
    }
}