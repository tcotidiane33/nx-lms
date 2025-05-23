import React from 'react';

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Card({ children, style }: CardProps) {
  return (
    <div
      style={{
        borderRadius: 8,
        boxShadow: '0 2px 8px #0001',
        background: '#fff',
        padding: 16,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
