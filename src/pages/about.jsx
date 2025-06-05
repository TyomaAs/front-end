import catLogo from '../assets/ico/cat-gray.svg';

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
            <p className="text-center">
              We believe learning should be fun, social, and available to everyone. <br />
              THYNK is here to transform boring studying into something exciting, meaningful, and joyful.
            </p>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">How We Work</h2>
            <div className="row text-center">
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
            <div className="row text-center">
              <div className="col-md-4">
                <img src={catLogo} alt={catLogo}/>
                <h5>Artemiy</h5>
                <p>Founder & CTO</p>
              </div>
              <div className="col-md-4">
                <img src={catLogo} alt={catLogo}/>
                <h5>Vasyl Syn'ko</h5>
                <p>UX Witch & Love Officer</p>
              </div>
              <div className="col-md-4">
                <img src={catLogo} alt={catLogo}/>
                <h5>John Doe</h5>
                <p>UX Witch & Love Officer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">What Our Users Say</h2>
            <div className="row">
              <div className="col-md-6">
                <blockquote className="blockquote">
                  <p>
                    “I never thought I’d enjoy studying like this. THYNK made me fall in love
                    with learning again!”
                  </p>
                  <footer className="blockquote-footer">Alyona, student</footer>
                </blockquote>
              </div>
              <div className="col-md-6">
                <blockquote className="blockquote">
                  <p>
                    “The friend system is genius. I come back every day just to beat my friends 😈”
                  </p>
                  <footer className="blockquote-footer">Maksym, developer</footer>
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
