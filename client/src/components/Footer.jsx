import logo from "../assets/logo.png";
import { socialMedia, footerLinks } from "../Constants/index";

const Footer = () => {
  return (
    <footer className="text-white max-container">
      <div className="flex justify-between gap-20 flex-wrap items-start max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">Apollo Om</a>
          <p className="mt-6 leading-7 text-base sm:max-w-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            sequi rerum quod, maiores quaerat provident unde tenetur tempora
            reprehenderit ab illum, impedit exercitationem!
          </p>
          <div className="flex items-center gap-5 mt-6">
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between flex-wrap lg:gap-10 px-24">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 leading-normal text-base hover:text-[#003B1C]">
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
