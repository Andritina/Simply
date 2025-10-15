import React, { useState } from "react";
import { Calendar, Search } from "lucide-react";

// Définition de l'interface pour les données
interface DataItem {
  id: number;
  name: string;
  manager: string;
  total: string;
  mediaPush: string;
  mediaPrive: string;
  tips: string;
  heures: string;
}

const initialData: DataItem[] = [
  {
    id: 1,
    name: "John Doe",
    manager: "Jane Smith",
    total: "60.81 $",
    mediaPush: "35.16$",
    mediaPrive: "00.0$",
    tips: "25.65$",
    heures: "30h0min",
  },
  {
    id: 2,
    name: "Alice Johnson",
    manager: "Jane Smith",
    total: "95.50 $",
    mediaPush: "70.00$",
    mediaPrive: "15.50$",
    tips: "10.00$",
    heures: "45h30min",
  },
  {
    id: 3,
    name: "Robert Brown",
    manager: "Jane Smith",
    total: "32.10 $",
    mediaPush: "10.00$",
    mediaPrive: "12.10$",
    tips: "10.00$",
    heures: "20h0min",
  },
];

const Analyse: React.FC = () => {
  const [data, setData] = useState<DataItem[]>(initialData);
  const [selectedDateRange, setSelectedDateRange] = useState("1er Sep - 30 Sep 2024");

  return (
    <div className="bg-[#111827] text-gray-200 p-4 sm:p-6 rounded-xl min-h-screen font-sans">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">Analyse des Employés</h1>

      {/* Header avec recherche et date (Responsive) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        {/* Champ de recherche */}
        <div className="relative w-full md:w-1/3 order-2 md:order-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Rechercher par employé ou manager..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#1f2937] text-gray-200 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
        </div>

        {/* Sélecteur de date (s'assure de ne pas rétrécir) */}
        <div className="flex items-center gap-2 bg-[#1f2937] px-4 py-2 rounded-xl text-sm border border-gray-700 hover:bg-[#283241] transition duration-150 cursor-pointer order-1 md:order-2 flex-shrink-0">
          <Calendar size={18} className="text-blue-400" />
          <span className="font-medium text-gray-300 whitespace-nowrap">{selectedDateRange}</span>
        </div>
      </div>

      {/* Tableau (Responsiveness gérée par overflow-x-auto) */}
      <div className="overflow-x-auto bg-[#1f2937] rounded-xl shadow-2xl border border-gray-800">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase text-gray-400 bg-[#1f2937] border-b border-gray-700 sticky top-0">
            <tr>
              <th className="px-3 sm:px-6 py-3 font-medium min-w-[150px]">Employé</th>
              <th className="px-3 sm:px-6 py-3 font-medium min-w-[100px]">Manager</th>
              <th className="px-3 sm:px-6 py-3 font-medium min-w-[100px] text-center">Total</th>
              <th className="px-3 sm:px-6 py-3 font-medium min-w-[100px] text-center">Media Push</th>
              <th className="px-3 sm:px-6 py-3 font-medium min-w-[100px] text-center">Media Privé</th>
              <th className="px-3 sm:px-6 py-3 font-medium min-w-[100px] text-center">Tips</th>
              <th className="px-3 sm:px-6 py-3 font-medium min-w-[120px] text-center">Heures travaillées</th>
              <th className="px-3 sm:px-6 py-3 font-medium w-fit"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-800 hover:bg-[#283241] transition-colors duration-150"
              >
                {/* Cellule Employé */}
                <td className="px-3 sm:px-6 py-4 flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <span className="truncate max-w-[120px] sm:max-w-none text-gray-100 font-medium">{item.name}</span>
                </td>
                {/* Cellule Manager */}
                <td className="px-3 sm:px-6 py-4 text-gray-400 whitespace-nowrap">{item.manager}</td>
                {/* Cellules Chiffres */}
                <td className="px-3 sm:px-6 py-4 text-blue-400 font-bold text-center whitespace-nowrap">{item.total}</td>
                <td className="px-3 sm:px-6 py-4 text-center text-gray-200 whitespace-nowrap">{item.mediaPush}</td>
                <td className="px-3 sm:px-6 py-4 text-center text-gray-200 whitespace-nowrap">{item.mediaPrive}</td>
                <td className="px-3 sm:px-6 py-4 text-center text-green-400 font-medium whitespace-nowrap">{item.tips}</td>
                <td className="px-3 sm:px-6 py-4 text-center text-gray-300 whitespace-nowrap">{item.heures}</td>
                {/* Cellule Action */}
                <td className="px-3 sm:px-6 py-4">
                  <button
                    onClick={() => console.log(`Voir le graphique pour ${item.name}`)}
                    className="text-blue-500 hover:text-blue-400 font-semibold text-xs uppercase transition duration-150 p-2 rounded-lg hover:bg-[#374151] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`Voir les données de ${item.name} en graphique`}
                  >
                    Chart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analyse;
