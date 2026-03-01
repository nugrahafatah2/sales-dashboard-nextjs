'use client';

import { useState, useEffect } from 'react';
import { EnhancedChart } from '@/components/organisms/EnhancedChart';
import { ThresholdInput } from '@/components/molecules/ThresholdInput';

export default function DashboardPage() {
  const [salesData, setSalesData] = useState([]);
  const [threshold, setThreshold] = useState(5000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Memanggil API yang baru saja kamu buat
    async function fetchData() {
      try {
        const response = await fetch('/api/sales');
        const data = await response.json();
        setSalesData(data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">Sales Dashboard 2024</h1>
      
      {/* Input untuk mengatur threshold secara dinamis */}
      <ThresholdInput value={threshold} onChange={setThreshold} />

      {/* Tampilkan loading jika data belum siap */}
      {loading ? (
        <div className="h-[400px] flex items-center justify-center bg-white rounded-xl border">
          <p className="animate-pulse">Loading data dari API...</p>
        </div>
      ) : (
        // Kirim data dari API ke komponen Chart via props
        <EnhancedChart data={salesData} threshold={threshold} />
      )}
    </div>
  );
}