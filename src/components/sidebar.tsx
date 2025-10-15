import { Home, Users, Mail, Settings, ChevronDown, Menu } from "lucide-react";
import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 

type SubMenuItem = {
  title: string;
  path?: string;
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

  const menus: MenuItem[] = [
    { title: "Aperçu", icon: <Home size={20} />, path: "/dashboard" },
    { title: "Créateurs", icon: <Users size={20} />, path: "/createurs" },
    {
      title: "Employés",
      icon: <Users size={20} />,
      subMenu: [
        { title: "Liste employés", path: "/employes/liste" },
        { title: "Ajouter employé", path: "/employes/ajouter" },
        { title: "Statistiques", path: "/analyse" },
      ],
    },
    {
      title: "MonOffmy",
      icon: <Mail size={20} />,
      subMenu: [
        { title: "Messages", path: "/MessagePage" },
        "Messages envoyés",
        "Paramètres mail",
      ],
    },
    {
      title: "Paramètre",
      icon: <Settings size={20} />,
      subMenu: [
        { title: "Profil", path: "/profile" },
        { title: "Sécurité", path: "/parametres/securite" },
        "Préférences",
      ],
    },
  ];

  const toggleSubMenu = (menu: MenuItem, subItem?: string | SubMenuItem) => {
    if (subItem && typeof subItem === "object" && subItem.path) {
      navigate(subItem.path);
      setSidebarOpen(false);
      return;
    }
    if (menu.path) {
      navigate(menu.path);
      setSidebarOpen(false);
    } else if (menu.subMenu) {
      setOpenSubMenu(openSubMenu === menu.title ? null : menu.title);
    }
  };

  return (
    <div className="flex lg:w-50">
      {/* Header mobile */}
      <div className="lg:hidden p-4 bg-gray-900 text-gray-200 flex justify-between items-center w-full fixed top-0 left-0 z-40">
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
                onClick={() => toggleSubMenu(menu)}
              >
                <div className="flex items-center gap-3">
                  {menu.icon}
                  <span>{menu.title}</span>
                </div>
                {menu.subMenu && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openSubMenu === menu.title ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {menu.subMenu && openSubMenu === menu.title && (
                <ul className="pl-10 mt-1 space-y-1">
                  {menu.subMenu.map((subItem, subIdx) => (
                    <li
                      key={subIdx}
                      className="text-gray-300 text-sm p-2 rounded-md hover:bg-gray-700 cursor-pointer"
                      onClick={() => toggleSubMenu(menu, subItem)}
                    >
                      {typeof subItem === "string" ? subItem : subItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

    </div>
  );
};

export default Sidebar;
