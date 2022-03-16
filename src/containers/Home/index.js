import React from "react";
import Hero from "../../components/Hero";
import { Gif, Intro } from "./styles";
import trustCode from "../../images/gifs/Home_trust_code.gif";

function Home() {
  return (
    <div>
      <Hero />
      <Intro>
        <span className="title">FREE PLAY</span>
        <span className="description">
          <p>
            JAKA is a company builder and seed fund investing and creating
            products that empower people and remove barriers for growth, trust,
            and creative realization.
          </p>
          <p>We focus on Fintech, Crypto, Media, Play-to-earn, and Art.</p>
          <p>
            We love Fintech because money is energy, trust, and fuel for
            creative endeavors. So, by developing better tools and services to
            improve humans’ relationship with money – we are empowering our
            human divine right to create.
          </p>
          <p>
            We believe everybody is an artist, therefore we are all creative
            beings capable of creating and inspiring others. We use our artistic
            capabilities to find ways of creating value and ultimately a better
            world.
          </p>
          <p>
            A better world for us is a civilization where everybody can have
            access to challenge and support to grow into their best version
            without harming others or the environment. A world where freedom,
            health, and love are accessible to everybody.
          </p>
          <p>
            We partner with entrepreneurs, investors, and artists who are kind
            and ambitious. Who are not afraid to work and take risks to turn
            their inspired vision into a reality. We love working with mindful
            and grateful people. If you are one of them, please connect with us.{" "}
          </p>
        </span>
        <Gif>
        <div>
          <img alt="trust" src={trustCode} />
        </div>
      </Gif>
      </Intro>
    </div>
  );
}

export default Home;
