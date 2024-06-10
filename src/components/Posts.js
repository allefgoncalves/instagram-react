import React from 'react';
import Post from './Post';

export default function Posts(){
    const post =[
        {id:"01",imagem_user:"assets/img/meowed.svg", name:"meoweb", imagem_post:"assets/img/gato-telefone.svg", imagem_curtido:"assets/img/respondeai.svg", name_curtido:"respondeai", curtidasM:7,curtidas:790},
        {id:"02",imagem_user:"assets/img/adorable_animals.svg", name:"adorable_animals", imagem_post:"assets/img/dog.svg", imagem_curtido:"assets/img/razoesparaacreditar.svg", name_curtido:"razoesparaacreditar", curtidasM:14,curtidas:429},
        {id:"03",imagem_user:"assets/img/catanacomics.svg", name:"catanacomics", imagem_post:"assets/img/gato-telefone.svg", imagem_curtido:"assets/img/smallcutecats.svg", name_curtido:"smallcutecats",curtidasM:0,curtidas:995}
    ]
    
    return(
        <ul className="posts">
            {post.map(
                post=><Post 
                    key={post.id} 
                    imagem1={post.imagem_user} 
                    name1= {post.name} 
                    imagemP={post.imagem_post} 
                    imagem2={post.imagem_curtido} 
                    name2={post.name_curtido} 
                    curtidas1={post.curtidasM} 
                    curtidas2={post.curtidas}
                />
            )}
        </ul>
    );
}