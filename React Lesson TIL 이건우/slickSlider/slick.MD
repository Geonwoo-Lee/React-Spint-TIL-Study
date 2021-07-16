 <img src="TILimage.png" align="center" />

# TIL 2021 - 07 - 16 📖 !

이번에는 라이브러리를 이용한 슬라이더를 구현해 보았다 확실히 hooks만 사용한 것 보단 훨씬 쉽게 구현을했다 .
라이브러리는 Slick을 사용했고 강의를 보면서 배워 보았다 

 <img src="slick.gif" align="center" />
 가운데가 맞지 않는건 내가 동영상 캡쳐를 할때 가운대를 맞추지 않아서 이다 Slick을 사용하는 방법은 

 [slick사용법](https://github.com/Geonwoo-Lee/TIL-/blob/main/TIL/TIL20210715.MD)

이곳에 자세히 적어 놓았다 slick 라이브러리와 css를 연결해야 하는데 

```js
@import '~slick-carousel/slick/slick.css';
@import '~slick-carousel/slick/slick-theme.css';
```

많은곳에서 이렇게 나와 있지만 애러가 너무 많이 발생한다 따라서 ~ 를 없애고 

```js
@import 'slick-carousel/slick/slick.css';
@import 'slick-carousel/slick/slick-theme.css';
```

이렇게 쓰는걸 추천한다 

```js

@import 'slick-carousel/slick/slick.css';
@import 'slick-carousel/slick/slick-theme.css';

.App {
  width: 50%;
  margin: 10rem auto;
  height: 570px;
}

.slide img {
  width: 20rem;
  margin: 0 auto;

}

.slide{
  transform: scale(0.2);
  transition: transform 300ms;
  opacity: 0.5;
}

.activeSlide {
  transform: scale(1.1);
  opacity: 1;
}

.arrow{
  background-color: white;
  position: absolute;
  cursor: pointer;
  z-index: 10;
}

.arrow svg {
  transition: color 300ms;
}

.arrow svg:hover{
  color: #68edff;
}

.next {
  right: 0%;
  top: 50%;
}

.prev {
  left: 0%;
  top: 50%;
}
```
css 코드이다 

```js 
import './App.css';
import {useState} from 'react'
import Slider from 'react-slick'
import astronaut from './assets/astronaut.png'
import celebrating from './assets/celebrating.png'
import education from './assets/education.png'
import taken from './assets/taken.png'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'


const images = [astronaut, celebrating, education, taken]

function App() {

  const NextArrow = ({onClick}) => {
    return (
      <div className = 'arrow next' onClick = {onClick}> 
      <FaArrowRight/>
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return (
      <div className = 'arrow prev' onClick = {onClick}> 
      <FaArrowLeft/>
      </div>
    )
  }

  const [imageIndex, setImageIndex] = useState(0)



  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300, 
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    beforeChange: (crruent, next) => setImageIndex(next)
  };

  return (
    <div className = 'App'>
      <Slider {...settings}>
      {images.map((img, idx) => (
        <div className = {idx === imageIndex ? "slide activeSlide" : "slide"}>
          <img src={img} alt = {img}/>
        </div>
      ))}
      </Slider> 
    </div>
  );
}

export default App;

```
app.js 의 코드이다 