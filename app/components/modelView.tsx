'use client'

import { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Torus } from "@react-three/drei"
import { Cude } from "./cude";
import { Cude2 } from "./cude2";
import { Models } from "./model";

export default function ModelView() {
  const [currentModel, setCurrentModel] = useState('Cude'); // Initial model

  const handleClick = (newModel) => {
    setCurrentModel(newModel);
  };
  return (
    <div style={{ width: "50vw", height: "50vh", margin: "auto", padding: "20px" }}>
      <button onClick={() => handleClick('Cude')}>Show Cube 1</button>
      <button onClick={() => handleClick('Cude2')}>Show Cube 2</button>
      <Canvas camera={{ position: [2, 90, 90], fov: 90 }}>
        <ambientLight intensity={2} />
        <OrbitControls />
        {currentModel === 'Cude' && <Cude />}
        {currentModel === 'Cude2' && <Cude2 />}
      </Canvas>
    </div>
  )
}