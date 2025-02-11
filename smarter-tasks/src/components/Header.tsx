const Header = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center w-1/3">
            <h2 className="text-lg font-bold rounded-full h-8 w-8 px-1 bg-gray-600 text-white">ST</h2>
          </div>
          <div className="flex items-center justify-center w-1/3">
            <a href="/home" className="ml-6 text-blue-700 hover:text-blue-500 font-semibold">
              Home
            </a>
            <a href="/tasks" className="ml-9 text-blue-700 hover:text-blue-500 font-semibold">
              Tasks
            </a>
            <a href="#" className="ml-9 text-blue-700 hover:text-blue-500 font-semibold">
              Dashboard
            </a>
          </div>
          <div className="flex items-center w-1/3 justify-end">
            <a href="/signin" className="ml-6 text-red-500 hover:text-red-700 font-semibold">
             Sign out
            </a>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
/*const Header = () => {
    return (
      <nav className="bg-gray-800 py-4">
        <div className="mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center w-1/3 justify-center">
              <h2 className="text-white text-lg font-bold">Smarter Tasks</h2>
            </div>
            <div className="flex items-center w-1/3">
              <a href="/home" className="ml-6 text-gray-300 hover:text-white">
                Home
              </a>
              <a href="/tasks" className="ml-6 text-gray-300 hover:text-white">
                Tasks
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Header;*/