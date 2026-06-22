import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// A rotating wireframe "chip" with glowing via-nodes — the hero's 3D centerpiece.
// Pure vanilla three.js (no react-three-fiber) so it has zero extra dependencies.
export default function CircuitRig() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const tiltGroup = new THREE.Group(); // responds to mouse parallax
    const group = new THREE.Group(); // continuous auto-rotation
    scene.add(tiltGroup);
    tiltGroup.add(group);

    // Core wireframe icosahedron — the "chip"
    const coreGeo = new THREE.IcosahedronGeometry(1.7, 1);
    const coreEdges = new THREE.EdgesGeometry(coreGeo);
    const coreMat = new THREE.LineBasicMaterial({ color: 0xc26a33, transparent: true, opacity: 0.85 });
    const core = new THREE.LineSegments(coreEdges, coreMat);
    group.add(core);

    // Outer faint shell, slower, larger
    const shellGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const shellEdges = new THREE.EdgesGeometry(shellGeo);
    const shellMat = new THREE.LineBasicMaterial({ color: 0xc26a33, transparent: true, opacity: 0.18 });
    const shell = new THREE.LineSegments(shellEdges, shellMat);
    group.add(shell);

    // Glowing "via" nodes at core vertices
    const posAttr = coreGeo.attributes.position;
    const seen = new Set();
    const nodeGeo = new THREE.SphereGeometry(0.045, 10, 10);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x2f8f5b });
    for (let i = 0; i < posAttr.count; i++) {
      const key = `${posAttr.getX(i).toFixed(2)},${posAttr.getY(i).toFixed(2)},${posAttr.getZ(i).toFixed(2)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
      group.add(node);
    }

    let frame;
    const mouse = { x: 0, y: 0 };
    const onMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    const clock = new THREE.Clock();
    const animate = () => {
      const dt = clock.getDelta();
      group.rotation.y += dt * 0.18;
      group.rotation.x += dt * 0.06;
      shell.rotation.y -= dt * 0.05;

      tiltGroup.rotation.x += (mouse.y * 0.22 - tiltGroup.rotation.x) * 0.04;
      tiltGroup.rotation.y += (mouse.x * 0.22 - tiltGroup.rotation.y) * 0.04;

      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      coreGeo.dispose();
      coreEdges.dispose();
      coreMat.dispose();
      shellGeo.dispose();
      shellEdges.dispose();
      shellMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="hero-canvas" />;
}
