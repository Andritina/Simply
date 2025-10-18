import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import Card from './Card';

const moderators = [
  { name: 'Jean D', treated: 125, time: '17 min', status: 'En Attente' },
  { name: 'Marie S', treated: 95, time: '22 min', status: 'En Ligne' },
  { name: 'Équipe (Moyenne)', treated: 107, time: '18 min', status: 'Permissions' },
];

const statusColors: Record<string, string> = {
  'En Ligne': 'bg-success-green/20 text-success-green border-success-green/40',
  'En Attente': 'bg-warning-yellow/20 text-warning-yellow border-warning-yellow/40',
  'Permissions': 'bg-accent-blue/20 text-accent-blue border-accent-blue/40',
};

const ModeratorActivity: React.FC = () => (
  <Card title="Activité des Modérateurs" className="md:col-span-2 border-1 m-4 border-gray-700 shadow-md shadow-black/20">
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b border-gray-700 text-left text-gray-400 uppercase text-xs tracking-wide">
            <th className="py-3"></th>
            <th className="py-3">Messages Traités</th>
            <th className="py-3">Temps de Réponse</th>
            <th className="py-3">Statut</th>
          </tr>
        </thead>
        <tbody>
          {moderators.map((user, index) => (
            <tr
              key={index}
              className="border-b border-gray-800 hover:bg-dark-bg-card/50 transition-all duration-200 group"
            >
              <td className="py-3 flex items-center font-semibold text-gray-200">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 group-hover:scale-110 transition">
                  <BsFillPersonFill className="text-accent-blue w-5 h-5" />
                </div>
                {user.name}
              </td>
              <td className="py-3 text-gray-300">{user.treated}</td>
              <td className="py-3 text-gray-300">{user.time}</td>
              <td className="py-3">
                <span
                  className={`px-3 py-1 rounded-full border text-xs font-semibold ${statusColors[user.status]}`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <button className="bg-accent-blue text-white py-2.5 px-5 rounded-xl font-semibold mt-5 w-full hover:bg-blue-600 transition duration-200 shadow-md shadow-accent-blue/20">
      ⚙️ Gérer les Rôles et Permissions
    </button>
  </Card>
);

export default ModeratorActivity;
