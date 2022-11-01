const Spinner = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-black/50 flex justify-center items-center">
      <span className="block w-[60px] h-[60px] rounded-full border-[4px] border-indigo-600 border-b-transparent animate-spin"></span>
    </div>
  );
};

export default Spinner;
