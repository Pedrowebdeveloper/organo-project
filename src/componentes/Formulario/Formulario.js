import CampoTexto from "../CampoTexto/CampoTexto"
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="nome" placeholder="Digite seu nome"/>
                <CampoTexto label="cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )
}

export default Formulario