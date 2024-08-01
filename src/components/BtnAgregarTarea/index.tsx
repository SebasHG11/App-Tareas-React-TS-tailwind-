export const BtnAgregarTarea = (): JSX.Element =>{
    return(
        <div className="m-3 grid place-items-center">
            <button
                className="px-6 py-2 rounded-lg bg-blue-700 text-white hover:bg-white hover:border-2 hover:border-blue-700 hover:text-blue-700"
            >
            Agregar Tarea
            </button>
        </div>
    );
}