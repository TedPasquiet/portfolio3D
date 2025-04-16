import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Réseaux sociaux</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a
                href={socialImg.imgHref}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={socialImg.imgPath} alt="reseaux sociaux" />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ted Pasquiet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
