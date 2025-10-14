// Navbar.tsx
const Navbar = () => {
  return (
    <div className="w-full bg-night text-gray-200 h-16 flex items-center justify-end px-6 shadow-md">
      <span className="mr-6 hidden md:inline">UTC +03:00</span>
      <div className="flex items-center gap-3 cursor-pointer">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <span className="hidden md:inline">Name Surname</span>
      </div>
    </div>
  );
};

export default Navbar;
