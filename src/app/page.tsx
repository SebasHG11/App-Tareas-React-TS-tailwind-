import { HeaderTareas } from "@/components/HeaderTareas";
import { BuscadorTareas } from "@/components/BuscadorTareas";
import { BtnAgregarTarea } from "@/components/BtnAgregarTarea";
import { ContenedorCards } from "@/components/ContenedorCards";
import { CardTarea } from "@/components/CardTarea";

export default function Home() {
  return (
    <div className="grid place-items-center">
      <HeaderTareas />
      <BuscadorTareas />
      <BtnAgregarTarea />
      <ContenedorCards>
        <CardTarea />
      </ContenedorCards>
    </div>
  );
}
