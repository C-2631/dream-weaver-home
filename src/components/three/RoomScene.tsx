import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Float, Html } from "@react-three/drei";
import { Suspense } from "react";

const Room = () => (
  <group>
    {/* Floor */}
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
      <planeGeometry args={[12, 12]} />
      <meshStandardMaterial color="#3a2e23" roughness={0.85} />
    </mesh>
    {/* Back wall */}
    <mesh position={[0, 1.5, -5]} receiveShadow>
      <planeGeometry args={[12, 6]} />
      <meshStandardMaterial color="#1a1714" roughness={0.9} />
    </mesh>
    {/* Side walls */}
    <mesh position={[-6, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
      <planeGeometry args={[10, 6]} />
      <meshStandardMaterial color="#221d18" roughness={0.9} />
    </mesh>
    <mesh position={[6, 1.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
      <planeGeometry args={[10, 6]} />
      <meshStandardMaterial color="#221d18" roughness={0.9} />
    </mesh>

    {/* Sofa */}
    <mesh position={[-1.5, -0.4, -3]} castShadow>
      <boxGeometry args={[3.4, 1, 1.4]} />
      <meshStandardMaterial color="#5d6b5a" roughness={0.7} />
    </mesh>
    <mesh position={[-1.5, 0.2, -3.4]} castShadow>
      <boxGeometry args={[3.4, 1.2, 0.5]} />
      <meshStandardMaterial color="#5d6b5a" roughness={0.7} />
    </mesh>

    {/* Coffee table */}
    <mesh position={[-1.5, -0.65, -1.5]} castShadow>
      <boxGeometry args={[2, 0.1, 1]} />
      <meshStandardMaterial color="#2c2118" metalness={0.3} roughness={0.4} />
    </mesh>

    {/* Pendant light */}
    <Float speed={1} rotationIntensity={0} floatIntensity={0.2}>
      <mesh position={[-1.5, 2.6, -2]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial emissive="#D4A853" emissiveIntensity={2} color="#D4A853" />
      </mesh>
    </Float>
    <pointLight position={[-1.5, 2.4, -2]} intensity={3} color="#D4A853" distance={8} />

    {/* Plant */}
    <mesh position={[3.5, -0.3, -3]} castShadow>
      <cylinderGeometry args={[0.4, 0.5, 0.6]} />
      <meshStandardMaterial color="#3a2e23" />
    </mesh>
    <mesh position={[3.5, 0.6, -3]}>
      <sphereGeometry args={[0.7, 16, 16]} />
      <meshStandardMaterial color="#5d7c4a" roughness={0.9} />
    </mesh>

    {/* Label */}
    <Html position={[-1.5, 1.6, -3]} center distanceFactor={10}>
      <div className="glass-strong text-xs px-2 py-1 rounded-md whitespace-nowrap text-primary">
        Living Room · 42 m²
      </div>
    </Html>
  </group>
);

const RoomScene = () => (
  <div className="w-full h-full rounded-2xl overflow-hidden glass">
    <Canvas shadows camera={{ position: [4, 2, 4], fov: 55 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 8, 5]} intensity={0.6} castShadow color="#f0c97a" />
        <Room />
        <Environment preset="apartment" />
        <OrbitControls
          enablePan={false}
          minDistance={3}
          maxDistance={9}
          maxPolarAngle={Math.PI / 2.05}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  </div>
);

export default RoomScene;
