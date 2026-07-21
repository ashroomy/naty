import Contact from "@/src/components/Contact";

const FormularioHibrido = () => {
  return (
    <main className="dodo_tm_one_page_wrapper min-h-screen bg-[#F8FCFD] py-[45px]">
      <Contact
        defaultSelectedService="hibrido"
        title="Formulario Plan Híbrido"
        description="Completá este formulario para recibir los detalles del plan de entrenamiento híbrido."
        subject="Nuevo formulario del plan híbrido"
      />
    </main>
  );
};

export default FormularioHibrido;
