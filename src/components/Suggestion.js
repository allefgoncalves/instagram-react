export default function Suggestion(props){
    return (
      <li className="sugestao">
        <div className="usuario">
          <img src={props.imagem1} alt="bad.vibes.memes.svg"/>
          <div className="texto">
            <div className="nome">{props.nome1}</div>
            <div className="razao">{props.razao1}</div>
          </div>
        </div>
 
       <div onClick={teste} className="seguir">Seguir</div>
      </li>
    );
}

function teste(){
  console.log("teste seguir");
}