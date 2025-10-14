import { AiOutlineBarChart, AiOutlineDollar, AiOutlineUser } from "react-icons/ai";
import { FiZap } from "react-icons/fi";
import Chart from "../charts/Charts";

const DashboardContent = () => {
  return (
    <div className="p-4 sm:p-6 text-gray-100">



      <h2 className="text-lg font-semibold mb-4">Détails de revenus</h2>

      {/* Total revenus et détails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Card Total Income */}
        <div className="bg-gray-800 p-4 rounded-lg shadow flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AiOutlineDollar className="text-white text-3xl" />
            <div>
              <h2 className="text-sm text-gray-300">Total income</h2>
              <p className="text-2xl font-bold text-white">$1478.98</p>
            </div>
          </div>
          <FiZap className="text-yellow-400 text-3xl" />
        </div>

        {/* Card Abonnements */}
        <div className="bg-gray-800 p-4 rounded-lg shadow flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AiOutlineUser className="text-white text-3xl" />
            <div>
              <h2 className="text-sm text-gray-300">Abonnements</h2>
              <p className="text-xl font-bold text-white">$1478.98</p>
            </div>
          </div>
          <FiZap className="text-yellow-400 text-3xl" />
        </div>

        {/* Card Medias Push */}
        <div className="bg-gray-800 p-4 rounded-lg shadow flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AiOutlineBarChart className="text-white text-3xl" />
            <div>
              <h2 className="text-sm text-gray-300">Medias push</h2>
              <p className="text-xl font-bold text-white">$1478.98</p>
            </div>
          </div>
          <FiZap className="text-yellow-400 text-3xl" />
        </div>

        {/* Autres cards */}
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-sm">Medias push</h2>
          <p className="text-xl font-bold">$1478.98</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-sm">Medias push</h2>
          <p className="text-xl font-bold">$1478.98</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-sm">Tips</h2>
          <p className="text-xl font-bold">$1478.98</p>
        </div>
      </div>

      {/* Graphique et créneaux */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Créneaux */}
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="mb-4 text-lg font-semibold">Créneaux</h3>
          <ul className="space-y-2">
            {/* Exemple d’un créneau */}
            <li className="bg-gray-700 p-2 rounded flex items-center justify-between">
              {/* Partie gauche : image + nom */}
              <div className="flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>Creator Name</span>
              </div>

              {/* Partie droite : heure */}
              <span className="text-gray-300 text-sm">12:00 - 14:00</span>
            </li>

            {/* Tu peux dupliquer pour d'autres créneaux */}
            <li className="bg-gray-700 p-2 rounded flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>Creator Name</span>
              </div>
              <span className="text-gray-300 text-sm">14:30 - 16:00</span>
            </li>

            <li className="bg-gray-700 p-2 rounded flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>Creator Name</span>
              </div>
              <span className="text-gray-300 text-sm">16:30 - 18:00</span>
            </li>
          </ul>
        </div>


        <div className="col-span-1 lg:col-span-2 bg-gray-800 p-4 rounded-lg shadow h-64 lg:h-auto flex flex-col">
          <h3 className="mb-4">Vue d'ensemble</h3>
          <div className="flex-1 bg-gray-700 rounded-lg p-2 min-h-[200px]">
            <Chart
              data={[
                { name: "Jan", revenue: 400 },
                { name: "Feb", revenue: 300 },
                { name: "Mar", revenue: 500 },
                { name: "Apr", revenue: 200 },
                { name: "May", revenue: 350 },
                { name: "Jun", revenue: 450 },
              ]}
            />
          </div>
        </div>



      </div>
    </div>
  );
};

export default DashboardContent;
