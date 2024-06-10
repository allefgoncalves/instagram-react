export default function User(){
    return(
        <div className="usuario">
            <img onClick={teste} src="assets/img/catanacomics.svg" alt="imagem de perfil"/>
            <div className="texto">
              <span>
                <strong>catanacomics</strong>
                <ion-icon onClick={teste} name="pencil"></ion-icon>
              </span>
            </div>
        </div>
    );
}

function teste(){
    console.log("teste usuario");
}