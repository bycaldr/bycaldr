import { SocialIcon } from "../atoms/social-icon";

const Homepage = () => (
  <>
    <main className="d-flex flex-column align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img className="avatar" src="/avatar.jpg" alt="" />
            <h1>Lukáš Caldr</h1>
            <p>
              Web platforms focused engineer based in Prague. Building product
              as CTO of proptech startup{" "}
              <a href="https://www.reas.cz">reas.cz</a>. JavaScript and
              React enthusiast. Catch me on 👇
            </p>
            <div className="socials d-flex align-items-center justify-content-center">
              <a href="https://medium.com/@bycaldr">
                <SocialIcon type="medium" />
              </a>
              <a href="https://www.linkedin.com/in/luk%C3%A1%C5%A1-caldr-36788b64">
                <SocialIcon type="linkedin" />
              </a>
              <a href="https://www.instagram.com/bycaldr/">
                <SocialIcon type="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <style jsx>{`
      main {
        text-align: center;
        padding: 20px 0 0;
      }

      @media (min-width: 768px) {
        main {
          padding: 0 0 100px;
          height: 100vh;
        }
      }

      main p {
        max-width: 450px;
        margin: 0 auto;

        line-height: 1.4;
      }

      .avatar {
        border-radius: 50%;
        width: 200px;
        height: 200px;
      }

      .socials {
        margin: 25px 0 0;
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
