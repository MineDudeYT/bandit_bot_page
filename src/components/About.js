import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why use this bot?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Commands</h4>
              <p className="p-color">
                Tons of commands bringing the game and other strategic elements straight to your Discord server. 
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ Quick Support</h4>
              <p className="p-color">
                If there's ever an issue with the bot, there's a good chance it's already being worked on!
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✏️ Constant Updates</h4>
              <p className="p-color">
                We have a very passionate developer who rolls out new features all of the time.
              </p>
              <hr />
            </div> 
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Check out Commands &rarr;
          </Link>
        </p>
      </section>
    </>
  );
};

export default About;
