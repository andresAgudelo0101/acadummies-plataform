function Home(props) {
    const {semana,horas,fecha_actualizacion} = props.info;
    return (
        <div className=" flex justify-center items-center h-screen w-full bg-zinc-700">
            <h1>Semana {semana}</h1>
        </div>
    )
}

export default Home;
