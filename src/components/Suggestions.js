import Suggestion from './Suggestion';

export default function Suggestions(){  
  const sugestao =[
    {id:"01",imagem:"assets/img/bad.vibes.memes.svg" ,nome:"bad.vibes.memes" ,razao:"Segue você"},
    {id:"02",imagem:"assets/img/chibirdart.svg" ,nome:"chibirdart" ,razao:"Segue você" },
    {id:"03",imagem:"assets/img/razoesparaacreditar.svg" ,nome:"razoesparaacreditar" ,razao:"Novo no Instagram" },
    {id:"04",imagem:"assets/img/adorable_animals.svg" ,nome:"adorable_animals" ,razao:"Segue você" },
  ]
  
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      <ul>
        {sugestao.map(sugestao => <Suggestion 
          key={sugestao.id} 
          imagem1={sugestao.imagem} 
          nome1={sugestao.nome} 
          razao1={sugestao.razao} 
        /> )}
      </ul>
    </div>
  );
}