const BookServiceButton = () => {
 
    const handleOnClick = () => {

 }

  return (
    <div  className="h-full flex items-center">
      <button
        onClick={handleOnClick}
        className="bg-neutral-900 rounded-[2px] font-aperçu text-sm px-3 h-4 font-bold leading-[.5rem] tracking-wide text-neutral-300 small-caps dark:font-semibold dark:text-neutral-300 md:text-xs"
      >
        book
      </button>
    </div>
  );
};

export default BookServiceButton;
