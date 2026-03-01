import { Input } from '../atoms/Input';

interface ChartControlsProps {
  onThresholdChange: (value: number) => void;
}

export const ChartControls = ({ onThresholdChange }: ChartControlsProps) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow-sm border">
      <label className="text-sm font-semibold text-gray-700">Set Sales Threshold</label>
      <Input 
        type="number" 
        placeholder="Contoh: 5000" 
        onChange={(e) => onThresholdChange(Number(e.target.value))}
      />
      <p className="text-xs text-gray-500 italic">
        Input ini digunakan untuk memantau performa di bawah target.
      </p>
    </div>
  );
};