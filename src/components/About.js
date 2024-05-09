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
                We have more than 200 commands support in this bot.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ 24/7 Support</h4>
              <p className="p-color">
                The biggest support community server for the bot available for
                you anytime.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✏️ Customization</h4>
              <p className="p-color">
                Fully customizable discord bot completely FREE!
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
