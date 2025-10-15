import { AiOutlineBarChart } from "react-icons/ai";
import Chart from "../charts/Charts";
import Schedule from "./ui/Schedule";
import { Landmark, Link2, MailCheck, MessageSquareLock, Video } from "lucide-react";
import DateTabs from "./ui/DateTabs";
import SelectWithIcon from "./ui/SelectWithIcon";
import TableUsers from "./ui/TableUsers";

const DashboardContent = () => {

  return (

    <div className="p-4 sm:p-6 text-gray-100">


      <div className="mb-4 p-4 border-2 border-gray-700 rounded-lg shadow flex items-center justify-between">

        <h2 className="text-lg font-semibold mb-4">Détails de revenus</h2>

      </div>

      <div className="flex flex-col md:flex-row w-full gap-4 mb-6">

        <div className="bg-gray-800 w-full md:w-1/3 rounded-lg p-4">

          <div className="stat">

            <h1>Total Incomme</h1>

            <div className="stat-figure text-secondary">

              <div className="avatar avatar-online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
                </div>
              </div>

            </div>

            <div className="stat-value">1478.98 $ </div>

          </div>

          <div className="flex justify-between items-center ">

            <div>
              <div className="stat-title">Last month</div>

              <div className="stat-desc text-secondary">1478.98 $  <span className="text-red-400">7$ +</span></div>
            </div>

            <div>
              <div className="stat-title">Last month</div>

              <div className="stat-desc text-secondary">1478.98 $  <span className="text-green-400">7$ +</span></div>
            </div>

          </div>

        </div>

        <div className="w-full md:w-2/3 rounded-lg p-4">

          {/* Total revenus et détails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Card Total Income */}
            <div className="bg-gray-800 p-4 rounded-full shadow flex items-center justify-between border-l-5 border-green-400">
              <div className="flex items-center gap-3">
                <Landmark className="text-white text-3xl m-2" />
                <div>
                  <h2 className="text-xl text-white">Abonnements</h2>
                  <p className="text-sm italic text-gray-400">1478.98 $</p>
                </div>
              </div>
            </div>

            {/* Card Abonnements */}
            <div className="bg-gray-800 p-4 rounded-full shadow flex items-center justify-between border-l-5 border-green-400">
              <div className="flex items-center gap-3">
                <MailCheck className="text-white text-3xl m-2" />
                <div className="ml-2">
                  <h2 className="text-xl text-white">Médias push</h2>
                  <p className="text-sm italic text-gray-400">478</p>
                </div>
              </div>
            </div>

            {/* Card Medias Push */}
            <div className="bg-gray-800 p-4 rounded-full shadow flex items-center justify-between border-l-5 border-green-400">
              <div className="flex items-center gap-3">
                <AiOutlineBarChart className="text-white text-3xl m-2" />
                <div>
                  <h2 className="text-xl text-white">Tips</h2>
                  <p className="text-sm italic text-gray-400">478.98 $</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-full shadow flex items-center justify-between border-l-5 border-green-400">
              <div className="flex items-center gap-3">
                <MessageSquareLock className="text-white text-3xl m-2" />
                <div>
                  <h2 className="text-xl text-white">Médias Privés</h2>
                  <p className="text-sm italic text-gray-400">478.98 $</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-full shadow flex items-center justify-between border-l-5 border-green-400">
              <div className="flex items-center gap-3">
                <Video className="text-white text-3xl m-2" />
                <div>
                  <h2 className="text-xl text-white">Lives</h2>
                  <p className="text-sm italic text-gray-400">478.98 $</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-full shadow flex items-center justify-between border-l-5 border-green-400">
              <div className="flex items-center gap-3">
                <Link2 className="text-white text-3xl m-2" />
                <div>
                  <h2 className="text-xl text-white">Affiliés</h2>
                  <p className="text-sm italic text-gray-400">478.98 $</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>



      {/* Graphique et créneaux */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Créneaux */}
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg shadow">

          <div className="flex justify-between items-center m-2">

            <h3 className="text-lg font-semibold">Créneaux</h3>

            <SelectWithIcon />

          </div>

          <div className="my-2">
            <DateTabs />
          </div>

          <ul className="space-y-2 overflow-auto">

            {/* Tu peux dupliquer pour d'autres créneaux */}
            <li className="bg-gray-700 p-2 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>Creator Name</span>
              </div>
              <span className="text-gray-300 text-sm">14:30 - 16:00</span>
            </li>

            <li className="bg-gray-700 p-2 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>Creator Name</span>
              </div>
              <span className="text-gray-300 text-sm">16:30 - 18:00</span>
            </li>

          </ul>

          <p className="italic text-sm text-gray-600 my-4">Tomorrow</p>

          <ul className="space-y-2 overflow-auto">
            {/* Exemple d’un créneau */}
            <li className="bg-gray-700 p-2 rounded-xl flex items-center justify-between">
              {/* Partie gauche : image + nom */}
              <div className="flex items-center gap-3">
                <img
                  src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>Creator Name</span>

              </div>

              {/* Partie droite : heure */}
              <span className="text-gray-300 text-sm">12:00 - 14:00</span>
            </li>

            {/* Tu peux dupliquer pour d'autres créneaux */}
            <li className="bg-gray-700 p-2 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>Creator Name</span>
              </div>
              <span className="text-gray-300 text-sm">14:30 - 16:00</span>
            </li>

          </ul>

        </div>


        <div className="col-span-1 lg:col-span-2 bg-gray-800 p-4 rounded-lg shadow h-64 lg:h-auto flex flex-col">

          <div className="flex items-center justify-between">

            <h2 className="text-lg font-semibold">Vue d'ensemble</h2>
            <Schedule />

          </div>
          <div className="flex">

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

          <div className="flex flex-row">
            <TableUsers />
          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardContent;
