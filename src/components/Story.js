export default function Story(){
    const stories=[
        {imagem:"assets/img/9gag.svg",user:"9gag"},
        {imagem:"assets/img/meowed.svg",user:"meowed"},
        {imagem:"assets/img/barked.svg",user:"barked"},
        {imagem:"assets/img/nathanwpylestrangeplanet.svg",user:"nathanwpylestrangeplanet"},
        {imagem:"assets/img/wawawicomics.svg",user:"wawawicomics"},
        {imagem:"assets/img/respondeai.svg",user:"respondeai"},
        {imagem:"assets/img/filomoderna.svg",user:"filomoderna"},
        {imagem:"assets/img/memeriagourmet.svg",user:"memeriagourmet"},
    ]

    return(
        <>
            {stories.map(stories=><Storiesrender imagem1={stories.imagem} user1= {stories.user}/>)}
        </>
    );
}


function Storiesrender(props){
    return(
        <li className="story">
            <div className="imagem">
                <img src={props.imagem1} alt={props.user1}/>
            </div>
            <div className="usuario">
                {props.user1}
            </div>
        </li>
    );
} 