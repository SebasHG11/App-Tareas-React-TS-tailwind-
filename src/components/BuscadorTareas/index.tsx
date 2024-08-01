export const  BuscadorTareas = (): JSX.Element =>{
    return(
        <div className="m-5 w-full grid place-items-center">
            <input 
                className="py-4 px-2 w-8/12 rounded-md border border-gray-400" 
                type="text" 
                placeholder="Busca una tarea" 
            />
        </div>
    );
}