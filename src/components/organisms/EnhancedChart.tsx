'use client';
import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip,Legend,CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';

export const EnhancedChart = ({ data, threshold }: { data: any[], threshold: number }) => {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');

  return (
    <div className="space-y-4 bg-white p-6 rounded-xl border">
      <div className="flex gap-2">
        {['bar', 'line', 'pie'].map((t) => (
          <button 
            key={t}
            onClick={() => setChartType(t as any)}
            className={`px-4 py-2 rounded-lg capitalize ${chartType === t ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'bar' ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* Threshold di Bar Chart */}
              <ReferenceLine y={threshold} stroke="red" strokeDasharray="3 3" label={{ value: 'Goal', position: 'right', fill: 'red' }} />
              <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : chartType === 'line' ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* Threshold di Line Chart */}
              <ReferenceLine y={threshold} stroke="red" strokeDasharray="3 3" label={{ value: 'Goal', position: 'right', fill: 'red' }} />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6 }} />
            </LineChart>
          ) : (
            <PieChart>
              <Pie 
                data={data} 
                dataKey="sales" 
                nameKey="month" 
                cx="50%" 
                cy="50%" 
                outerRadius={120} 
                label
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    // Warna berubah menjadi Merah jika sales di bawah threshold
                    fill={entry.sales < threshold ? '#ef4444' : '#3b82f6'} 
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};