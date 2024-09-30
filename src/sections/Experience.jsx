import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h1 className="head-text">My work experience</h1>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={3} />
              <spotLight angle={0.16} penumbra={1} position={[10, 10, 10]} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((exp, index) => (
                <div
                  onClick={() => setAnimationName(exp.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(exp.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName("idle")}
                  key={index}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img src={exp.icon} alt="" className="w-full h-full" />
                    </div>
                    <div className="work-content_bar" />
                  </div>
                  <div className="sm:px-5 px-2.5 py-5 ">
                    <p className="font-bold text-white-800">{exp.name}</p>
                    <p className="text-sm mb-5">
                      {exp.pos} -- {exp.duration}
                    </p>
                    <p className="group-hover:text-white transition ease-in-out duration-500">
                      {exp.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
