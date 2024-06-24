import React from 'react';
import { useState, useEffect } from "react";

function teste(){
    console.log("teste de função");
}

export default function Post({ post, updateCurtidas }){
    let [imagem1, setImagem1] = useState(post.imagem_user);
    let [imagem2, setImagem2] = useState(post.imagem_curtido);
    let [name1, setName1] = useState(post.name);
    let [name2, setName2] = useState(post.name_curtido);
    let [curtidas1, setCurtidas1] = useState(post.curtidasM);
    let [curtidas2, setCurtidas2] = useState(post.curtidas);
    let [imagemP, setImagemP] = useState(post.imagem_post);
    let [corLike, setCorLike] = useState('black');
    let [iconLike, setIconLike] = useState('heart-outline');
    let [iconSave, setIconSave] = useState('bookmark-outline');

    useEffect(() => {
        setCurtidas1(post.curtidasM);
        setCurtidas2(post.curtidas);
    }, [post]);

    function curtir(){
        let novasCurtidas1 = curtidas1;
        let novasCurtidas2 = curtidas2;

        if(corLike == 'red'){
            setIconLike('heart-outline');
            setCorLike('black');
            novasCurtidas2--;        
            if (novasCurtidas2 < 0) {
                novasCurtidas1--;
                novasCurtidas2 = 999;
            }
        }
        if(corLike == 'black'){
            setIconLike('heart');
            setCorLike('red');
            novasCurtidas2++;
            if (novasCurtidas2 === 1000) {
                novasCurtidas1++;
                novasCurtidas2 = 0;
            }
        }
        
        setCurtidas1(novasCurtidas1);
        setCurtidas2(novasCurtidas2);
        updateCurtidas(post.id, novasCurtidas1, novasCurtidas2);
    }

    function curtir_img(){
        let novasCurtidas1 = curtidas1;
        let novasCurtidas2 = curtidas2;

        if(corLike == 'black'){
            setIconLike('heart');
            setCorLike('red');
            novasCurtidas2++;
            if (novasCurtidas2 === 1000) {
                novasCurtidas1++;
                novasCurtidas2 = 0;
            }
        }
        
        setCurtidas1(novasCurtidas1);
        setCurtidas2(novasCurtidas2);
        updateCurtidas(post.id, novasCurtidas1, novasCurtidas2);
    }
    
    function salvarPost(){
        if(iconSave == 'bookmark-outline')
            setIconSave('bookmark');
        if(iconSave == 'bookmark')
            setIconSave('bookmark-outline');
    }

    function rendercurtidas(){
        if(curtidas1 !== 0){
            if(curtidas2>=100){
                return`${curtidas1}.${curtidas2}`;
            }
            if(curtidas2>=10 && curtidas2 <100){
                return`${curtidas1 }.0${curtidas2}`;
            }   
            if(curtidas2==0 && curtidas2<10){
                return`${curtidas1}.00${curtidas2}`;
            }
        }else{ 
            return`${curtidas2}`;
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
                <button onClick={curtir_img}><img src={imagemP} alt={imagemP}/></button>
            </div>
    
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon style={{color: corLike}} onClick={curtir} name={iconLike}></ion-icon>
                        <ion-icon onClick={teste} name="chatbubble-outline"></ion-icon>
                        <ion-icon onClick={teste} name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon style={{color:'black'}} onClick={salvarPost} name={iconSave}></ion-icon>
                    </div>
                </div>{/* acoes */}
        
                <div className="curtidas">
                    <img src={imagem2} alt={name2}/>
                    <div className="texto">
                        Curtido por <strong>{name2}</strong> e <strong>outras {rendercurtidas()} pessoas</strong>
                    </div>
                </div>{/* curtidas */}
            </div>{/* fundo */}
        </li>
    );
}

