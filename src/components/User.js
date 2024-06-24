import { useState } from "react";

export default function User(){
  const [name, setName] = useState('catanacomics');
  const [link, setLink] = useState('assets/img/catanacomics.svg');
  
  function alterarNome(){
    let string = prompt("digite seu nome:");
    if( string!= null && string != "" )
      setName(string);
  }

  function alterarImg(){
    let string = prompt("digite um link para a imagem:");
    if( string!=null && string != "" )
      setLink(string);
  }

  return(
    <div className="usuario">
        <img onClick={alterarImg} src={link} alt="imagem de perfil"/>
        <div className="texto">
          <span>
            <strong>{name}</strong>
            <ion-icon onClick={alterarNome} name="pencil"></ion-icon>
          </span>
        </div>
    </div>
  );
}

