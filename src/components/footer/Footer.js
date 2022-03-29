import "./footer.css";
import Logo_lg from "../../assets/Logo_lg.svg"

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-body">
        <div className="company-logo">
          <img className="logo" src={Logo_lg} alt="img" />
        </div>

        <div className="footer-info">
          <div className="status-section">
            <div className="status-icon">
              <p className="status-paragraph">{props.footerInfo?.Status}</p>
              <p className="status-icon">{props.footerInfo?.Icon}</p>
            </div>
          </div>

          <div className="name-EC">
            <div>
              <p className="name-EC-paragraph">Engineers-Cradle</p>
            </div>
            <div className="version">
              <p className="version-paragraph">{props.footerInfo?.version}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
