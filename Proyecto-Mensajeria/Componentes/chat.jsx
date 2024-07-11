import React from "react";
import "./estilos-chat.css";


const Chat = ({data}) => {
    
return (
    <div className="contenedor">
        {data.map(({id, author, content, date, state}) => (
            <div className={author == "yo" ? "mensaje-derecha"  : "mensaje-izquierda"}
            key={id}
            >
                <div className="contenedor-chat">
                    <div className="header"> {author}</div>
                    <div className="mensaje">{content}</div>
                    <div className="footer">
                    <span className={state == "visto" ? "bi bi-check-all" : "bi bi-check" }>
                    </span>{date}  
                </div>
            </div>
            </div>
        ))
        }
    </div>
)
}

export default Chat