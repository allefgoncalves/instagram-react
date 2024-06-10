import Story from './Story';

export default function Stories(){
    const stories=[
        {id:"01",imagem:"assets/img/9gag.svg",user:"9gag"},
        {id:"02",imagem:"assets/img/meowed.svg",user:"meowed"},
        {id:"03",imagem:"assets/img/barked.svg",user:"barked"},
        {id:"04",imagem:"assets/img/nathanwpylestrangeplanet.svg",user:"nathanwpylestrangeplanet"},
        {id:"05",imagem:"assets/img/wawawicomics.svg",user:"wawawicomics"},
        {id:"06",imagem:"assets/img/respondeai.svg",user:"respondeai"},
        {id:"07",imagem:"assets/img/filomoderna.svg",user:"filomoderna"},
        {id:"08",imagem:"assets/img/memeriagourmet.svg",user:"memeriagourmet"},
    ]

    return (
        <ul className="stories">
            {stories.map(stories=><Story 
                key={stories.id} 
                imagem1={stories.imagem} 
                user1= {stories.user}
            />)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </ul>
    ); 
}