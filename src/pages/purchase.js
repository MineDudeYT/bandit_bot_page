import Head from "next/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function Purchase() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Purchase | Bandit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Purchase
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Minecraft 🎮
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>.m f who (faction name or player name)</kbd> -{" "}
                  <span className="p-color">Displays faction information for specified faction or player.</span>
                </li>
                <li>
                  <kbd>.m ftop (number - optional)</kbd> -{" "}
                  <span className="p-color">Displays ftop information.</span>
                </li>
                <li>
                  <kbd>.m pvptop (number - optional)</kbd> -{" "}
                  <span className="p-color">Displays pvptop information.</span>
                </li>
                <li>
                  <kbd>.m f list (number - optional)</kbd> -{" "}
                  <span className="p-color">Displays f list information.</span>
                </li>
                <li>
                  <kbd>.m f corner</kbd> -{" "}
                  <span className="p-color">Displays world corner claim information.</span>
                </li>
                <li>
                  <kbd>.outpost</kbd> -{" "}
                  <span className="p-color">Displays outpost information.</span>
                </li>
                <li>
                  <kbd>.seen (player name)</kbd> -{" "}
                  <span className="p-color">Displays player last seen time.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Shardsearch 🗺️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>.shardsearch</kbd> -{" "}
                  <span className="p-color">Runs shardsearch for your set shard.</span>
                </li>
                <li>
                  <kbd>.shardsearch setchannel</kbd> -{" "}
                  <span className="p-color">Sets the channel for intervaled shardsearches (specific to your server). Must be ran in the channel you're setting it to. Only able to be used by server owners.</span>
                </li>
                <li>
                  <kbd>.shardsearch setworld (shard name)</kbd> -{" "}
                  <span className="p-color">Sets the shard for shardsearches (specific to your server). Must be ran in the channel you're setting it to. Only able to be used by server owners.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              Moderation ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>.whitelist adduser (user mention)</kbd> -{" "}
                  <span className="p-color">Gives Discord user access to the bot's commands. Only able to be used by server owners.</span>
                </li>
                <li>
                  <kbd>.whitelist removeuser (user mention)</kbd> -{" "}
                  <span className="p-color">Removes Discord user access to the bot's commands. Only able to be used by server owners.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
