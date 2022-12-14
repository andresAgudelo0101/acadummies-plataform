import styles from "./VercelFont.module.css";
import { useEffect } from "react";

function Video(props) {
  return (
    <div className="bg-black w-full h-auto text-white flex flex-col items-center p-8">
      <h1 className={styles.title2}>{props.titulo}</h1>
      <div className="w-full h-full  flex flex-col gap-3 items-center">
        {/*
        <video
          className="w-11/12 md:w-3/4 h-auto  bg-zinc-900"
          controls
          data-state="hidden"
        >
          <source src={props.url} type="video/mp4" />
          <source src={props.url} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
  */}
        <iframe
          style={{ width: "100%", height: "500px" }}
          src={props.url}
          title={props.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="w-full">
          <h2 className={`${styles.title3} ${styles.span1}`}>
            Contenido de la clase.
          </h2>
        </div>

        <div className=" w-full h-64 overflow-auto">
          <div className="w-auto">
            <h2 className=" text-xl font-semibold text-left text-slate-400">
              Anotaciones:
            </h2>
            {props.contenido?.comentarios?.map((coment, key) => (
              <div key={key} className=" ml-4">
                <p className=" text-xl font-light leading-normal tracking-tight text-slate-50 font-sans">
                  {coment}
                </p>
              </div>
            ))}
          </div>
          <div className="w-auto ">
            <h2 className=" text-xl font-semibold text-left text-slate-400">
              Enlaces:
            </h2>
            {props.contenido?.enlaces?.map((cont, key) => (
              <div key={key}>
                <a
                  href={cont}
                  className="text-blue-500 border-b-blue-500 border-b-2 ml-4"
                  target="_blank"
                >
                  {cont}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
