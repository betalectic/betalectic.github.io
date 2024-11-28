const SectionHeader = ({ sectionTag, sectionTitle, sectionDescription }) => {
  return (
    <div className="text-center mx-auto">
      <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
        {sectionTag}
      </p>
      <h2 className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 lg:text-balance">
        {sectionTitle}
      </h2>
      <p className="mt-6 mb-0 w-2/3 mx-auto text-xl text-gray-600 dark:text-gray-300">
        {sectionDescription}
      </p>
    </div>
  );
};

export default SectionHeader;
