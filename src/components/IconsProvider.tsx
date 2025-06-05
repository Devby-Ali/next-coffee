'use client';

import { useEffect } from 'react';

export default function IconsProvider() {
  useEffect(() => {
    // Load the SVG sprite
    const loadSprite = async () => {
      try {
        const response = await fetch('/icons.svg');
        const svgText = await response.text();
        const div = document.createElement('div');
        div.innerHTML = svgText;
        document.body.insertBefore(div, document.body.firstChild);
      } catch (error) {
        console.error('Error loading SVG sprite:', error);
      }
    };

    loadSprite();
  }, []);

  return null;
}
