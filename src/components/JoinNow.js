import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="joinUs-para p-color">
          Invite our bot to your Discord server!{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="#">
            Invite now!
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
