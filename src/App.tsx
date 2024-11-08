import './App.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useState } from 'react';

gsap.registerPlugin(useGSAP);


function App() {
  const [animate, setAnimate] = useState<boolean>(false)

  useGSAP(() => {
    gsap.to(".text", { rotation: 360, repeat: -1, duration: 5, ease: "linear" })
  }, [animate])

  return (
    <>
    <div className="flex flex-col h-screen items-center justify-center gap-6">
    <p className="text">Let's go</p>
    <button onClick={() => setAnimate(!animate)} className="border-2 p-2">{animate ? "Stop" : "Start"}</button>
    </div>
    </>
  )
}

export default App
