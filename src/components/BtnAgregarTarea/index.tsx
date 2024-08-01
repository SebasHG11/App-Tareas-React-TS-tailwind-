import { Dispatch, SetStateAction, MouseEvent } from "react";

type Props = {
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

export const BtnAgregarTarea = ({ setOpenModal }: Props): JSX.Element => {
    const handleModalAgregar = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) =>{
        event.preventDefault();
        setOpenModal(true);
    }

    return (
        <div className="m-3 grid place-items-center">
            <button
                onClick={(event) => handleModalAgregar(event)}
                className="px-6 py-2 rounded-lg bg-blue-700 text-white hover:bg-white hover:border-2 hover:border-blue-700 hover:text-blue-700"
            >
                Agregar Tarea
            </button>
        </div>
    );
}