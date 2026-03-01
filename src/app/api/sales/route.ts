import { NextResponse } from 'next/server';

export async function GET() {
  // Simulasi data dari database atau external API
  const data = [
    { month: "Jan", sales: 6100, year: 2024 },
    { month: "Feb", sales: 5500, year: 2024 },
    { month: "Mar", sales: 7200, year: 2024 },
    { month: "Apr", sales: 6800, year: 2024 },
    { month: "May", sales: 8500, year: 2024 },
    { month: "Jun", sales: 7800, year: 2024 },
    // ... data lainnya
  ];
  return NextResponse.json(data);
}