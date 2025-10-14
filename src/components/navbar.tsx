const Navbar = () => {
  return (
    <div className="w-full bg-gray-800 text-gray-200 h-16 flex items-center justify-end px-6 shadow-md">
      <span className="mr-6">UTC +03:00</span>
      <div className="flex items-center gap-3 cursor-pointer">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <span>Name Surname</span>
      </div>
    </div>
  );
};

export default Navbar;
