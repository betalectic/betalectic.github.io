const GetQuoteCTA = ({ buttonText, buttonLink }) => {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <a
        href={buttonLink}
        className="rounded-md bg-mf-stack-brand-button px-6 py-3 text-sm font-semibold text-white shadow-md hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-white"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default GetQuoteCTA;
