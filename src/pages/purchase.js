import Head from "next/head";
import Link from "next/link";
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
      <main className="showcase">
        <h1 className="showcase-header h-color">Purchase</h1>
        <h2 className="showcase-header-text h-color">
          There are 2 ways to purchase the bot. A one-time purchase of $100 or a base fee of $50 and a monthly subscription of $5. Both ways get you full access to the bot and all of it's commands, but give you a freedom of either going all in or just testing it out. Either are both great options.
        </h2>

        <span className="p-color">Bot is online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Invite now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Join server!
            </Link>
          </button>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}
