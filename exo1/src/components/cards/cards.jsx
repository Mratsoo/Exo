

const Cards = ({Mode, title, description, image}) => {

    return(
    <>
        <div className={`ms-5 card ${Mode ? 'bg-light' : 'bg-dark'}`}>
          <img src= {image} className="card-img-top" alt="..."/>
          <div className={`card-body ${!Mode ? 'text-light' : 'text-dark'}`}>
            <h5 className="card-title ">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Allez</a>
          </div>
        </div>
            </>
            );
    
}

export default Cards;
