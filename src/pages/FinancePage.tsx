import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const trendData = [
  { day: "01", value: 20 },
  { day: "05", value: 30 },
  { day: "10", value: 50 },
  { day: "15", value: 35 },
  { day: "20", value: 60 },
  { day: "25", value: 40 },
  { day: "30", value: 70 },
];

// ✅ Typage des props ici
interface TrendItemProps {
  name: string;
  change: string;
  alert: boolean;
  avatarUrl: string;
}

const TrendItem: React.FC<TrendItemProps> = ({ name, change, alert, avatarUrl }) => (
  <div className="flex items-center justify-between p-3 rounded-md hover:bg-[#2C2D32] transition-colors">
    <div className="flex items-center">
      <img src={avatarUrl} alt={name} className="w-6 h-6 rounded-full mr-3 bg-indigo-400" />
      <span className="text-sm text-white">{name}</span>
    </div>
    {alert ? (
      <div className="w-5 h-5 flex items-center justify-center bg-red-600 rounded-full text-white font-bold text-xs">!</div>
    ) : (
      <span className="text-xs font-semibold text-red-500">{change}</span>
    )}
  </div>
);

const TrendChartTile = () => (
  <div className="bg-[#1D1E22] p-5 rounded-lg shadow-md h-[320px] flex flex-col justify-between">
    <div>
      <h3 className="text-sm font-semibold text-gray-300 mb-3">Trends & prediction</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={trendData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2C2D32" />
          <XAxis dataKey="day" stroke="#555" fontSize={10} />
          <YAxis stroke="#555" fontSize={10} />
          <Tooltip contentStyle={{ backgroundColor: "#1D1E22", border: "1px solid #2C2D32" }} />
          <Line type="monotone" dataKey="value" stroke="#00BFFF" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <p className="text-sm font-semibold text-gray-300 mt-2">
      Trends & prediction <span className="text-green-500">+17%</span>
    </p>
  </div>
);

const TrendListTile = () => (
  <div className="bg-[#1D1E22] p-5 rounded-lg shadow-md">
    <h3 className="text-sm font-semibold text-gray-300 mb-3">Trends & prediction</h3>
    <div className="space-y-2">
      <TrendItem name="Sarah K." change="+78%" alert={false} avatarUrl="https://placehold.co/24x24/9F7AEA/ffffff?text=SK" />
      <TrendItem name="Sarah K." change="" alert={true} avatarUrl="https://placehold.co/24x24/9F7AEA/ffffff?text=SK" />
      <TrendItem name="Sarah K." change="+78%" alert={false} avatarUrl="https://placehold.co/24x24/9F7AEA/ffffff?text=SK" />
    </div>
  </div>
);

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={`relative inline-flex h-4 w-8 items-center rounded-full transition-all ${
        isOn ? "bg-indigo-500" : "bg-gray-600"
      }`}
    >
      <span
        className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
          isOn ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </button>
  );
};

const CommissionStructureTile = () => (
  <div className="bg-[#1D1E22] p-5 rounded-lg h-[320px] shadow-md">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold text-white">Payment</h2>
      <button className="bg-[#48484E] text-white text-xs font-bold py-2 px-4 rounded-md uppercase hover:bg-[#5C5C63] transition-colors">
        Valide
      </button>
    </div>

    <h3 className="text-sm font-bold text-gray-300 mb-3 uppercase">Commission Structure</h3>
    <div className="space-y-4 mb-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="w-3 h-3 border-2 border-gray-500 rounded-full mr-3"></span>
          <span className="text-sm text-white">Revenu</span>
        </div>
        <ToggleSwitch />
      </div>
      <div className="flex items-center">
        <span className="w-3 h-3 border-2 border-white bg-white rounded-full mr-3"></span>
        <span className="text-sm text-white">Description</span>
      </div>
    </div>

    <div className="flex justify-between text-xs text-gray-400 pt-3 border-t border-[#2C2D32]">
      <div>
        <p>Plateforme</p>
        <p className="mt-1">18%</p>
        <p>Premium</p>
      </div>
      <div className="text-right">
        <p>Plateforme</p>
        <div className="flex space-x-2 mt-1 justify-end text-2xl">
          <span>💳</span>
          <span>🅿️</span>
          <span>₿</span>
        </div>
      </div>
    </div>
  </div>
);

const BalanceTableTile = () => (
  <div className="bg-[#1D1E22] p-5 h-[230px] rounded-lg shadow-md">
    <h3 className="text-sm font-bold text-gray-300 mb-3 uppercase">Commission Structure</h3>
    <div className="flex justify-between items-center mb-5">
      <div>
        <p className="text-xs text-gray-400 uppercase">Current balance</p>
        <p className="text-2xl font-bold text-white mt-1">$1508.75</p>
      </div>
      <button className="bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
        Payant
      </button>
    </div>

    <div className="overflow-x-auto text-xs">
      <table className="min-w-full">
        <thead className="text-gray-500 uppercase border-b border-[#2C2D32]">
          <tr>
            <th className="py-2 pr-4 text-left">Invoice ID</th>
            <th className="py-2 pr-4 text-left">Amount</th>
            <th className="py-2 pr-4 text-left">Date</th>
            <th className="py-2 pr-4 text-left">Premium</th>
            <th className="py-2 pr-4 text-left">Note</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-white">
            <td className="py-2 pr-4">INV 2023 -007</td>
            <td className="py-2 pr-4">$2.1000</td>
            <td className="py-2 pr-4 text-gray-400">Paid</td>
            <td className="py-2 pr-4 text-gray-400">Payant</td>
            <td className="py-2 pr-4">
              <span className="bg-green-700/30 text-green-400 px-2 py-0.5 rounded-md font-medium">
                Paid
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default function FinancePage() {
  return (
    <div className="min-h-screen bg-[#121317] text-white font-sans">
      <header className="sticky top-0 z-20 bg-[#121317]/90 backdrop-blur-md p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">AI INSHITS & FINANCE</h1>
        <div className="flex space-x-3">
          <button className="text-sm font-semibold py-2 px-4 rounded-md border border-gray-600 hover:bg-[#2C2D32]">
            New invoice
          </button>
          <button className="text-sm font-semibold py-2 px-4 rounded-md bg-white text-black hover:bg-gray-200">
            Download
          </button>
        </div>
      </header>

      <main className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-6">
          <TrendChartTile />
          <TrendListTile />
        </div>
        <div className="flex flex-col space-y-6">
          <CommissionStructureTile />
          <BalanceTableTile />
        </div>
      </main>
    </div>
  );
}
