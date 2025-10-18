import React from 'react';
import Card from './Card';
import { FaEuroSign, FaUserPlus, FaChartLine, FaEnvelopeOpenText } from 'react-icons/fa';

const kpiData = [
  {
    value: '5 200 €',
    label: 'Revenus du Mois',
    trend: '↑ 8%',
    isGrowth: true,
    color: 'text-emerald-400',
    icon: <FaEuroSign className="text-emerald-400 text-lg" />,
    bg: 'bg-emerald-500/10',
  },
  {
    value: '150',
    label: 'Nouveaux Abonnés',
    trend: '↑ 12%',
    isGrowth: true,
    color: 'text-sky-400',
    icon: <FaUserPlus className="text-sky-400 text-lg" />,
    bg: 'bg-sky-500/10',
  },
  {
    value: '4.5%',
    label: "Taux d'Engagement Moyen",
    trend: '↑ 0.3pt',
    isGrowth: true,
    color: 'text-violet-400',
    icon: <FaChartLine className="text-violet-400 text-lg" />,
    bg: 'bg-violet-500/10',
  },
  {
    value: '215',
    label: 'Messages Traités',
    trend: 'Archiver',
    isGrowth: false,
    color: 'text-gray-400',
    icon: <FaEnvelopeOpenText className="text-gray-400 text-lg" />,
    bg: 'bg-gray-600/10',
  },
];

const PerformanceStats: React.FC = () => (
  <Card
    title="Performance Générale"
    className="md:col-span-3 border border-gray-700 m-4 shadow-md shadow-black/20"
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
      {kpiData.map((kpi, index) => (
        <div
          key={index}
          className={`flex flex-col p-4 rounded-xl border border-gray-700 ${kpi.bg} hover:bg-opacity-30 transition duration-200`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className={`p-2 rounded-lg ${kpi.bg} ${kpi.color}`}>{kpi.icon}</div>
            <span
              className={`text-xs font-semibold ${
                kpi.isGrowth ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {kpi.trend}
            </span>
          </div>
          <span className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</span>
          <span className="text-sm text-text-muted mt-1">{kpi.label}</span>
        </div>
      ))}
    </div>

    <div className="mt-6 text-right">
      <a
        href="#"
        className="text-accent-blue text-sm font-medium hover:underline transition-colors"
      >
        Voir les Rapports Détaillés →
      </a>
    </div>
  </Card>
);

export default PerformanceStats;
