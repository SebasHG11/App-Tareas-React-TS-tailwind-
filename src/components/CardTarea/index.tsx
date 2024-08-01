import { MouseEvent } from "react";

type Props = { 
  tarea: ITarea,
  handleCambiarCompletado: (id: number, event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => void
}

export const CardTarea = ({ tarea, handleCambiarCompletado }: Props): JSX.Element =>{
    return(
        <div 
            className="m-2 w-2/5 bg-yellow-200 px-5 py-10 rounded-xl flex items-center justify-between shadow-2xl"
        >
            <div>
              <h2 className="font-normal">{tarea.titulo}</h2>
            </div>
            <div>
              {tarea.completada ?
                <span
                  onClick={(event) => handleCambiarCompletado(tarea.id, event)}
                  className="text-3xl cursor-pointer hover:text-4xl">✅</span>
                :
                <span 
                  onClick={(event) => handleCambiarCompletado(tarea.id, event)}
                  className="text-3xl cursor-pointer hover:text-4xl">❌</span>
              }
              <span className="text-3xl cursor-pointer hover:text-4xl">✏️</span>
            </div>
        </div>
    );
}