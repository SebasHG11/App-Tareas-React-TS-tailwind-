import { useEffect, useState } from "react";

type Props = {
    tareas: ITarea[]
};

export const HeaderTareas = ({ tareas }: Props): JSX.Element => {
    const [count, setCount] = useState<number>(0);

    const handleCount = (): void => {
        let tareasCompletadas = 0;
        if (tareas.length > 0) {
            tareas.map(tarea => {
                if (tarea.completada === true) {
                    tareasCompletadas += 1;
                }
            })
        }
        setCount(tareasCompletadas);
    }

    useEffect(() => {
        handleCount();
    }, [tareas]);

    return (
        <div className="m-3">
            {tareas.length <= 0 &&
                <h1 className="text-blue-800 font-bold text-2xl">
                    No hay tareas
                </h1>
            }
            {(tareas.length > 0 && tareas.length !== count) &&
                <h1 className="text-blue-800 font-bold text-2xl">
                    Has realizado {count} de las {tareas.length} tareas
                </h1>
            }
            {tareas.length === count &&
                <h1 className="text-blue-800 font-bold text-2xl">
                    ¡Felicidades! ¡Terminaste todas las tareas!
                </h1>
            }

        </div>
    );
}