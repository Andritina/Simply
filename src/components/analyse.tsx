import React from "react";
import { Calendar, Search } from "lucide-react";


const data = [
  {
    id: 1,
    name: "Names Surname",
    total: "60.81 $",
    mediaPush: "35.16$",
    mediaPrive: "00.0$",
    tips: "25.65$",
    heures: "30h0min",
  },
  // Tu peux ajouter d'autres éléments ici...
];

const Analyse: React.FC = () => {
  return (
    <div className="bg-[#111827] text-gray-200 p-6 rounded-lg min-h-full">
  {/* ton contenu */}


      {/* Header avec recherche et date */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#1f2937] text-gray-200 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 bg-[#1f2937] px-3 py-2 rounded-lg text-sm">
          <Calendar size={16} className="text-gray-400" />
          <span>22.10.2024 - 22.10.2024</span>
        </div>
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto bg-[#1f2937] rounded-xl shadow-md">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-400 border-b border-gray-700">
            <tr>
              <th className="px-6 py-3 font-medium">Employé</th>
              <th className="px-6 py-3 font-medium">Manager</th>
              <th className="px-6 py-3 font-medium">Total</th>
              <th className="px-6 py-3 font-medium">Media push</th>
              <th className="px-6 py-3 font-medium">Media privé</th>
              <th className="px-6 py-3 font-medium">Tips</th>
              <th className="px-6 py-3 font-medium">Heures travaillées</th>
              <th className="px-6 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-800 hover:bg-[#374151] transition-colors"
              >
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    N
                  </div>
                  <span>{item.name}</span>
                </td>
                <td className="px-6 py-4 text-gray-300">{item.name}</td>
                <td className="px-6 py-4 text-blue-400">{item.total}</td>
                <td className="px-6 py-4">{item.mediaPush}</td>
                <td className="px-6 py-4">{item.mediaPrive}</td>
                <td className="px-6 py-4">{item.tips}</td>
                <td className="px-6 py-4">{item.heures}</td>
                <td className="px-6 py-4 text-blue-400 cursor-pointer">chart</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analyse;
