export default function Suggestion(){
  
    const sugestao =[
  
      {imagem:"assets/img/bad.vibes.memes.svg" ,nome:"bad.vibes.memes" ,razao:"Segue você"},
      {imagem:"assets/img/chibirdart.svg" ,nome:"chibirdart" ,razao:"Segue você" },
      {imagem:"assets/img/razoesparaacreditar.svg" ,nome:"razoesparaacreditar" ,razao:"Novo no Instagram" },
      {imagem:"assets/img/adorable_animals.svg" ,nome:"adorable_animals" ,razao:"Segue você" },
    ]
  
    return (
    <lu className="sugestao">
         {sugestao.map(sugestao => <Sugestao imagem1={sugestao.imagem} nome1={sugestao.nome} razao1={sugestao.razao} /> )}
    </lu>
    );
}


function Sugestao(props) {
    return (
    <li>
        
    </li>
    );
}