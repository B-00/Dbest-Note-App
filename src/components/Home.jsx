import React from 'react'
import Orng from '../imgs/orng.PNG'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  return (
    <div className="nav-spacing">
      <div className="home-content">
        <div>
          <h2>Welcome To the Best Note-App</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
            dui. Lorem ipsum dolor sit amet, consectetur adipisce placerat
            mauris nisl. Proin vitae urna eu{" "}
            <span className="span-hl">sem pellentesque</span> laoreet.{" "}
          </p>
        </div>
        <div>
          <img src={Orng} alt="orange" />
        </div>
        <div>
          <button onClick={() => navigate("/notes")}>Go to Notes</button>
        </div>
      </div>
    </div>
  );
}

export default Home