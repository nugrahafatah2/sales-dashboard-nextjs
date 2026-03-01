// src/components/atoms/Label.tsx
import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label = ({ children, ...props }: LabelProps) => (
  <label 
    className="text-sm font-semibold text-gray-700 mb-1 block" 
    {...props}
  >
    {children}
  </label>
);