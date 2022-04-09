import React from "react";
import Typed from "typed.js";

import { Container } from "./styles";

export function Splash() {
  const [animation, setAnimation] = React.useState(false);
  const [rotation, setRotation] = React.useState(false);
  const [fade, setFade] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const [lastSplash, setLastSplash] = React.useState(11);
  const el = React.useRef(null);

  React.useEffect(() => {
    if (lastSplash < 5) return;

    const typed = new Typed(el?.current, {
      onComplete: () => setAnimation(true),
      strings: ["SenaArth", "Desenvolvedor", ""],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 400,
      loop: false,
      showCursor: false,
    });

    // eslint-disable-next-line consistent-return
    return () => {
      typed.destroy();
    };
  }, []);

  React.useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setFade(true);
      }, 2000);

      setTimeout(() => {
        setFinished(true);
      }, 3000);

      localStorage.setItem("@Sena:lastTime", JSON.stringify(new Date()));
    }
  }, [animation]);

  React.useEffect(() => {
    if (rotation) {
      setTimeout(() => {
        setFade(true);
      }, 600);

      setTimeout(() => {
        setFinished(true);
      }, 900);
    }
  }, [rotation]);

  React.useEffect(() => {
    const date = new Date();
    const lastDate = new Date(
      JSON.parse(localStorage.getItem("@Sena:lastTime"))
    );

    const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    const utc2 = Date.UTC(
      lastDate.getFullYear(),
      lastDate.getMonth(),
      lastDate.getDate()
    );

    const diff = Math.floor((utc2 - utc1) / (1000 * 60 * 60));

    if (diff >= 0) setLastSplash(diff);
    if (diff < 5 && diff >= 0) setRotation(true);
  }, []);

  return finished ? null : (
    <Container className="splash" style={{ opacity: fade ? 0 : 1 }}>
      {lastSplash < 5 ? (
        <span className={rotation ? "rotate" : ""}>{"</>"}</span>
      ) : (
        <span className={animation ? "zoom" : ""}>
          {"<"}
          <span ref={el} />
          {"/>"}
        </span>
      )}
    </Container>
  );
}
