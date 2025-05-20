import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const social = [
  {
    Icon: FaFacebookF,
    color: "text-blue-600",
    link: "/",
  },
  {
    Icon: FaTwitter,
    color: "text-blue-600",
    link: "",
  },
  {
    Icon: FaYoutube,
    color: "text-red-600",
    link: "/",
  },
  {
    Icon: FiInstagram,
    color: "text-blue-600",
    link: "/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-transparent text-white py-6">
      <div className="container mx-auto text-center">
        <span className="flex justify-center items-center uppercase text-2xl font-bold my-6 gap-2">
          <h1>Get Social</h1>
          <h1 className="text-yellow-600">#MAGICMEN</h1>
        </span>
        <div className="flex justify-center gap-6 mt-4">
          {social.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl hover:text-opacity-80 ${item.color}`}
            >
              <span className="bg-white block p-1 flex justify-center items-center rounded-full">
                <item.Icon />
              </span>
            </a>
          ))}
        </div>

        <div className="flex justify-between items-center p-4">
          <p className="text-yellow-600 text-sm">© Copyright 2025 MAGICMEN</p>
          <span className="flex items-center gap-2 font-bold  text-sm">
            <a className="border-r border-yellow-600 px-2" href={"/"}>
              <b className="text-yellow-600 text-sm"> ABN 84 314 489 722</b>{" "}
              Privacy Policy
            </a>
            <a className="border-r border-yellow-600 px-2" href={"/"}>
              ROADMAP
            </a>
            <a className="border-r border-yellow-600 px-2" href={"/"}>
              SITEMAP
            </a>
            <a href={"/"}>BLOG</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
