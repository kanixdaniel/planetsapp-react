import { FC, use } from 'react';
import { Planet } from '../interfaces/planet.interface';
import { EditPlanetForm } from './ui/EditPlanetForm';
import { PlanetList } from './ui/PlanetList';

interface Props {
    getPlanets: Promise<Planet[]>
}

const Planets: FC<Props> = ({ getPlanets }) => {
    const planets: Planet[] = use(getPlanets);

    const handleAddPlanet = (planet: Partial<Planet>) => {
        console.log(planet);
    };

    return (
        <>
            <h4 className="text-2xl font-thin mb-4">Agregar y mantener planetas</h4>
            <hr className="border-gray-300 mb-4" />
            {/* Formulario para agregar un planeta */}
            <EditPlanetForm onAddPlanet={handleAddPlanet} />

            {/* {error && (
                <p>
                    Error al cargar los planetas -{' '}
                    <small className="text-red-500">{error}</small>
                </p>
            )} */}

            {/* Lista de planetas Grid*/}
            {/* {isLoading ? <p>Cargando...</p> : <PlanetList planets={planets} />} */}
            <PlanetList planets={planets} />
        </>
    );
};

export default Planets;
