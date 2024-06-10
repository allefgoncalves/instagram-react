export default function Story(props){
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
