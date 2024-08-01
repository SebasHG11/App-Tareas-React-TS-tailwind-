export const CardTarea = (): JSX.Element =>{
    return(
        <div 
            className="m-2 w-2/5 bg-yellow-200 px-5 py-10 rounded-xl flex items-center justify-between shadow-2xl"
        >
            <div>
              <h2 className="font-normal">Tarea #1</h2>
            </div>
            <div>
              <span className="text-3xl cursor-pointer hover:text-4xl">✅</span>
              <span className="text-3xl cursor-pointer hover:text-4xl">✏️</span>
            </div>
        </div>
    );
}