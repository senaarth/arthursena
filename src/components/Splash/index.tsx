import React from "react";
import Typed from "typed.js";

import { Container } from "./styles";

export function Splash() {
  const [animation, setAnimation] = React.useState(false);
  const [fade, setFade] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const [lastSplash, setLastSplash] = React.useState<number | null>(null);
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el?.current, {
      onComplete: () => setAnimation(true),
      strings: ["SenaArth", "Dev", ""],
      startDelay: 0,
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 80,
      loop: false,
      showCursor: false,
    });

    // eslint-disable-next-line consistent-return
    return () => {
      typed.destroy();
    };
  }, []);

  React.useEffect(() => {
    if (!localStorage.getItem("@Sena:lastTime")) return;

    const date = new Date();
    const lastDate = new Date(
      JSON.parse(localStorage.getItem("@Sena:lastTime"))
    );

    let diff = (date.getTime() - lastDate.getTime()) / 1000;

    diff /= 60;

    setLastSplash(Math.abs(Math.round(diff)));

    if (Math.abs(Math.round(diff)) < 10) setAnimation(true);
  }, []);

  React.useEffect(() => {
    if (animation) {
      setTimeout(
        () => {
          setFade(true);
        },
        lastSplash > 10 || lastSplash === null ? 600 : 600
      );

      setTimeout(
        () => {
          setFinished(true);
        },
        lastSplash > 10 || lastSplash === null ? 900 : 800
      );

      if (lastSplash > 10 || lastSplash === null) {
        localStorage.setItem("@Sena:lastTime", JSON.stringify(new Date()));
      }
    }
  }, [animation]);

  return finished ? null : (
    <Container className="splash" style={{ opacity: fade ? 0 : 1 }}>
      <span
        className={
          animation
            ? `${lastSplash > 10 || lastSplash === null ? "zoom" : "rotate"}`
            : ""
        }
      >
        {"<"}
        {(lastSplash > 10 || lastSplash === null) && <span ref={el} />}
        {"/>"}
      </span>
    </Container>
  );
}
