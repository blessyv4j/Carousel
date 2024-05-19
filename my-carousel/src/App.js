import './App.css';
import Carousel from './Components/MyCarousel/carousel';
import image1 from './Components/MyCarousel/assets/image1.jpg';
import image2 from './Components/MyCarousel/assets/image2.jpg';
import image3 from './Components/MyCarousel/assets/image3.jpg';
import image4 from './Components/MyCarousel/assets/image4.png';
import image5 from './Components/MyCarousel/assets/image5.png';
import image6 from './Components/MyCarousel/assets/image6.jpg';
import login1 from './Components/MyCarousel/assets/login1.avif';
import login2 from './Components/MyCarousel/assets/login2.jpg';
import login3 from './Components/MyCarousel/assets/login3.jpg';
import login4 from './Components/MyCarousel/assets/login4.jpg';
import login5 from './Components/MyCarousel/assets/login5.jpg';
import login6 from './Components/MyCarousel/assets/login6.jpg';

import Login from './Components/Login/login';

function App() {

  const x = document.cookie;
  return (
    <div>
      <Login />
      <Carousel infinite timer={5000}>
        <img src={x ? login1 : image1} alt="web development" />
        <img src={x ? login2 : image2} alt="HTML" />
        <img src={x ? login3 : image3} alt="CSS" />
        <img src={x ? login4 : image4} alt="JS" />
        <img src={x ? login5 : image5} alt="React" />
        <img src={x ? login6 : image6} alt="Champion" />
      </Carousel>
    </div>
  );
}

export default App;
