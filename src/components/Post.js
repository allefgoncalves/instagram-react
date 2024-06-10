import { useState } from "react";

function teste(){
    console.log("teste de função");
}

export default function Post(props){
    let [imagem1, setImagem1] = useState(props.imagem1);
    let [imagem2, setImagem2] = useState(props.imagem2);
    let [name1, setName1] = useState(props.name1);
    let [name2, setName2] = useState(props.name2);
    let [curtidas1, setCurtidas1] = useState(props.curtidas1);
    let [curtidas2, setCurtidas2] = useState(props.curtidas2);
    let [imagemP, setImagemP] = useState(props.imagemP);
    let [cor, setCor] = useState('black');
    let [icon, setIcon] = useState('heart-outline');
  
  
    function curtir(){
      if(cor == 'red'){
        setIcon('heart-outline');
        setCor('black')
      }
      if(cor == 'black'){
        setIcon('heart');
        setCor('red');
        curtidas2++;
        setCurtidas2(curtidas2);
        if(curtidas2==1000){
            curtidas1++;
            setCurtidas1(curtidas1);
            curtidas2=0; 
            setCurtidas2(curtidas2);
        } 
      }
    }
  
    return(
        <li className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={imagem1} alt={imagem1}/>
                    {name1}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
    
            <div className="conteudo">
                <button onDoubleClick={curtir}><img src={imagemP} alt={imagemP}/></button>
            </div>
    
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon style={{color: cor}} onClick={curtir} name={icon}></ion-icon>
                        <ion-icon onClick={teste} name="chatbubble-outline"></ion-icon>
                        <ion-icon onClick={teste} name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={teste} name="bookmark-outline"></ion-icon>
                    </div>
                </div>{/* acoes */}
        
                <div className="curtidas">
                    <img src={imagem2} alt={name2}/>
                    <div className="texto">
                        Curtido por <strong>{name2}</strong> e <strong>outras {(curtidas1!=0) ?`${curtidas1}.${curtidas2}`:`${curtidas2}`} pessoas</strong>
                    </div>
                </div>{/* curtidas */}
            </div>{/* fundo */}
        </li>
    );
}

