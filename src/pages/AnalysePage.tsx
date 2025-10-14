
import Analyse from "../components/analyse";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
const AnalysePage = () => {
  return (
    <div className="flex">
      {/* Sidebar fixe */}
      <Sidebar />

      {/* Contenu principal */}
      <div className="flex-1 lg:ml-60 flex flex-col min-h-screen">
        <Navbar />
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-4">Analyse</h2>
          <Analyse />
        </div>
      </div>
    </div>
  );
};
export default AnalysePage;