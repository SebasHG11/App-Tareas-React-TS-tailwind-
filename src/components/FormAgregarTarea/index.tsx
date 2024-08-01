import { Dispatch, SetStateAction, MouseEvent, FormEvent, useState } from "react"

type Props = {
    tareas: ITarea[],
    setOpenModal: Dispatch<SetStateAction<boolean>>,
    handleAgregarTarea: (newTarea: ITarea) => void
}

export const FormAgregarTarea = ({ tareas, setOpenModal, handleAgregarTarea }: Props): JSX.Element => {
    const [inputTitulo, setInputTitulo] = useState<string>("");

    const handleCancelarAgregar = (event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>): void => {
        event.preventDefault();
        setOpenModal(false);
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>, newTitulo: string): void => {
        event.preventDefault();
        if(inputTitulo.length > 0){
            const envio: ITarea = {
                id: tareas.length,
                titulo: newTitulo,
                completada: false
            }
            handleAgregarTarea(envio);
            setOpenModal(false);
        }
        return;
    }

    return (
        <div className="w-full grid place-items-center">
            <form
                onSubmit={(event) => onSubmit(event, inputTitulo)}
                className="w-full grid place-items-center"
            >
                <label
                    className="m-2 font-bold"
                    htmlFor="tituloTarea"
                >
                    Titulo de la Tarea
                </label>
                <input
                    className="m-2 w-4/6 p-2 text-black rounded-xl"
                    type="text"
                    name="tituloTarea"
                    value={inputTitulo}
                    onChange={(event) => setInputTitulo(event.target.value)}
                />
                <input
                    className="m-2 px-10 py-2 bg-blue-800 rounded-xl cursor-pointer"
                    type="submit"
                    value="Crear Tarea"
                />
            </form>
            <span
                onClick={(event) => handleCancelarAgregar(event)}
                className="m-4 px-6 py-2 bg-red-600 rounded-xl cursor-pointer"
            >
                Cancelar
            </span>
        </div>
    )
}