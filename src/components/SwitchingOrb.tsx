'use client'
import React, { useState, useEffect } from 'react';
import Orb from './Orb';

function SwitchingOrb() {
    const colors = ["error", "primary", "loading", "success", "recording"] as const;
    const languages = ["English", "عربي", "Español", "中文", "Other langs"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 2000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);


  return <Orb color={colors[currentIndex]}>   {languages[currentIndex]}</Orb>;
}

export default SwitchingOrb;