import React from "react";
import FooterCol from "./FooterCol";
import { footerLinks } from '../../CommonUtils/uiConstant'
import "./Footer.css"


const FooterComponent = () => {
  return (
    <>
      <div className="footerSection">
        <div className="footerContainer">
          <div className="footer__col1">
            <h3 className="footer__col1__title">My Restaurant</h3>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nostrum accusamus itaque nemo quaerat rerum alias magni quo hic a,
              modi, ad unde. Recusandae, possimus laudantium.
            </p>
          </div>
          <div className="footer__col2">
            <FooterCol
              heading="Important Links"
              links={
                footerLinks.importantLinks
              }
            />
          </div>
          <div className="footer__col3">
            <FooterCol
              heading="Contact Info"
              links={footerLinks.contactLinks}
            />
          </div>
          <div className="footer__col4">
            <FooterCol
              heading="social Links"
              links={footerLinks.socialLinks}
            />
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p className="text-secondary">
              © 2023 - My Restaurant | Designed By{" "}
              <a target="_blank" className="text-light" rel="noreferrer" href="http://google.com">
                Dharmesh Waikar
              </a>{" "}
            </p>
          </div>
        </div>
      </div >
    </>
  );
};

export default FooterComponent;
