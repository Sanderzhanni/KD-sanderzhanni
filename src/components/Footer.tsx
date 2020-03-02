import React from 'react';
import {Accordion, Card, Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {FiPlus, FiMinus} from 'react-icons/fi';
import {TiSocialFacebookCircular} from 'react-icons/ti';
import {FaInstagram, FaSoundcloud} from 'react-icons/fa';

interface Props {
    isOpen: boolean;
    activeEvent: string
}

class Footer extends React.PureComponent<{}, Props>{

    constructor(props: {}) {
        super(props);
        this.state ={
            isOpen: false,
            activeEvent: "",
        }
    }

    //Changes the icon inside the accordion header accordingly
    private HandleAccordionToggle = (name: string) =>{
        //if its already active and user collapses it
        if(this.state.activeEvent === name){
            this.setState({
                activeEvent: "none"
            });
            return
        }
        //if use click on the button and it isn't yet active
        this.setState({
            activeEvent: name
        })
    };

    public render(){
        return(
            <>
                <div className={"footer-container"}>
                    <Acc HandleAccordionToggle={this.HandleAccordionToggle} activeName={this.state.activeEvent}/>
                    <SocialMediaIcons/>
                    <Disclaimer/>
                </div>
            </>
        )
    }

}

const Disclaimer = () => (
    <div className={"footer__disclaimer"}>
        <p>
            © 2001–2020 AS LHV Group, Tartu mnt 2, 10145, Tallinn. Oled finantsteenuseid pakkuvate ettevõtete AS LHV Pank, AS LHV Finance ja AS LHV Varahaldus veebilehel. Ettevõtetel AS LHV Pank, AS LHV Finance ja AS LHV Varahaldus on õigus salvestada kõiki neile sidevahendite teel antud korraldusi ja muud suhtlust ning kasutada vastavaid salvestisi antud korralduste või muude toimingute tõendamiseks. Enne finantsteenuse lepingu sõlmimist tutvu
        </p>
    </div>
);

const SocialMediaIcons = (): React.ReactElement =>(
  <>
      <div className={"socialmedia__icons__container"}>
          <Link to={"todo"}>
              <TiSocialFacebookCircular className={"socialmedia__icons"}/>
          </Link>
          <Link to={"todo"}>
              <FaInstagram className={"socialmedia__icons"}/>
          </Link>
          <Link to={"todo"}>
              <FaSoundcloud className={"socialmedia__icons"}/>
          </Link>
      </div>
  </>
);

interface AccProps {
    HandleAccordionToggle: Function;
    activeName: string;

}

const Acc = (props: AccProps): React.ReactElement =>(
  <>
      <Accordion>
          <AccordionCard name={"TULE KLIENDIKS"}
                         eventKey={"0"}
                         HandleAccordionToggle={props.HandleAccordionToggle}
                         activeName={props.activeName}
          >
              <FooterLink path={"todo"} name={"Eraklient"}/>
              <FooterLink path={"todo"} name={"Äriklient"}/>
              <FooterLink path={"todo"} name={"Noortepank"}/>
              <FooterLink path={"todo"} name={"Privaatpangandus"}/>
              <FooterLink path={"todo"} name={"Ava konto"}/>
          </AccordionCard>
          <AccordionCard name={"LEIA KIIRELT"} eventKey={"1"} HandleAccordionToggle={props.HandleAccordionToggle} activeName={props.activeName}>
              <FooterLink path={"todo"} name={"Hinnakiri ja tingimused"}/>
              <FooterLink path={"todo"} name={"Ettepanekud ja kaebused"}/>
              <FooterLink path={"todo"} name={"Turvalisus"}/>
              <FooterLink path={"todo"} name={"Teata petulehest"}/>
              <FooterLink path={"todo"} name={"KKK"}/>
          </AccordionCard>
          <AccordionCard name={"LHV"} eventKey={"3"} HandleAccordionToggle={props.HandleAccordionToggle} activeName={props.activeName}>
              <FooterLink path={"todo"} name={"Ettevõtest"}/>
              <FooterLink path={"todo"} name={"Tööpakkumised"}/>
              <FooterLink path={"todo"} name={"Uudised"}/>
              <FooterLink path={"todo"} name={"Investor"}/>
              <FooterLink path={"todo"} name={"Finantsportaal"}/>
          </AccordionCard>
          <AccordionCard name={"KONTAKT"} eventKey={"4"} HandleAccordionToggle={props.HandleAccordionToggle} activeName={props.activeName}>
              <FooterLink path={"todo"} name={"Kontaktid"}/>
              <FooterLink path={"todo"} name={"Kontorid"}/>
              <FooterLink path={"todo"} name={"Broneeri kohtumisaeg"}/>
              <FooterLink path={"todo"} name={"Sularahaautomaadid"}/>
          </AccordionCard>
      </Accordion>
  </>
);

interface AccordionCardProps {
    children?:  React.ReactNode;
    name: string;
    eventKey: string;
    HandleAccordionToggle: any;
    activeName: string;
}

const AccordionCard = (props: AccordionCardProps) =>(
    <>
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={props.eventKey} onClick={ () => props.HandleAccordionToggle(props.name)}>
                    <h3 className={"accordion-header"}>{props.name}</h3>
                    {props.activeName === props.name ? <FiMinus className={"accordion__icon"}/>: <FiPlus className={"accordion__icon"}/>}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.eventKey}>
                <Card.Body>
                    {props.children}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </>
);

interface FooterLinkProps {
    name: string;
    path: string;
}

const FooterLink = (props: FooterLinkProps) =>(
  <>
      <li>sth</li>
      <div className={"footer__body--link"}>
          <Link to={props.path}>
              <div>
                  {props.name}
              </div>
          </Link>
      </div>
  </>
);

export default Footer

