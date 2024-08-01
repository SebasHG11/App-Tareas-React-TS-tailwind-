import { MouseEvent, Dispatch, SetStateAction, useState, ChangeEvent, FormEvent, useEffect } from "react";

type Props = {
    setOpenModalEdit: Dispatch<SetStateAction<boolean>>,
    tareaEditar: ITarea | undefined,
    handleEditarTarea: (editTarea: ITarea) => void
}

export const FormEditarTarea = ({ setOpenModalEdit, tareaEditar, handleEditarTarea }: Props): JSX.Element => {
    const [formValues, setFormValues] = useState<ITarea | undefined>(tareaEditar);

    const handleCancelarEditar = (event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>): void => {
        event.preventDefault();
        setOpenModalEdit(false);
    }

    useEffect(()=>{
        if(tareaEditar){
            setFormValues(tareaEditar)
        }
    }, [tareaEditar])

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(formValues){
            const { name, value } = event.target;
            setFormValues({
                ...formValues,
                [name]: value
            });
        }
    }

    const { titulo = "" } = formValues || {};

    const onSubmit = (event: FormEvent<HTMLFormElement>, newTitulo: string): void => {
        event.preventDefault();
        if (newTitulo.length > 0 && tareaEditar) {
            const tareaEditada: ITarea = { ...tareaEditar, titulo: newTitulo };
            handleEditarTarea(tareaEditada);
            setOpenModalEdit(false);
        }
        return;
    }

    return (
        <div className="w-full grid place-items-center">
            <form
                onSubmit={(event) => onSubmit(event, titulo)}
                className="w-full grid place-items-center"
            >
                <label
                    className="m-2 font-bold"
                    htmlFor="titulo"
                >
                    Nuevo Titulo
                </label>
                <input
                    className="m-2 w-4/6 p-2 text-black rounded-xl"
                    type="text"
                    name="titulo"
                    value={titulo}
                    onChange={onInputChange}
                />
                <input
                    className="m-2 px-10 py-2 bg-blue-800 rounded-xl cursor-pointer"
                    type="submit"
                    value="Editar Tarea"
                />
            </form>
            <span
                onClick={(event) => handleCancelarEditar(event)}
                className="m-4 px-6 py-2 bg-red-600 rounded-xl cursor-pointer"
            >
                Cancelar
            </span>
        </div>
    )
}