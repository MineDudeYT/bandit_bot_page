import Link from 'next/link';
import { motion } from 'framer-motion';

const Showcase = () => {
  const handleButtonClick = () => {
    const confirmationMessage = "If you attempt to add the bot to your server before purchasing access and talking to G0Osey21#0000 on Discord, the bot will instantly leave your server. (You may also need to allow redirects for this to send you to Discord)";
    if (window.confirm(confirmationMessage)) {
      window.open('https://discord.com/oauth2/authorize?client_id=1137832494142587020&permissions=8&scope=bot', '_blank');
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <main className="showcase">
        <h1 className="showcase-header h-color">BANDIT</h1>
        <h2 className="showcase-header-text h-color">
          The greatest Complex Factions Discord Bot!
        </h2>
        <p className="showcase-para p-color">
          The best Discord bot for linking ComplexMC Factions with your Discord server!
          Includes many commands to fit your needs within your discord server.
        </p>
        <div className="showcase-btn">
          <button className="btn" onClick={handleButtonClick}>
            <p className="h-color no-decoration">
              Invite now!
            </p>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Showcase;
