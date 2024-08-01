'use client'
import { useState, MouseEvent, useEffect } from "react";
import { HeaderTareas } from "@/components/HeaderTareas";
import { BuscadorTareas } from "@/components/BuscadorTareas";
import { BtnAgregarTarea } from "@/components/BtnAgregarTarea";
import { ContenedorCards } from "@/components/ContenedorCards";
import { CardTarea } from "@/components/CardTarea";
import { Modal } from "@/components/Modal";
import { FormAgregarTarea } from "@/components/FormAgregarTarea";
import { FormEditarTarea } from "@/components/FormEditarTarea";
import { stringify } from "querystring";

export default function Home() {
  const [tareas, setTareas] = useState<ITarea[]>([]);
  const [tareasFilter, setTareasFilter] = useState<ITarea[]>(tareas);
  const [busqueda, setBusqueda] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [tareaEditar, setTareaEditar] = useState<ITarea>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const items: string | null = window.localStorage.getItem("Items");

    if (items) {
      let parsedItems: ITarea[] = JSON.parse(items);
      setTareas(parsedItems);
    } else {
      setTareas([]);
    }
    setIsLoading(false);
  }, [])

  const useLocalStorage = (newTareas: ITarea[]): void => {
    if(newTareas){
      setTareas(newTareas);
      let parsedItems = JSON.stringify(newTareas);
      window.localStorage.setItem("Items", parsedItems)
    }
    return;
  }

  const handleCambiarCompletado = (id: number, event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>): void => {
    event.preventDefault();
    const newTareas = tareas.map(tarea => {
      if (tarea.id === id) return { ...tarea, completada: !tarea.completada };
      return tarea;
    })
    useLocalStorage(newTareas)
  }

  const handleBuscarTarea = () => {
    const tareasBuscadas = tareas.filter(tarea => tarea.titulo.toLowerCase().includes(busqueda.toLowerCase()));
    setTareasFilter(tareasBuscadas);
  }

  const handleEliminarTarea = (id: number, event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>): void => {
    event.preventDefault();
    const newTareas = tareas.filter(tarea => tarea.id !== id);
    useLocalStorage(newTareas);
  }

  const handleAgregarTarea = (newTarea: ITarea): void => {
    useLocalStorage([...tareas, newTarea]);
  }

  const handleEditarTarea = (editTarea: ITarea): void => {
    if (editTarea) {
      const newTareas = tareas.map(tarea => {
        if (tarea.id === editTarea.id) {
          return { ...editTarea, titulo: editTarea.titulo };
        }
        return tarea;
      });
      useLocalStorage(newTareas);
    }
    return;
  }

  useEffect(() => {
    handleBuscarTarea();
  }, [busqueda, tareas]);

  return (
    <div className="grid place-items-center">
      {openModal &&
        <Modal>
          <FormAgregarTarea
            tareas={tareas}
            setOpenModal={setOpenModal}
            handleAgregarTarea={handleAgregarTarea}
          />
        </Modal>
      }
      {openModalEdit &&
        <Modal>
          <FormEditarTarea
            setOpenModalEdit={setOpenModalEdit}
            tareaEditar={tareaEditar}
            handleEditarTarea={handleEditarTarea}
          />
        </Modal>
      }
      <HeaderTareas
        tareas={tareas}
      />
      <BuscadorTareas
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
      <BtnAgregarTarea
        setOpenModal={setOpenModal}
      />
      <ContenedorCards>
        {isLoading &&
          <div className="loading-wave">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
          </div>
        }
        {(tareasFilter.length > 0 && isLoading === false) &&
          tareasFilter.map(tarea => (
            <CardTarea
              key={tarea.id}
              tarea={tarea}
              handleCambiarCompletado={handleCambiarCompletado}
              handleEliminarTarea={handleEliminarTarea}
              setOpenModalEdit={setOpenModalEdit}
              setTareaEditar={setTareaEditar}
            />
          ))
        }
        {(tareas.length <= 0 && isLoading === false) &&
          <h1
            className="m-10 font-bold text-3xl text-red-500 text-center"
          >
            ¡No tienes tareas en el momento! ¡Agrega una!
          </h1>
        }
      </ContenedorCards>
    </div>
  );
}