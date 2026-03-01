# 📊 Professional Sales Dashboard - Next.js 15

This project is an interactive Sales Dashboard built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. The project architecture follows **Atomic Design** principles to ensure reusable, scalable, and maintainable frontend components.

## 🚀 Key Features

- **Multiple Chart Types**: Support for **Bar**, **Line**, and **Pie** charts using the `recharts` library.
- **Dynamic API Integration**: Fetches real-time sales data asynchronously via Next.js Route Handlers (`/api/sales`).
- **Custom Sales Threshold**: An interactive filter allowing users to set a sales goal (threshold) with a dynamic reference line on the charts.
- **Atomic Design Architecture**: Components are strictly divided into Atoms, Molecules, and Organisms for better modularity.
- **Next.js 15 Optimizations**: Uses the latest App Router features and handles Client-Side Rendering (CSR) for visualization components to prevent hydration errors.

## 🛠️ Project Architecture (Atomic Design)

The project is organized into the following layers:
- **Atoms**: Smallest functional units (e.g., `Input.tsx`, `Label.tsx`).
- **Molecules**: Groups of atoms working together (e.g., `ThresholdInput.tsx`).
- **Organisms**: Complex, self-contained UI sections (e.g., `SalesChart.tsx` which includes the chart logic and type switcher).
- **API Layer**: Backend route handlers providing mock data in a real-world API format.

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Visualization**: Recharts
- **State Management**: React Hooks (`useState`, `useEffect`)

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/USERNAME/REPO_NAME.git](https://github.com/USERNAME/REPO_NAME.git)
   cd REPO_NAME