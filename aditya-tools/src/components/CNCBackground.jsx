import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CNCBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mount.appendChild(renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // CNC Tool
        const toolGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2, 32);
        const toolMaterial = new THREE.MeshStandardMaterial({
            color: 0xffd700,
            metalness: 0.8,
            roughness: 0.2,
        });
        const tool = new THREE.Mesh(toolGeometry, toolMaterial);
        scene.add(tool);

        const tipGeometry = new THREE.ConeGeometry(0.2, 0.4, 32);
        const tipMaterial = new THREE.MeshStandardMaterial({
            color: 0xffa500,
            metalness: 0.8,
            roughness: 0.2,
        });
        const tip = new THREE.Mesh(tipGeometry, tipMaterial);
        tip.position.y = 1.2;
        scene.add(tip);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;

        // Animate
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            mount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} />;
};

export default CNCBackground;
