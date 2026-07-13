import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatingCube from './FloatingCube';

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 5]} />
      <FloatingCube />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}
