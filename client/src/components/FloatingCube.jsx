import { Float } from '@react-three/drei';

export default function FloatingCube() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#00f5ff" metalness={1} roughness={0.1} />
      </mesh>
    </Float>
  );
}
