const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="flex text-white-500 gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/growwidtalha">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://linkedin.com/in/growwithtalha-webdeveloper">
            <img
              src="/assets/linkedin.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/GrowWith_Talha">
            <img
              src="/assets/twitter.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>
      <p className="text-white-500">© 2024 Talha. All rights reserved.</p>
    </section>
  );
};

export default Footer;
