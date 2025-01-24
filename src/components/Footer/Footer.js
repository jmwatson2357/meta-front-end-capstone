import { Link } from "react-router-dom";
import small_logo from "../../images/Logo.svg";
import { useNavList } from "../../lib/navList";
import "./Footer.css";

const Footer = () => {
  const { contactList, navList, socialList } = useNavList();
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={small_logo} alt="" />
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            {navList.map((link) => (
              <li className="footer-link" key={link.key}>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            {contactList.map((item) => (
              <li key={item.key} className="footer-link">
                <p className="my-0">{item.label}</p>
                <p className="my-0 footer-link">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            {socialList.map((social) => (
              <li key={social.key} className="footer-link">
                <Link to={social.url}>{social.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export { Footer };
