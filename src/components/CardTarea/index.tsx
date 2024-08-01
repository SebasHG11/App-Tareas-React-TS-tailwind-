import { MouseEvent, Dispatch, SetStateAction } from "react";

type Props = {
  tarea: ITarea,
  handleCambiarCompletado: (id: number, event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => void,
  handleEliminarTarea: (id: number, event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => void,
  setOpenModalEdit: Dispatch<SetStateAction<boolean>>,
  setTareaEditar: Dispatch<SetStateAction<ITarea | undefined>>
}

export const CardTarea = (props: Props): JSX.Element => {
  const handleBtnEditar = (tareaEdit: ITarea, event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    props.setOpenModalEdit(true);
    props.setTareaEditar(tareaEdit);
  }

  return (
    <div
      className="m-2 w-4/5 bg-yellow-200 px-5 py-10 rounded-xl flex items-center justify-between shadow-2xl"
    >
      <div>
        <h2 className="font-normal">{props.tarea.titulo}</h2>
      </div>
      <div>
        {props.tarea.completada ?
          <span
            onClick={(event) => props.handleCambiarCompletado(props.tarea.id, event)}
            className="text-3xl cursor-pointer hover:text-4xl">✅</span>
          :
          <span
            onClick={(event) => props.handleCambiarCompletado(props.tarea.id, event)}
            className="text-3xl cursor-pointer hover:text-4xl">❌</span>
        }
        <span
          onClick={(event) => handleBtnEditar(props.tarea, event)}
          className="text-3xl cursor-pointer hover:text-4xl"
        >
          ✏️
        </span>
        <span
          onClick={(event) => props.handleEliminarTarea(props.tarea.id, event)}
          className="text-3xl cursor-pointer hover:text-4xl"
        >
          🗑️
        </span>
      </div>
    </div>
  );
}