import { useEffect } from 'react';

interface CubeStylesProps {
  gridSize: number;
  cubeSize?: number;
  colGap: string;
  rowGap: string;
  borderStyle: string;
  faceColor: string;
  shadow: boolean | string;
}

export const useCubeStyles = ({
  gridSize,
  cubeSize,
  colGap,
  rowGap,
  borderStyle,
  faceColor,
  shadow,
}: CubeStylesProps) => {
  useEffect(() => {
    const root = document.documentElement;
    
    // Set CSS variables
    root.style.setProperty('--cube-grid-size', gridSize.toString());
    root.style.setProperty('--cube-cell-size', cubeSize ? `${cubeSize}px` : '1fr');
    root.style.setProperty('--cube-col-gap', colGap);
    root.style.setProperty('--cube-row-gap', rowGap);
    root.style.setProperty('--cube-border-style', borderStyle);
    root.style.setProperty('--cube-color', faceColor);
    root.style.setProperty('--cube-shadow', shadow === true ? '0 0 6px rgba(0,0,0,.5)' : shadow || 'none');
    
    if (cubeSize) {
      root.style.setProperty('--cube-total-width', `${gridSize * cubeSize}px`);
      root.style.setProperty('--cube-total-height', `${gridSize * cubeSize}px`);
    }

    // Cleanup function
    return () => {
      root.style.removeProperty('--cube-grid-size');
      root.style.removeProperty('--cube-cell-size');
      root.style.removeProperty('--cube-col-gap');
      root.style.removeProperty('--cube-row-gap');
      root.style.removeProperty('--cube-border-style');
      root.style.removeProperty('--cube-color');
      root.style.removeProperty('--cube-shadow');
      root.style.removeProperty('--cube-total-width');
      root.style.removeProperty('--cube-total-height');
    };
  }, [gridSize, cubeSize, colGap, rowGap, borderStyle, faceColor, shadow]);
};