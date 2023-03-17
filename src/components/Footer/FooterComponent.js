import React from "react";
import FooterCol from "./FooterCol";
import "./Footer.css"

const FooterComponent = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="container1">
          <div className="footer__col1">
            <h3 className="footer__col1__title">My Restaurant</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nostrum accusamus itaque nemo quaerat rerum alias magni quo hic a,
              modi, ad unde. Recusandae, possimus laudantium.
            </p>
          </div>
          <div className="footer__col2">
            <FooterCol
              heading="Important Links"
              links={[
                {
                  title: "Home",
                  path: "/",
                  type: "Link",
                },
                {
                  type: "Link",
                  title: "About",
                  path: "/about",
                },
              ]}
            />
          </div>
          <div className="footer__col3">
            <FooterCol
              heading="Contact Info"
              links={[
                {
                  title: "+88012312",
                  path: "tel:+88012312",
                },
                {
                  title: "google@gmail.com",
                  path: "googlemail@gmail.com",
                }
              ]}
            />
          </div>
          <div className="footer__col4">
            <FooterCol
              heading="social Links"
              links={[
                {
                  title: "Facebook",
                  path: "http://facebook.com",
                },
                {
                  title: "Twitter",
                  path: "http://twitter.com",
                },
                {
                  title: "Instagram",
                  path: "http://instagram.com",
                },
              ]}
            />
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p>
              © 2023 - My Restaurant | Designed By{" "}
              <a target="_blank" rel="noreferrer" href="http://google.com">
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
