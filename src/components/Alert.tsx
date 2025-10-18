import React from 'react';
import Card from './Card';
import { FaExclamationTriangle, FaRobot, FaBell } from 'react-icons/fa';

const notifications = [
  {
    type: 'Priorité Haute',
    text: 'Votre intégration Stripe nécessite une revalidation immédiate.',
    button: 'Résoudre maintenant',
    icon: <FaExclamationTriangle className="text-warning-yellow w-5 h-5" />,
    bg: 'bg-warning-yellow/20',
    border: 'border-warning-yellow/40',
    textColor: 'text-warning-yellow',
  },
  {
    type: 'Notification',
    text: 'Nouvelle fonctionnalité disponible : Réponses IA activées pour votre équipe.',
    button: 'Découvrir',
    icon: <FaBell className="text-accent-blue w-5 h-5" />,
    bg: 'bg-accent-blue/20',
    border: 'border-accent-blue/40',
    textColor: 'text-accent-blue',
  },
  {
    type: 'Recommandation IA',
    text: "Prévision d'une baisse d'engagement : renforcez votre contenu interactif.",
    button: 'Voir détails',
    icon: <FaRobot className="text-purple-400 w-5 h-5" />,
    bg: 'bg-purple-500/20',
    border: 'border-purple-500/40',
    textColor: 'text-purple-400',
  },
];

const AlertsAndRecs: React.FC = () => (
  <Card
    title="Alertes & Recommandations"
    className="md:col-span-1 border-1 border-gray-700 m-4 shadow-md shadow-black/20"
  >
    <ul className="space-y-4">
      {notifications.map((alert, index) => (
        <li
          key={index}
          className={`p-3 rounded-xl border ${alert.border} ${alert.bg} hover:bg-opacity-30 transition duration-200`}
        >
          <div className="flex items-start space-x-3">
            <div className="mt-0.5">{alert.icon}</div>
            <div className="flex-1">
              <p className={`text-sm font-semibold ${alert.textColor}`}>
                {alert.type}
              </p>
              <p className="text-gray-300 text-xs mt-1">{alert.text}</p>
              <button
                className={`mt-3 text-xs font-semibold px-4 py-1.5 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-white hover:from-gray-700 hover:to-gray-800 transition-all duration-200`}
              >
                {alert.button}
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
    <a
      href="#"
      className="text-accent-blue text-sm mt-4 block text-center hover:underline"
    >
      Voir toutes les notifications
    </a>
  </Card>
);

export default AlertsAndRecs;
