

import React, { useRef, useEffect } from 'react';
import Section from './Section';
import { CLIENTS } from '../constants';

const Marquee: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const stateRef = useRef({
    x: 0,
    speed: 0.8,
    isDragging: false,
    isHovering: false,
    startX: 0,
    startOffset: 0,
  });

  const marqueeContent = [...CLIENTS, ...CLIENTS]; // Duplicate for seamless loop

  useEffect(() => {
    const animate = () => {
      const state = stateRef.current;
      if (!state.isDragging && !state.isHovering && trackRef.current) {
        state.x -= state.speed;
        const trackWidth = trackRef.current.scrollWidth / 2;
        if (Math.abs(state.x) >= trackWidth) {
          state.x = 0;
        }
        trackRef.current.style.transform = `translateX(${state.x}px)`;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = stateRef.current;
    state.isDragging = true;
    state.startX = e.clientX;
    state.startOffset = state.x;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const state = stateRef.current;
    if (!state.isDragging) return;
    const delta = e.clientX - state.startX;
    state.x = state.startOffset + delta;
    if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${state.x}px)`;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    stateRef.current.isDragging = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };
  
  return (
    <div 
      className="relative w-full overflow-hidden mt-6 cursor-grab active:cursor-grabbing"
      onMouseEnter={() => stateRef.current.isHovering = true}
      onMouseLeave={() => stateRef.current.isHovering = false}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div ref={trackRef} className="flex">
        {marqueeContent.map((client, index) => (
          <div key={`${client.id}-${index}`} className="flex-shrink-0 w-48 mx-6 flex items-center justify-center h-30">
            <img 
              loading="lazy" 
              src={client.logoUrl} 
              alt={client.name} 
              className="max-h-24 w-auto object-contain hover:opacity-80 transition-opacity duration-300 pointer-events-none dark:drop-shadow-[0px_1px_1px_rgba(255,255,255,1.5)]"
            />
          </div>
        ))}
      </div>
      {/* The fade-out effect for the edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-100 to-transparent dark:from-slate-800 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-100 to-transparent dark:from-slate-800 pointer-events-none"></div>
    </div>
  );
};

const Clients: React.FC = () => {
  return (
    <Section 
      id="clients" 
      className="bg-gray-100 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-700"
    >
      <div className="flex items-center justify-between" data-reveal-item>
        <h2 className="text-3xl font-bold">Clients</h2>
        <p className="text-gray-500 dark:text-gray-400 hidden sm:block">Selected partners & collaborators</p>
      </div>
      <div data-reveal-item>
        <Marquee />
      </div>
    </Section>
  );
};

export default Clients;