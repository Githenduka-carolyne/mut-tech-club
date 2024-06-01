const Trackspart = ({ image, coursename, description }) => {
  return (
  
      <div className="card1">
        <div className="wrapper">
            <div className="trackss-image">
              <img className= "img2"src={image}></img>
            </div>
            <div className="trackss-details">
              <h2>{coursename}</h2>
              <p>{description}</p>
            </div>
            <div className="tracks-button">
              <button className="btn">Enroll</button>  
            </div>    
        </div>  
      </div>  



    
    
  );
};
export default Trackspart;
