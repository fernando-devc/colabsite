'use client'
import React,{useState,useEffect} from 'react';

const Star = ({ size }: any) => {
    const [animate,setAnimate] = useState(false)
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
    const randomDelay = Math.floor(Math.random() * 1000);

    useEffect(() => {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        setPosition({ x: randomX, y: randomY });
        setTimeout(() => {
            setAnimate(true);
          }, randomDelay);
    }, []);
    return (
        <div
            className={(`w-${size} h-${size}  ${animate ? 'animate-ping' : ' animate-pulse '} `) + ' bg-white rounded-full absolute  '}
            style={{ left: position.x, top: position.y }}
        />
    );
};

export default Star;