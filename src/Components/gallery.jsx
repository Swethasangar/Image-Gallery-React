import One from "../assets/Images/Parrot.jpg";
import Two from "../assets/Images/crow.jpg";
import Three from "../assets/Images/dove.jpg";
import Four from "../assets/Images/Peacock.jpg";
import Five from "../assets/Images/Swan.jpg";
import Six from "../assets/Images/crane.jpg";
import Seven from "../assets/Images/Pigeon.jpg";
import Eight from "../assets/Images/duck.jpg";
function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <section className="container">
        <div className="box">
          <img src={One} alt="Parrot"></img>
          <p>Parrot</p>
        </div>
        <div className="box">
          <img src={Two} alt="Crow"></img>
          <p>Crow</p>
        </div>
        <div className="box">
          <img src={Three} alt="Dove"></img>
          <p>Dove</p>
        </div>
        <div className="box">
          <img src={Four} alt="Peacock"></img>
          <p>Peacock</p>
        </div>
        <div className="box">
          <img src={Five} alt="Swan"></img>
          <p>Swan</p>
        </div>
        <div className="box">
          <img src={Six} alt="Crane"></img>
          <p>Crane</p>
        </div>
        <div className="box">
          <img src={Seven} alt="Pigeon"></img>
          <p>Pigeon</p>
        </div>
        <div className="box">
          <img src={Eight} alt="Duck"></img>
          <p>Duck</p>
        </div>
      </section>
    </>
  );
}
export default Gallery;
