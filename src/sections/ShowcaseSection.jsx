import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <>
     <section id="travail" className="mt-12">
      <TitleHeader
        title="Mes projets"
        sub="🧑‍💻"
      />
      <div ref={sectionRef} className="app-showcase">
        <div className="w-full">
          <div className="showcaselayout">

            <div ref={rydeRef} className="first-project-wrapper">
              <h1 className="m-2 text-xl">Agrume 1</h1>
              <div className="image-wrapper">
              <a href="https://www.agrume.fr/">
                <img src="/images/agrumeFond.png" alt="Agrume RH"/>
              </a>
              </div>
              <div className="text-content">
                <h2>
                  Solution numérique compléte de gestion de ressources humaines
                </h2>
                <p className="text-white-50 md:text-xl">
                  Une application en Joomla, PHP et Javascript, une stack très formatrice et complexe à maintenir
                </p>
              </div>
            </div>

            <div ref={rydeRef} className="first-project-wrapper">
            <h1 className="m-2 text-xl">Agrume 2</h1>
              <div className="image-wrapper">
              <a href="https://www.agrume.fr/">
                <img src="/images/cafeOnprogress.jpg" alt="Agrume RH 2"/>
              </a>
              </div>
              <div className="text-content">
                <h2>
                  Work in progress
                </h2>
                <p className="text-white-50 md:text-xl">
                  Version 2 de l'application, une refonte complète de l'application avec une stack moderne (React, NodeJS, Express, MongoDB), visuel à venir
                </p>
              </div>
            </div>

            <div ref={rydeRef} className="first-project-wrapper">
            <h1 className="m-2 text-xl">Kasa</h1>
              <div className="image-wrapper">
              <a href="https://github.com/TedPasquiet/OC_N7_Kasa.git">
                <img src="/images/kasa.jpg" alt="Kasa Open Classrooms"/>
              </a>
              </div>
              <div className="text-content">
                <h2>
                  Projet Open Classrooms (formation)
                </h2>
                <p className="text-white-50 md:text-xl">
                  Création d'un frontend d'application de location d'appartements REACT
                </p>
              </div>
            </div>


            <div className="project-list-wrapper overflow-hidden">
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default AppShowcase;
