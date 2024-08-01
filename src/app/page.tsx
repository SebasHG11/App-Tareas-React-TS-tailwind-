import { HeaderTareas } from "@/components/HeaderTareas";
import { BuscadorTareas } from "@/components/BuscadorTareas";
import { ContenedorCards } from "@/components/ContenedorCards";
import { CardTarea } from "@/components/CardTarea";

export default function Home() {
  return (
    <div className="grid place-items-center">
      <HeaderTareas />
      <BuscadorTareas />
      <ContenedorCards>
        <CardTarea />
      </ContenedorCards>
    </div>
  );
}
