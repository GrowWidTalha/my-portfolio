import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopy, sethasCopy] = useState(false);
  const handlCopy = () => {
    navigator.clipboard.writeText("hello@talhaali.xyz");
    sethasCopy(true);
    setTimeout(() => {
      sethasCopy(false);
    }, 3000);
  };

  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Talha</p>
              <p className="grid-subtext">
                With 1.5 years of experience, I have honed my skills in frontend
                and backend development, with focus on animated 3d websites.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with a focus on React.js
                and Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container ">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I am Based on Pakistan, with remote work available.
              </p>
              <a href="#contact">
                <Button
                  name={"Contact Me"}
                  isBeam
                  containerClass={"w-full mt-10"}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid 3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn't just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:row-span-2 md:col-span-2 xl:col-span-1 col-span-1">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handlCopy}>
                <img
                  src={hasCopy ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt=""
                />
                <p className="lg:text-2xl sm:text-xl font-medium text-gray_gradient text-white">hello@talhaali.xyz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
