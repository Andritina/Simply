import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import EmployeList from "../components/employes/EmployeList";
import AddEmployeModal from "../components/employes/AddEmployeModal";

const EmployesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employes, setEmployes] = useState([
    { id: 1, nom: "Jean Dupont", poste: "Manager", email: "jean@simply.com", statut: "Actif" },
    { id: 2, nom: "Sarah K.", poste: "Comptable", email: "sarah@simply.com", statut: "Actif" },
    { id: 3, nom: "Ali B.", poste: "Technicien", email: "ali@simply.com", statut: "Inactif" },
  ]);

  const ajouterEmploye = (employe: any) => {
    setEmployes([...employes, { id: employes.length + 1, ...employe }]);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenu principal */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Contenu */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#1D1E22]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-slate-100">
              Gestion des employés
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:scale-[1.02] hover:shadow-blue-500/30 transition-all duration-300"
            >
              + Ajouter un employé
            </button>
          </div>

          <EmployeList employes={employes} setEmployes={setEmployes} />
        </div>
      </div>

      {/* Modal d’ajout */}
      <AddEmployeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={ajouterEmploye}
      />
    </div>
  );
};

export default EmployesPage;
