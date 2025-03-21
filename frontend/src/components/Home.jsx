import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Search, Twitter } from "lucide-react";
import hero_img1 from "../assets/hero_img1.avif";
import hero_img2 from "../assets/hero_img2.webp";
import img3 from "../assets/img_3.jpeg";
import img4 from "../assets/career.jpg";
import img6 from "../assets/img_6.jpeg";
import img7 from "../assets/student.jpg"
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [hoveredSection, setHoveredSection] = useState(null);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white sticky top-0 z-50">
        {/* Top Navigation */}
       

        {/* Main Navigation */}
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="mr-6">
                <div className="flex items-center">
                  <svg viewBox="0 0 300 150" className="h-20 w-full ">
                    <circle cx="150" cy="75" r="30" fill="#d9534f" />
                    <circle cx="90" cy="75" r="20" fill="#5bc0de" />
                    <circle cx="210" cy="75" r="25" fill="#f0ad4e" />
                    <circle cx="120" cy="30" r="20" fill="#a3c644" />
                    <line
                      x1="90"
                      y1="75"
                      x2="120"
                      y2="30"
                      stroke="#ccc"
                      strokeWidth="3"
                    />
                    <line
                      x1="120"
                      y1="30"
                      x2="210"
                      y2="75"
                      stroke="#ccc"
                      strokeWidth="3"
                    />
                    <line
                      x1="90"
                      y1="75"
                      x2="150"
                      y2="75"
                      stroke="#ccc"
                      strokeWidth="3"
                    />
                    <line
                      x1="150"
                      y1="75"
                      x2="210"
                      y2="75"
                      stroke="#ccc"
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="ml-2">
                    <div className="text-gray-700 font-bold text-xl">
                      PharmCAS
                    </div>
                    <div className="text-xs text-gray-500">
                      Pharmacy College Application Service
                    </div>
                  </div>
                </div>
              </Link>
              
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <form className="flex">
                  <input
                    type="search"
                    placeholder="Search"
                    className="px-3 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-300"
                  >
                    <Search size={16} />
                  </button>
                </form>
              </div>
              <button
                onClick={() => navigate("/signin")}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md font-medium hover:bg-yellow-600 hidden md:block"
              >
                APPLY NOW
              </button>
              <button className="lg:hidden text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Banner with Hover Animation */}
        <section className="relative">
          <div className="flex flex-col md:flex-row h-[500px]">
            {/* Left Section - Ready to Apply */}
            <div
              className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
                hoveredSection === "apply"
                  ? "md:w-3/4"
                  : hoveredSection === "directory"
                  ? "md:w-1/4"
                  : "md:w-1/2"
              }`}
              onMouseEnter={() => setHoveredSection("apply")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
              <img
                src={hero_img1}
                alt="Student applying"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-8 z-20 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  READY TO APPLY
                </h2>
                <p className="mb-4 text-lg">
                  Apply with ease through PharmCAS.
                </p>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 text-white px-4 py-2 rounded w-fit hover:bg-teal-600 transition-colors"
                >
                  START APPLICATION
                </a>
              </div>
            </div>

            {/* Right Section - School Directory */}
            <div
              className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
                hoveredSection === "directory"
                  ? "md:w-3/4"
                  : hoveredSection === "apply"
                  ? "md:w-1/4"
                  : "md:w-1/2"
              }`}
              onMouseEnter={() => setHoveredSection("directory")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
              <img
                src={hero_img2}
                alt="Pharmacy students"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-8 z-20 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  SCHOOL DIRECTORY
                </h2>
                <p className="mb-4 text-lg">
                  Find the program that's right for you.
                </p>
                <Link
                  to="/school-directory"
                  className="bg-teal-500 text-white px-4 py-2 rounded w-fit hover:bg-teal-600 transition-colors"
                >
                  SCHOOL DIRECTORY
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-8">
              <svg
                width="300"
                height="150"
                viewBox="0 0 300 150"
                className="mx-auto"
              >
                <circle cx="150" cy="75" r="30" fill="#d9534f" />
                <circle cx="90" cy="75" r="20" fill="#5bc0de" />
                <circle cx="210" cy="75" r="25" fill="#f0ad4e" />
                <circle cx="120" cy="30" r="20" fill="#a3c644" />
                <line
                  x1="90"
                  y1="75"
                  x2="120"
                  y2="30"
                  stroke="#ccc"
                  strokeWidth="3"
                />
                <line
                  x1="120"
                  y1="30"
                  x2="210"
                  y2="75"
                  stroke="#ccc"
                  strokeWidth="3"
                />
                <line
                  x1="90"
                  y1="75"
                  x2="150"
                  y2="75"
                  stroke="#ccc"
                  strokeWidth="3"
                />
                <line
                  x1="150"
                  y1="75"
                  x2="210"
                  y2="75"
                  stroke="#ccc"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-6 text-teal-500">
              APPLY EASILY WITH PHARMCAS
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 mb-12 text-lg">
              The Pharmacy College Application Service (PharmCAS) is a
              centralized application service to apply to multiple Doctor of
              Pharmacy (Pharm.D.) degree programs offered by schools and
              colleges of pharmacy. PharmCAS is designed for first-year
              professional Pharm.D programs. High school students and current
              student pharmacists who wish to transfer to another pharmacy
              degree program should contact institutions directly for
              instructions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-teal-500 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-bold mb-2">134</h3>
                <p className="text-lg">Participating Schools in PharmCAS</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-2">12,000+</h3>
                <p className="text-lg">Number of PharmCAS Applicants</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-2">141</h3>
                <p className="text-lg">Total Number of Pharmacy Schools</p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-yellow-500 rounded-lg overflow-hidden w-[80%] mx-auto">
              <div className="grid md:grid-cols-2 gap-0 ">
                <div >
                  <img
                    src={img3}
                    alt="Events"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Upcoming Events
                  </h2>
                  <p className="text-white mb-4 text-lg">
                    View the{" "}
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-teal-200"
                    >
                      Upcoming Events page
                    </a>{" "}
                    on the{" "}
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="italic underline hover:text-teal-200"
                    >
                      Pharmacy is Right for Me website
                    </a>{" "}
                    to see what events are happening at our colleges and schools
                    of pharmacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preparing to Apply Section */}
        <section className="py-16 bg-white">
          <div className="container w-[80%] mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-teal-500">
                  PREPARING TO APPLY TO PHARMACY SCHOOL?
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Find out everything you need to know about the application
                  process and download the PharmCAS Application Instructions.
                </p>
                <Link
                  to="/application-instructions"
                  className="bg-teal-500 text-white px-6 py-3 rounded font-medium hover:bg-teal-600 inline-block"
                >
                  GET STARTED
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-8 border-yellow-500 transform w-[80%] scale-110"></div>
                <img
                  src={img6}
                  alt="Preparing to apply"
                  className="rounded-full relative z-10 w-[80%] h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* International Students Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-8 border-red-500 transform scale-110"></div>
                <img
                  src={img7}
                  alt="International Students"
                  className="rounded-full relative z-10 mx-auto w-full h-auto"
                />
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-4 text-teal-500">
                  APPLYING AS AN INTERNATIONAL STUDENT?
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Learn about the requirements and application process for
                  international students.
                </p>
                <Link
                  to="/application-instructions/international-students"
                  className="bg-teal-500 text-white px-6 py-3 rounded font-medium hover:bg-teal-600 inline-block"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-teal-500">
                  CONSIDERING A CAREER IN PHARMACY?
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Discover a diverse and rewarding career with opportunities for
                  patient care, scientific research, and innovation. Pharmacy
                  might be right for you!
                </p>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 text-white px-6 py-3 rounded font-medium hover:bg-teal-600 inline-block"
                >
                  LEARN MORE
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-8 border-green-500 transform w-[80%]  scale-110"></div>
                <img
                  src={img4}
                  alt="Career in Pharmacy"
                  className="rounded-full relative z-10  w-[80%]  "
                />
              </div>
            </div>
          </div>
        </section>

        {/* Important Dates Section */}
        <section className="py-16 bg-teal-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-white">
              IMPORTANT DATES
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-full h-24 w-24 flex flex-col items-center justify-center border-4 border-yellow-500">
                  <span className="text-teal-500 text-sm">APR</span>
                  <span className="text-3xl font-bold">01</span>
                </div>
                <p className="mt-4 text-white max-w-xs">
                  6th Final (enforced) application deadline
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-full h-24 w-24 flex flex-col items-center justify-center border-4 border-yellow-500">
                  <span className="text-teal-500 text-sm">APR</span>
                  <span className="text-3xl font-bold">15</span>
                </div>
                <p className="mt-4 text-white max-w-xs">
                  Spring Academic Update Opens
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-full h-24 w-24 flex flex-col items-center justify-center border-4 border-yellow-500">
                  <span className="text-teal-500 text-sm">MAY</span>
                  <span className="text-3xl font-bold">01</span>
                </div>
                <p className="mt-4 text-white max-w-xs">
                  7th Final (enforced) application deadline
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Link
                to="/calendar"
                className="bg-green-600 text-white px-6 py-3 rounded font-medium hover:bg-green-700 inline-block"
              >
                SEE ALL
              </Link>
            </div>
          </div>
        </section>

        {/* PharmGrad Section */}
        
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* About PharmCAS */}
           

            {/* Application Instructions */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                Application Instructions
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/application-instructions/before-you-apply"
                    className="text-gray-300 hover:text-white"
                  >
                    Before You Apply
                  </Link>
                </li>
                <li>
                  <Link
                    to="/application-instructions/deadlines"
                    className="text-gray-300 hover:text-white"
                  >
                    Deadlines
                  </Link>
                </li>
                <li>
                  <Link
                    to="/application-instructions/fees-and-fee-waivers"
                    className="text-gray-300 hover:text-white"
                  >
                    Fees and Fee Waivers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/application-instructions/transcripts"
                    className="text-gray-300 hover:text-white"
                  >
                    Transcripts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/application-instructions/coursework"
                    className="text-gray-300 hover:text-white"
                  >
                    Coursework
                  </Link>
                </li>
              </ul>
            </div>

            {/* Applicant Conduct & School Directory */}
            <div>
              <h3 className="text-xl font-bold mb-4">Applicant Conduct</h3>
              <ul className="space-y-2 mb-6">
                <li>
                  <Link
                    to="/applicant-conduct/applicant-responsibilities"
                    className="text-gray-300 hover:text-white"
                  >
                    Applicant Responsibilities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/applicant-conduct/code-of-conduct"
                    className="text-gray-300 hover:text-white"
                  >
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link
                    to="/applicant-conduct/cooperative-admissions-guidelines"
                    className="text-gray-300 hover:text-white"
                  >
                    Cooperative Admissions Guidelines
                  </Link>
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4">School Directory</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/school-directory/pharmd-directory"
                    className="text-gray-300 hover:text-white"
                  >
                    Pharm.D. Directory
                  </Link>
                </li>
                <li>
                  <Link
                    to="/school-directory/explore-and-compare"
                    className="text-gray-300 hover:text-white"
                  >
                    Compare Pharm.D. Programs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Helpful Resources */}
            <div>
              <h3 className="text-xl font-bold mb-4">Helpful Resources</h3>
              <ul className="space-y-2 mb-6">
                <li>
                  <a
                    href="https://help.liaisonedu.com/PharmCAS_Applicant_Help_Center"
                    className="text-gray-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Applicant Help Center
                  </a>
                </li>
                <li>
                  <Link
                    to="/helpful-resources/tools-tips-and-tutorials"
                    className="text-gray-300 hover:text-white"
                  >
                    Tools, Tips, and Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/helpful-resources/pre-pharmacy-prep"
                    className="text-gray-300 hover:text-white"
                  >
                    Pre-Pharmacy Prep
                  </Link>
                </li>
                <li>
                  <a
                    href="https://pharmacyforme.org/"
                    className="text-gray-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About Pharmacy
                  </a>
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4">Calendar</h3>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300 mb-2">
                Hours: Monday – Friday
                <br />
                9:00 am – 5:00 pm (Eastern Time)
              </p>
              <p className="text-gray-300 mb-2">Telephone: 617-612-2050</p>
              <p className="text-gray-300 mb-2">
                Email:{" "}
                <a
                  href="mailto:support@pharmcas.myliaison.com"
                  className="hover:underline"
                >
                  support@pharmcas.myliaison.com
                </a>
              </p>
              <p className="text-gray-300">
                Mailing Address:
                <br />
                P.O. Box 9109
                <br />
                Watertown, MA 02471
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        {/* <div className="border-t border-gray-700 py-6">
          <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
            <p>
              © 2024 PharmCAS. All Rights Reserved. |{" "}
              <Link to="/privacy-policy-and-terms-of-use" className="hover:text-white">
                Privacy Policy & Terms of Use
              </Link>{" "}
              |{" "}
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>{" "}
              |{" "}
              <a href="https://www.aacp.org/" className="hover:text-white" target="_blank" rel="noopener noreferrer">
                AACP
              </a>
            </p>
          </div>
        </div> */}
      </footer>
    </div>
  );
}
