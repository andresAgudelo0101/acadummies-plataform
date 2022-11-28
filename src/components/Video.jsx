function Video(props) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{props.titulo}</h1>
      <h2>{props.url}</h2>
      {props.contenido?.map((cont, key) => (
        <div key={key}>
          <p>{cont.comentario}</p>
          <a href={cont.url}>{cont.url}</a>
        </div>
      ))}
    </div>
  );
}

export default Video;
