"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            className="absolute inset-0 z-0"
            options={{
                background: {
                    color: { value: "#020617" },
                },
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 40, // LOW
                    },
                    color: {
                        value: "#22c55e", // subtle green
                    },
                    links: {
                        enable: true,
                        color: "#22c55e",
                        distance: 140,
                        opacity: 0.15, // VERY subtle
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 0.3, // SLOW = premium feel
                    },
                    opacity: {
                        value: 0.2,
                    },
                    size: {
                        value: 2,
                    },
                },
                detectRetina: true,
            }}
        />
    );
}