import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Html, useProgress, useAnimations, ScrollControls, useScroll, Scroll } from "@react-three/drei";
import * as THREE from "three";
import data from "./data.json";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Icons } from "./components/Icons";

const WAYPOINTS = [
  { position: [1.8, 0, 0], rotation: [Math.PI, Math.PI/2, 0] },
  { position: [-1.8, 0, 0], rotation: [(Math.PI/180)*-15, Math.PI / 4, (Math.PI/2)] }, 
  { position: [1.8, 0, 0], rotation: [0, Math.PI / 2, (Math.PI/180)*-15] }, 
  { position: [1.8, 0, 0], rotation: [0, Math.PI / 2, (Math.PI/180)*-15] },
  { position: [-1.8, 0, 0], rotation: [0, -Math.PI / 2, 0] },
  { position: [-1.8, 0, 0], rotation: [0, -Math.PI / 2, 0] },
  { position: [1, 0, 0], rotation: [Math.PI, -Math.PI /3, -(Math.PI/180)*5] },
];

function Loader() {
  return null;
}

function Model({ url }) {
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, scene);
  
  const modelRef = useRef();
  const scroll = useScroll(); 

  useEffect(() => {
    const action = Object.values(actions)[0];
    if (action) {
      action.reset().play();
      action.timeScale = 0.2; 
    }
  }, [actions]);

  useLayoutEffect(() => {
    const paperColor = getComputedStyle(document.documentElement).getPropertyValue('--paper-color').trim();
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.material = new THREE.MeshBasicMaterial({
          color: paperColor, 
          polygonOffset: true, 
          polygonOffsetFactor: 1, 
          polygonOffsetUnits: 1
        });

        if (!obj.getObjectByName("outline")) {
          const edges = new THREE.EdgesGeometry(obj.geometry, 40); 
          const lineMat = new THREE.LineBasicMaterial({ color: "#333333", linewidth: 2 });
          const line = new THREE.LineSegments(edges, lineMat);
          line.name = "outline"; 
          obj.add(line);
        }
      }
    });
  }, [scene]);

  useFrame(() => {
    const numSegments = WAYPOINTS.length - 1; 
    const scrollPos = scroll.offset * numSegments; 
    const currentSegment = Math.floor(scrollPos); 
    const segmentProgress = scrollPos % 1; 

    if (currentSegment < numSegments && modelRef.current) {
      const start = WAYPOINTS[currentSegment];
      const end = WAYPOINTS[currentSegment + 1];
      
      modelRef.current.position.lerpVectors(
        new THREE.Vector3(...start.position), 
        new THREE.Vector3(...end.position), 
        segmentProgress
      );

      const qStart = new THREE.Quaternion().setFromEuler(new THREE.Euler(...start.rotation));
      const qEnd = new THREE.Quaternion().setFromEuler(new THREE.Euler(...end.rotation));
      modelRef.current.quaternion.slerpQuaternions(qStart, qEnd, segmentProgress);
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1} />;
}

export default function JetViewer() {
  const [pages, setPages] = useState(7);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPages(8); // More scroll space for mobile
      } else {
        setPages(7);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw", background: "var(--paper-color)" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={1} />

        <ScrollControls pages={pages} damping={0.2}>
          <Suspense fallback={<Loader />}>
            <Model url="/turbine-01.glb" />
          </Suspense>
          
          <Scroll html style={{ width: "100%" }}>
            <Intro data={data.intro} />
            <About data={data.about} />
            <Skills data={data.skills} />
            <Experience data={data.experience} />
            <Projects data={data.projects} />
            <Education data={data.education} />
            <Contact data={data.contact} />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}