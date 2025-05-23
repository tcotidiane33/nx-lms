import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export default function Button({ variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      {...props}
      style={{
        padding: '10px 20px',
        borderRadius: 4,
        border: 'none',
        background: variant === 'primary' ? '#0070f3' : '#eee',
        color: variant === 'primary' ? '#fff' : '#333',
        cursor: 'pointer',
        ...props.style,
      }}
    />
  );
}
