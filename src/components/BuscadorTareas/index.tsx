import { Dispatch, SetStateAction } from "react";

type Props = {
    busqueda: string,
    setBusqueda: Dispatch<SetStateAction<string>>
}

export const BuscadorTareas = ({ busqueda, setBusqueda }: Props): JSX.Element => {
    return (
        <div className="m-5 w-full grid place-items-center">
            <input
                value={busqueda}
                onChange={(event) => setBusqueda(event.target.value)}
                className="py-4 px-2 w-8/12 rounded-md border border-gray-400"
                type="text"
                placeholder="Busca una tarea"
            />
        </div>
    );
}