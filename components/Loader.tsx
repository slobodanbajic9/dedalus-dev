const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
      <p className="text-lg ml-2">Sending...</p>
    </div>
  );
};

export default Loader;
