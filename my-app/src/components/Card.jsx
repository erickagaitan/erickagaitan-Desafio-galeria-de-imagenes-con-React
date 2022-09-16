const Card = ({contenido})=> {
return (
<div class="card">
    <img src={contenido.img} class="card-img-top" alt={contenido.titulo}/>
        <div class="card-body">
            <h5 class="card-title">{contenido.titulo}</h5>
            <p class="card-text">{contenido.desc}</p>
        </div>
</div>

)
}

export default Card