import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit} = useForm()

    const enviar = (data) => {
        console.log(data);
    }

    return (
        <div className="container">
            <h1 className="main-title"> CONTACTO </h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
                <input 
                    type="text" 
                    placeholder="Ingresa tu nombre"     
                    {...register("Nombre")}               
                />
                <input 
                    type="email" 
                    placeholder="Ingresa tu email" 
                    {...register("Email")}
                />
                <button className="enviar" type="submit">Enviar</button>
            </form>
            
        </div>
    )
}

export default Contacto;