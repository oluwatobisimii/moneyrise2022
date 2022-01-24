import React, { useState } from "react";
import eke from "../assets/speakers/EKE.png";
import ka from "../assets/speakers/KA image.png";
import so from "../assets/speakers/SO.png";
import da from "../assets/speakers/DA.png";
import co from "../assets/speakers/CO.png";
import greencoins from "../assets/greencoins.svg";
import { HiChevronRight, HiChevronLeft, HiX } from "react-icons/hi";

type SpeakersProps = {
  firstname: string;
  lastname: string;
  image: string;
  description: string;
  clickHandler?: (e: React.MouseEvent<SVGElement>) => void;
  closeHandler?: (e: React.MouseEvent<SVGElement>) => void;
  nextHandler?: (e: React.MouseEvent<SVGElement>) => void;
  prevHandler?: (e: React.MouseEvent<SVGElement>) => void;
  index?: number;
};

type bodyScrollProps = {
  bodyScroll: ()=>void
}


const Speakers = [
  {
    firstname: "Eke",
    lastname: "Urum",
    image: eke,
    description: `Eke is a registered investment adviser and CEO of Rise, a wealth management platform that connects users to high quality dollar investments around the world managed by experts. Prior to founding Rise, Eke previously co-founded BuyCoins, a cryptocurrency exchange in Nigeria and also worked in the financial services industry providing advisory and planning services to corporate, investment banking and private equity clients.`,
  },
  {
    firstname: "Kola",
    lastname: "Aina",
    image: ka,
    description: `Kola Aina, is an entrepreneur, creative, and angel investor. He is the Founding Partner of Ventures Platform, a seed-stage fund and accelerator.

    Ventures Platform is an Africa focused fund that operates a leading startup accelerator, which offers a 16-week program, providing advisory, mentorship, back-office support, seed-funding and need based residency to selected startups.
    
    Prior to focusing on venture building, Kola worked in corporate finance, administration, corporate turn-around and strategy, having started off as a financial analyst with Fifth-Third Bank, after his MBA and initial training as an Electrical Engineer in the United States.`,
  },
  {
    firstname: "Solafunmi",
    lastname: "Sosanya",
    image: so,
    description: `Solafunmi describes herself as a 24/7 Investor.
    She's super passionate about simplifying investing for Africans. Having read over 350 books and thousands of articles on Investing and Companies, she's coached thousands to begin their investment journey and truly believes everyone has the potential to be stupendously wealthy.
    When she is not investing, she works with one of the biggest Tech Companies in the world.`,
  },
  {
    firstname: "Chukwudalu",
    lastname: "Akabogu",
    image: da,
    description: `Chukwudalu Akabogu has more than 7 years experience covering Banking, Consulting, Corporate Finance, Private Equity & Investment Banking. Throughout the course of his career, he has facilitated capital raise exercises and Investments across various industries including Energy, Fintech, Hospitality, Public Sector amongst others. He currently serves as the Vice President in charge of Energy investments at Platform Capital Investment Partners.`,
  },
  {
    firstname: "Chidinma",
    lastname: "Okoli",
    image: co,
    description: ``,
  },
];

function SpeakerOverlay(props: SpeakersProps) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-screen w-screen bg-slate-900 bg-opacity-80  font-dm-sans z-10">
      <div className="mx-auto container top-0 bottom-0 left-0 flex justify-center lg:justify-between items-center px-12 h-full">
      <HiChevronLeft
        className="hover:cursor box-content rounded-full bg-darktextHD dark:bg-profile p-3 text-xl dark:text-white hidden lg:inline-block"
        onClick={props.prevHandler}
      />
      <div className="relative flex flex-col h-5/6 lg:flex-row w-full lg:h-5/6 lg:w-5/6">
        <div className=" lg:w-2/5 w-full h-2/5 overflow-y-hidden lg:h-full rounded-t-lg lg:rounded-l-lg bg-primary2">
          <img
            src={props.image}
            alt=""
            className="object-cover object-center lg:object-top bg-primary2 lg:h-full md:w-2/3 lg:pt-5 lg:w-full mx-auto"
          />
        </div>
        <div className="bg-white dark:bg-black p-14 dark:text-darktext h-3/5 space-y-8 lg:w-3/5 lg:h-full overflow-y-auto rounded-b-lg">
          <div>
            <p className="font-bold font-dm-sans text-xl lg:text-3xl dark:text-darktext justify-self-center">
              {props.firstname}{" "}
              <span className="italic font-normal">{props.lastname}</span>
            </p>
            <p className="dark:text-speakercardtext">Speaker</p>
          </div>

          <div>
            <p className="dark:text-darktext whitespace-pre-line lg:text-18 leading-relaxed">
              {props.description}
            </p>
          </div>
        </div>
        <HiX
          className="hover:cursor box-content rounded-full bg-darktextHD dark:bg-profile p-3 text-xl dark:text-white absolute -right-3 -top-3"
          onClick={props.closeHandler}
        />
      </div>
      <HiChevronRight
        className="hover:cursor box-content rounded-full bg-darktextHD dark:bg-profile p-3 text-xl dark:text-white hidden lg:inline-block"
        onClick={props.nextHandler}
      />
      </div>
    </div>
  );
}

