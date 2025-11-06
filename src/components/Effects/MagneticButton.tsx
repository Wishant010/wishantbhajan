import React, { ReactNode } from 'react';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseMove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  magneticStrength?: number;
  disabled?: boolean;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  style = {},
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  magneticStrength = 0.3,
  disabled = false
}) => {
  const magneticRef = useMagneticEffect<HTMLButtonElement>({
    strength: magneticStrength,
    ease: 'power3.out',
    duration: 0.3
  });

  return (
    <button
      ref={magneticRef}
      className={className}
      style={{
        ...style,
        willChange: 'transform'
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
