import React from 'react';
import Carousel from "react-bootstrap/Carousel";

class Hero extends React.PureComponent{
  render(): React.ReactElement{
    return(
      <>
        <div className={"carousel-desktop"}>
          <CarouselCompDesktop/>
        </div>
        <div className={"mobile"}>
          <CarouselComp/>
        </div>
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
          <h3 className={"caption__title"}>Investeerimine = LHV</h3>
          <p>Balti aktsiatega kauplemine ja hoidmine LHV-s nüüd täiesti tasuta</p>
          <p>Loe lähemalt</p>
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

const CarouselCompDesktop = (): React.ReactElement => {
  return(
    <>
      <Carousel controls={false} className={"carousel__comp"}>
        <Carousel.Item>
          {/*image from the public/img directory*/}
          <img
            className="d-block w-100 --carousel__img back"
            src={'https://www.lhv.ee/assets/images/headers/palkyle-fg.svg'}
            alt="slide"
          />
          <Carousel.Caption className={"carousel__caption"}>
            <h2 className={"caption__title lightCapt"}>Võida topeltpalk!</h2>
            <p className={"light"}>Too oma palk LHV-sse ja osale 5. mail topeltpalga loosimises.</p>
            <p className={"light"}>Aprillis võitis lisapalga Rasmus Pertel</p>
            <p className={"light"}>Palju õnne</p>
            <a href={"TODO"} className={"lightCapt"}>Loe lähemalt</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 --carousel__img"
            src={"https://www.lhv.ee/assets/images/headers/ariklient-bg.svg"}
            alt="slide"
          />
          <Carousel.Caption className={"carousel__caption"}>
            <h2 className={"caption__title"}>Tee pangatoiminguid</h2>
            <p>kodust lahkumata </p>
            <a href={"TODO"}>Eriolukorraga seotud info</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Hero;