function SpeakerCard(props: SpeakersProps) {
  return (
    <div
      className="shadow-speaker dark:shadow-none md:w-3/12 lg:w-1/5 md:mb-6"
      data-index={props.index}
    >
      <div className="bg-primary2 h-80 lg:h-56 ">
        <img
          src={props.image}
          alt=""
          className="w-full object-cover object-top bg-primary2 h-full pt-0"
        />
      </div>
      <div className="px-6 bg-white dark:bg-speakercardtext h-32 flex items-center justify-between md:flex-col md:py-4 lg:h-40 ">
        <p className="font-bold font-dm-sans text-lg dark:text-darktext justify-self-center leading-none text-center">
          {props.firstname}{" "}
          <span className="italic font-normal">{props.lastname}</span>
        </p>
        <HiChevronRight
          className="hover:cursor box-content rounded-full bg-darktextHD dark:bg-profile p-3 text-xl dark:text-white"
          onClick={props.clickHandler}
        />
      </div>
    </div>
  );
}

function Speaker(props: bodyScrollProps) {
  const [showSpeakerDetails, setShowSpeakerDetails] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const overlayClassName = showSpeakerDetails ? "block" : "hidden"
  

  const cardClickHandler = (e: React.MouseEvent<SVGElement>) => {
    const cardIndex = (e.target as Element).parentElement?.parentElement
      ?.dataset.index;
    const selectedIndex: number = Number(cardIndex);
    setShowSpeakerDetails(true);
    setCardIndex(selectedIndex);
    props.bodyScroll()
  };

  const cardCloseHandler = (e: React.MouseEvent<SVGElement>) => {
    setShowSpeakerDetails(false);
    props.bodyScroll()
  };
  const cardNextHandler = (e: React.MouseEvent<SVGElement>) => {
    if (Speakers.length - 1 === cardIndex){
      setCardIndex(0)
    }else{
      setCardIndex(cardIndex + 1)
    }
    
  };
  const cardPrevHandler = (e: React.MouseEvent<SVGElement>) => {
    if (cardIndex === 0){
      setCardIndex(Speakers.length - 1)
    }else{setCardIndex(cardIndex - 1)}
  };

  return (
    <div className="bg-speaker dark:bg-featdark lg:py-20">
      <section className="container mx-auto p-4 lg:py-16 grid-cols-6 lg:grid md:py-12">
        <div className="lg:col-span-2">
          <p className="text-center font-tomato font-semibold text-4xl lg:text-6xl my-8 mt-8 dark:text-darktextHD lg:text-left col-span-2 lg:w-3/4">
            Featured Speakers
          </p>
          <img src={greencoins} alt="" className="hidden lg:inline" />
        </div>
        <div className="col-span-4 md:flex md:space-x-5 lg:space-y-0 space-y-7 lg:space-x-0 lg:gap-x-4 md:space-y-0 md:flex-wrap md:justify-center md:w-fit lg:justify-start">
          {Speakers.map((speaker, index) => {
            return (
              <SpeakerCard
                firstname={speaker.firstname}
                lastname={speaker.lastname}
                image={speaker.image}
                description={speaker.description}
                index={index}
                clickHandler={cardClickHandler}
                key={index}
              />
            );
          })}
        </div>
      </section>
      <img src={greencoins} alt="" className="lg:hidden" />
    
        <div className={overlayClassName}>
          <SpeakerOverlay
            firstname={Speakers[cardIndex].firstname}
            lastname={Speakers[cardIndex].lastname}
            image={Speakers[cardIndex].image}
            description={Speakers[cardIndex].description}
            closeHandler={cardCloseHandler}
            nextHandler={cardNextHandler}
            prevHandler={cardPrevHandler}
          />
        </div>
    </div>
  );
}

export default Speaker;
