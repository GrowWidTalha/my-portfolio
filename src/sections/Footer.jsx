const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="flex text-white-500 gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
          <a href="https://github.com/growwidtalha" className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
          <a className="social-icon" href="https://linkedin.com/in/growwithtalha-webdeveloper">
            <img
              src="/assets/linkedin.svg"
              alt="github"
              className="w-1/2 h-1/2 text-white"
            />
          </a>
          <a href="https://x.com/GrowWith_Talha" className="social-icon">
            <img
              src="/assets/twitter.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
      </div>
      <p className="text-white-500">© 2024 Talha. All rights reserved.</p>
    </section>
  );
};

export default Footer;
