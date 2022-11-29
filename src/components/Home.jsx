import styles from "./VercelFont.module.css";
function Home(props) {
  const { semana, horas, fecha_actualizacion } = props.info;
  return (
    <div className=" flex flex-col justify-center items-center h-screen w-full bg-slate-900 ">
      <h1 className={styles.title2}>Semana {semana}</h1>
      <p className={`${styles.title3} ${styles.span1}`}>Duracion: {horas}</p>
      <p className={`${styles.title3} ${styles.span1}`}>Fecha actualizacion: {fecha_actualizacion}</p>
      <p className={`${styles.title3} ${styles.span1}`}>Total videos: {props.info.videos.length}</p>
      <p className=" text-xl font-semibold text-center text-slate-400 w-56">
        Dirigete al menu donde encontraras todo el contenido
      </p>
    </div>
  );
}

export default Home;
