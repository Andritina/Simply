import { Home, Users, Mail, Settings, ChevronDown, Menu } from "lucide-react";
import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 

type SubMenuItem = {
  title: string;
  path: string; 
};

type MenuItem = {
  title: string;
  icon: React.ReactNode;
  path?: string; 
  subMenu?: (string | SubMenuItem)[]; 
};

const Sidebar: React.FC = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleNavigation = (path: string) => {
    navigate(path);
    setSidebarOpen(false);
  };

  
  const menus: MenuItem[] = [
    { title: "Aperçu", icon: <Home size={20} />, path: "/dashboard" },
    { title: "Créateurs", icon: <Users size={20} />, path: "/createurs" },
    {
      title: "Employés",
      icon: <Users size={20} />,
      subMenu: [
        { title: "Liste employés", path: "/employes/liste" },
        { title: "Ajouter employé", path: "/employes/ajouter" }, 
        { title: "Statistiques", path: "/employes/stats" }, 
      ] as SubMenuItem[], 
    },
    {
      title: "MonOffmy",
      icon: <Mail size={20} />,
      subMenu: [
        { title: "Messages", path: "/MessagePage" }, // OK
        { title: "Messages envoyés", path: "/#" }, 
        { title: "Paramètres mail", path: "/#" }, 
      ] as SubMenuItem[],
    },
    {
      title: "Paramètre",
      icon: <Settings size={20} />,
      subMenu: [
        { title: "Profil", path: "/parametres/profil" }, 
        { title: "Sécurité", path: "/parametres/securite" }, 
        { title: "Préférences", path: "/parametres/preferences" }, // Converti en objet
      ] as SubMenuItem[],
    },
  ];

  const handleMenuClick = (menu: MenuItem) => {
    if (menu.path) {
      // Si le menu principal a un path, naviguer
      handleNavigation(menu.path);
    } else if (menu.subMenu) {
      // S'il n'a pas de path mais a un sous-menu, basculer le sous-menu
      setOpenSubMenu(openSubMenu === menu.title ? null : menu.title);
    }
  };

  return (
    <>
      {/* Bouton hamburger pour mobile */}
      <div className="lg:hidden p-4 bg-gray-900 text-gray-200 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SIMPLY</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
          bg-gray-900 text-gray-200 h-screen p-5 flex flex-col
          fixed top-0 left-0 z-50
          w-60 lg:relative lg:translate-x-0 transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h1 className="text-2xl font-bold mb-10 hidden lg:block">SIMPLY</h1>
        <ul className="space-y-1">
          {menus.map((menu, idx) => (
            <li key={idx}>
              <div
                className="flex items-center justify-between gap-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer"
                // On utilise la nouvelle fonction de gestion du clic
                onClick={() => handleMenuClick(menu)} 
              >
                <div className="flex items-center gap-3">
                  {menu.icon}
                  <span>{menu.title}</span>
                </div>
                {menu.subMenu && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${openSubMenu === menu.title ? "rotate-180" : ""}`}
                  />
                )}
              </div>

              {/* Sous-menu */}
              {menu.subMenu && openSubMenu === menu.title && (
                <ul className="pl-10 mt-1 space-y-1">
                  {/* Itérer sur le sous-menu (qui contient maintenant des objets) */}
                  {(menu.subMenu as SubMenuItem[]).map((subItem, subIdx) => (
                    <li
                      key={subIdx}
                      className="text-gray-300 text-sm p-2 rounded-md hover:bg-gray-700 cursor-pointer"
                      // Ajout du onClick pour la navigation du sous-élément
                      onClick={() => handleNavigation(subItem.path)}
                    >
                      {subItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay pour mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;