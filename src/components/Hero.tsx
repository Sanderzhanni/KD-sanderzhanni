import React from 'react';
import Carousel from "react-bootstrap/Carousel";

class Hero extends React.PureComponent{
  render(): React.ReactElement{
    return(
      <>
        <CarouselComp/>
      </>
    );
  }
}


const CarouselComp = (): React.ReactElement =>(
  <>
    <Carousel controls={false} className={"carousel__comp"}>
      <Carousel.Item>
        {/*image from the public/img directory*/}
        <img
          className="d-block w-100 --carousel__img"
          src={'https://www.lhv.ee/assets/images/headers/palkyle-m.svg?v=1583498979'}
          alt="slide"
        />
        <Carousel.Caption className={"carousel__caption"}>
          <h3 className={"caption__title"}>Võida topeltpalk</h3>
          <p>Too oma palk LHV-sse ja osale </p>
          <p>Loe lähemalt</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 --carousel__img"
          src={"https://www.lhv.ee/assets/images/headers/mobile/vaartpaberikonto-m.svg"}
          alt="slide"
        />
        <Carousel.Caption className={"carousel__caption"}>
          <h3 className={"caption__title"}>Title2</h3>
          <p>In hac habitasse platea dictumst. Vestibulum elementum nibh tortor. In vel fringilla enim, at elementum sapien.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 --carousel__img"
          src={"https://www.lhv.ee/assets/images/headers/pension-m-et.svg?v=1583498979"}
          alt="slide"
        />
        <Carousel.Caption className={"carousel__caption --color__black --position__low"}>
          <li className={"caption__li"}>ajalooliselt kõrge pikaajaline tootlus</li>
          <li className={"caption__li"}>investeerime ka sinna, kuhu sa ise ei saa</li>
          <li className={"caption__li"}>aitad kaasa Eesti majanduskasv</li>
          <p className={"caption__redir"}>Loe lähemalt</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
);

export default Hero;