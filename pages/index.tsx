import Image from "next/image";

import { SocialIcon } from "../atoms/social-icon";

const Homepage = () => (
  <>
    <main>
      <div className="container">
        <div className="inner">
          <div className="avatar">
            <Image src="/avatar.jpg" width={200} height={200} alt="" />
          </div>
          <h1>Lukáš Caldr</h1>
          <p>
            Web platforms focused engineer based in Czech Republic. NodeJS and
            React enthusiast.
          </p>
          <p>
            ATM building{" "}
            <a href="https://infigy.cz" target="_blank">
              infigy.cz
            </a>{" "}
            and{" "}
            <a href="https://getmagnet.io" target="_blank">
              getmagnet.io
            </a>
            . Catch me on 👇
          </p>
          <div className="socials d-flex align-items-center justify-content-center">
            {/* <a href="https://medium.com/@bycaldr">
                <SocialIcon type="medium" />
              </a> */}
            <a href="https://www.linkedin.com/in/luk%C3%A1%C5%A1-caldr-36788b64">
              <SocialIcon type="linkedin" />
            </a>
            {/* <a href="https://www.instagram.com/bycaldr/">
                <SocialIcon type="instagram" />
              </a> */}
          </div>
        </div>
      </div>
    </main>

    <style jsx>{`
      main {
        text-align: center;
      }

      .container {
        padding: 0 15px;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .inner {
        padding: 20px 0 0;
      }

      @media (min-width: 768px) {
        .container {
          justify-content: center;
        }
        .inner {
          padding: 0 0 200px;
        }
      }

      main p {
        max-width: 450px;
        margin: 0 auto 20px;

        line-height: 1.4;
      }

      .avatar {
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
        width: 200px;
        height: 200px;
        position: relative;
      }

      .socials a {
        margin: 0 3px;
      }

      .socials a:hover {
        opacity: 0.75;
      }
    `}</style>
  </>
);

export default Homepage;
