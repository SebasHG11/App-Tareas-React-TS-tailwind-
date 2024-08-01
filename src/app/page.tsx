'use client'
import { useState, MouseEvent, useEffect } from "react";
import { HeaderTareas } from "@/components/HeaderTareas";
import { BuscadorTareas } from "@/components/BuscadorTareas";
import { BtnAgregarTarea } from "@/components/BtnAgregarTarea";
import { ContenedorCards } from "@/components/ContenedorCards";
import { CardTarea } from "@/components/CardTarea";

export default function Home() {
  const initialValue: ITarea[] = [
    { id: 1, titulo: 'Usar TS', completada: true },
    { id: 2, titulo: 'Usar JS', completada: false },
    { id: 3, titulo: 'Usar React', completada: true }
  ];

  const [tareas, setTareas] = useState<ITarea[]>(initialValue);
  const [tareasFilter, setTareasFilter] = useState<ITarea[]>(tareas);
  const [busqueda, setBusqueda] = useState<string>('');

  const handleCambiarCompletado = (id: number, event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>): void => {
    event.preventDefault();
    const newTareas = tareas.map(tarea => {
      if (tarea.id === id) return { ...tarea, completada: !tarea.completada };
      return tarea;
    })
    setTareas(newTareas)
  }

  const handleBuscarTarea = () => {
    const tareasBuscadas = tareas.filter(tarea => tarea.titulo.toLowerCase().includes(busqueda.toLowerCase()));
    setTareasFilter(tareasBuscadas);
  }

  const handleEliminarTarea = (id: number, event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>): void => {
    event.preventDefault();
    const newTareas = tareas.filter(tarea => tarea.id !== id);
    setTareas(newTareas);
  }

  useEffect(() => {
    handleBuscarTarea();
  }, [busqueda, tareas]);

  return (
    <div className="grid place-items-center">
      <HeaderTareas
        tareas={tareas}
      />
      <BuscadorTareas
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
      <BtnAgregarTarea />
      <ContenedorCards>
        {(tareasFilter.length > 0) ?
          tareasFilter.map(tarea => (
            <CardTarea
              key={tarea.id}
              tarea={tarea}
              handleCambiarCompletado={handleCambiarCompletado}
              handleEliminarTarea={handleEliminarTarea}
            />
          ))
          :
          <h1
            className="m-10 font-bold text-3xl text-red-500"
          >
            ¡No tienes tareas en el momento! ¡Agrega una!
          </h1>
        }
      </ContenedorCards>
    </div>
  );
}
