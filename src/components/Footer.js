export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/images/footer-logo.svg" alt="logo" />
            <span>Nexcent</span>
          </div>
          <div className="copyright">
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className="footer-social">
            <a href="#!">
              <img src="/images/insta.svg" alt="social-icon" />
            </a>
            <a href="#!">
              <img src="/images/dribble.svg" alt="social-icon" />
            </a>
            <a href="#!">
              <img src="/images/twitter.svg" alt="social-icon" />
            </a>
            <a href="#!">
              <img src="/images/youtube.svg" alt="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="company">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#!">About us</a>
              </li>
              <li>
                <a href="#!">Blog</a>
              </li>
              <li>
                <a href="#!">Contact us</a>
              </li>
              <li>
                <a href="#!">Pricing</a>
              </li>
              <li>
                <a href="#!">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="support">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#!">Help center</a>
              </li>
              <li>
                <a href="#!">Terms of service</a>
              </li>
              <li>
                <a href="#!">Legal</a>
              </li>
              <li>
                <a href="#!">Privacy policy</a>
              </li>
              <li>
                <a href="#!">Status</a>
              </li>
            </ul>
          </div>
          <div className="email">
            <h3>Stay up to date</h3>
            <div className="input">
              <input type="text" placeholder="Your email address" />
              <img src="/images/send.svg" alt="send-icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
