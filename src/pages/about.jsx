import catLogo from '../assets/ico/cat-gray.svg';
import catLogoP from '../assets/ico/cat-purple.svg';
import catLogoO from '../assets/ico/cat-orange.svg';
import catLogoW from '../assets/ico/cat-white.svg';

const About = () => {
  return (
    <div className="content">
      <div className="container">
        {/* Hero */}
        <section className="py-5 text-center">
          <div className="container">
            <h1 className="display-4">About THYNK</h1>
            <p className="lead">
              More than just a learning platform — we’re a community, a game, a journey ✨
            </p>
            <a href="/register" className="btn btn-secondary btn-lg mt-3">
              Join the community
            </a>
          </div>
        </section>

        {/* Mission */}
        <section className="py-5">
          <div className="container">
            <h2 className="mb-4 text-center">Our Mission</h2>
            <p className="text-center lead">
              We believe learning should be fun, social, and available to everyone. <br />
              THYNK is here to transform boring studying into something exciting, meaningful, and joyful.
            </p>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">How We Work</h2>
            <div className="row text-center d-flex justify-content-center">
              <div className="col-md-3">
                <h4>🎯 Goal-based</h4>
                <p>Track your own path and see results</p>
              </div>
              <div className="col-md-3">
                <h4>🧠 Gamified</h4>
                <p>Level up, earn badges, enjoy every step</p>
              </div>
              <div className="col-md-3">
                <h4>👯‍♀️ Social</h4>
                <p>Connect, compete, and grow together</p>
              </div>
              <div className="col-md-3">
                <h4>🌍 Accessible</h4>
                <p>Free for everyone, always</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Meet the Team</h2>
            <div className="row text-center d-flex justify-content-center">
              <div className="col-md-2 bg-warning">
                <img src={catLogo} alt={catLogo}/>
                <h5>Artemii</h5>
                <p>Founder & CTO</p>
              </div>
              <div className="col-md-2 bg-success">
                <img src={catLogoO} alt={catLogoO}/>
                <h5>Vasyl</h5>
                <p>UX Witch & Love Officer</p>
              </div>
              <div className="col-md-2 bg-primary">
                <img src={catLogoW} alt={catLogoW}/>
                <h5>Misha</h5>
                <p>Productive SEO</p>
              </div>
              <div className="col-md-2  bg-secondary">
                <img src={catLogoP} alt={catLogoP}/>
                <h5>Marian</h5>
                <p>Creative Designer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">What Our Users Say</h2>
            <div className="row">
              <div className="col-md-4">
                <blockquote className="blockquote">
                  <p>
                    “I never thought I’d enjoy studying like this. THYNK made me fall in love
                    with learning again!”
                  </p>
                  <footer className="blockquote-footer">Nastia, student</footer>
                </blockquote>
              </div>
              <div className="col-md-4">
                <blockquote className="blockquote">
                  <p>
                    “The friend system is genius. I come back every day just to beat my friends”
                  </p>
                  <footer className="blockquote-footer">Kolya, developer</footer>
                </blockquote>
              </div>
              <div className="col-md-4">
                <blockquote className="blockquote">
                  <p>
                    “Напевно, це найкращий сервіс з таким дизайном та класними ШРИФТАМИ, дякую за кирилицю {'<'}3”
                  </p>
                  <footer className="blockquote-footer">John Doe, who are me?</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
