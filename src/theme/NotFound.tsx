import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

function NotFound() {
  return (
    <Layout wrapperClassName="max-w-7xl mx-auto px-6 lg:px-8">
      {/* <div className="py-8 w-screen flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
          <div className="w-full lg:w-1/2 mx-8">
            <div className="text-7xl text-[#645BFF] font-dark font-extrabold mb-8">
              404
            </div>
            <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
              Sorry we couldn't find the page you're looking for
            </p>

            <a
              href="/"
              className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-[#645BFF] hover:bg-indigo-200 hover:cursor-pointer"
            >
              Back to home
            </a>
          </div>
          <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <img
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              className=""
              alt="Page not found"
            />
          </div>
        </div>
      </div> */}
      <div className="flex items-center justify-center py-20 w-full px-4">
        <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
          <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left mb-8 md:mb-0">
            <div className="text-6xl md:text-7xl text-[#645BFF] font-extrabold mb-6">
              404
            </div>
            <p className="text-lg md:text-2xl font-light leading-relaxed mb-6">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <a
              href="/"
              className="px-6 py-3 text-sm font-medium text-white bg-[#645BFF] rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-indigo-400 focus:outline-none"
            >
              Back to Home
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 flex justify-center md:justify-end">
            <img
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              alt="Page not found"
              className="w-4/5 md:w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
