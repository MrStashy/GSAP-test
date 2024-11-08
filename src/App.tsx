import "./App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";

gsap.registerPlugin(useGSAP);

function App() {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    gsap.fromTo(".myDiv", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  useGSAP(() => {
    if (animate) {
      gsap.to(".text", {
        rotation: "+=360",
        repeat: -1,
        duration: 2,
        ease: "linear",
      });

      gsap.to("button", {
        backgroundColor: "red",
      })
    } else {
      gsap.killTweensOf(".text"); 
      gsap.to("button", {
        backgroundColor: "green"
      })
    }
  }, [animate]);

  return (
    <>
      <div className="myDiv flex flex-col h-screen items-center justify-center gap-6">
        <p className="text">Let's go</p>
        <button onClick={() => setAnimate(!animate)} className="border-2 p-2">
          {animate ? "Stop" : "Start"}
        </button>
      </div>
    </>
  );
}

export default App;
