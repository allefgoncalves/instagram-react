import React from 'react';
import Post from './Post';
import { useState } from "react";

export default function Posts(){
    let [posts, setPosts] = useState([
        {id: "01", imagem_user: "assets/img/meowed.svg", name: "meoweb", imagem_post: "assets/img/gato-telefone.svg", imagem_curtido: "assets/img/respondeai.svg", name_curtido: "respondeai", curtidasM: 7, curtidas: 790},
        {id: "02", imagem_user: "assets/img/adorable_animals.svg", name: "adorable_animals", imagem_post: "assets/img/dog.svg", imagem_curtido: "assets/img/razoesparaacreditar.svg", name_curtido: "razoesparaacreditar", curtidasM: 14, curtidas: 99},
        {id: "03", imagem_user: "assets/img/catanacomics.svg", name: "catanacomics", imagem_post: "assets/img/gato-telefone.svg", imagem_curtido: "assets/img/smallcutecats.svg", name_curtido: "smallcutecats", curtidasM: 0, curtidas: 999}
    ]);
    
    const updateCurtidas = (id, novasCurtidasM, novasCurtidas) => {
        setPosts(posts.map(post =>
            post.id === id?{ ...post, curtidasM: novasCurtidasM, curtidas: novasCurtidas }:post
        ));
    };

    return(
        <ul className="posts">
             {posts.map(post => (
                <Post 
                    key={post.id} 
                    post={post}
                    updateCurtidas={updateCurtidas}
                />
            ))}
        </ul>
    );
}