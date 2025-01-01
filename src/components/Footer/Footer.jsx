import logo from "../../assets/Project Images/logo.svg";
import facebook from "../../assets/Icons/facebook.svg";
import instagram from "../../assets/Icons/instagram.svg";
import twitter from "../../assets/Icons/twiter.svg";
import phone from "../../assets/Icons/phone-call (1) 1.svg";
import envelope from "../../assets/Icons/envelope (1) 1.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-900 to-indigo-900 text-white md:pt-16 pt-10 pb-8">
      {/* Top Section: Heading and Button */}
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <h2 className="lg:text-4xl md:text-3xl text-xl font-bold sm:mb-0 mb-4">
          Let’s Make Something Together
        </h2>
        <button className="bg-white text-indigo-900 font-bold py-2 px-6 rounded hover:bg-indigo-100 transition lg:text-[18px] md:text-[16px] text-sm">
          Apply Now
        </button>
      </div>

      {/* Divider */}
      <div className="max-w-screen-xl mx-auto md:my-8 my-5 border-t border-gray-500"></div>

      {/* Bottom Section: Company Info and Links */}
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 lg:gap-8 gap-5">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="Soft Forte Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">Soft Forte</span>
          </div>
          <p className="text-gray-400 md:text-[16px] text-sm">
            We are a creative agency with several services that focus on quality
            and innovations for your business.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#">
              <img src={instagram} />
            </a>
            <a href="#">
              <img src={facebook} />
            </a>
            <a href="#">
              <img src={twitter} />
            </a>
          </div>
        </div>

        {/* Quick Link */}
        <div className="md:block hidden">
          <h4 className="text-lg font-semibold mb-4">Quick link</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 lg:text-[16px] text-sm hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white lg:text-[16px] text-sm"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white lg:text-[16px] text-sm"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="md:block hidden">
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white lg:text-[16px] text-sm"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white lg:text-[16px] text-sm"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white lg:text-[16px] text-sm"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white lg:text-[16px] text-sm"
              >
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Office */}
        <div className="md:block hidden">
          <h4 className="text-lg font-semibold mb-4">Office</h4>
          <ul className="space-y-2">
            <li className="text-gray-400 flex items-center space-x-2 hover:text-gray-300 lg:text-[16px] text-sm">
              <img src={phone} alt="Phone Icon" className="w-5 h-5" />{" "}
              <span>+20 11988379</span>
            </li>
            <li className="text-gray-400 flex items-center space-x-2">
              <img src={envelope} alt="Envelope Icon" className="w-5 h-5" />
              <a
                href="mailto:SoftForte@gmail.com"
                className="hover:text-gray-300 lg:text-[16px] text-sm"
              >
                SoftForte@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
