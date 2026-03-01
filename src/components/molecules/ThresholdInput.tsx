'use client';
import { useState, useEffect } from 'react'; // Tambahkan useEffect
import { Label } from '../atoms/Label';
import { Input } from '../atoms/Input';

interface ThresholdInputProps {
  value: number;
  onChange: (val: number) => void;
}

export const ThresholdInput = ({ value, onChange }: ThresholdInputProps) => {
  // 1. Tambahkan state untuk mount
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val === '' ? 0 : Number(val));
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <Label htmlFor="sales-threshold">Sales Threshold (Target)</Label>
      <Input 
        id="sales-threshold"
        type="number" 
        value={value === 0 ? '' : value}
        onChange={handleChange}
        placeholder="Set target..."
      />
      <p className="text-xs text-gray-500">
      Target line will appear at: 
        <span className="font-bold ml-1">
          {/* 2. Gunakan pengecekan mounted dan tentukan locale */}
          {mounted ? value.toLocaleString('id-ID') : value}
        </span>
      </p>
    </div>
  );
};