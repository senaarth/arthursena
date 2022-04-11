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
    if (!localStorage.getItem("@Sena:lastTime")) return;

    const date = new Date();
    const lastDate = new Date(
      JSON.parse(localStorage.getItem("@Sena:lastTime"))
    );

    let diff = (date.getTime() - lastDate.getTime()) / 1000;

    diff /= 60;

    setLastSplash(Math.abs(Math.round(diff)));

    if (Math.abs(Math.round(diff)) < 5) setAnimation(true);
  }, []);

  React.useEffect(() => {
    if (animation) {
      setTimeout(
        () => {
          setFade(true);
        },
        lastSplash > 5 || lastSplash === null ? 2000 : 800
      );

      setTimeout(
        () => {
          setFinished(true);
        },
        lastSplash > 5 || lastSplash === null ? 3000 : 1200
      );

      if (lastSplash > 5 || lastSplash === null) {
        localStorage.setItem("@Sena:lastTime", JSON.stringify(new Date()));
      }
    }
  }, [animation]);

  return finished ? null : (
    <Container className="splash" style={{ opacity: fade ? 0 : 1 }}>
      <span
        className={
          animation
            ? `${lastSplash > 5 || lastSplash === null ? "zoom" : "rotate"}`
            : ""
        }
      >
        {"<"}
        {(lastSplash > 5 || lastSplash === null) && <span ref={el} />}
        {"/>"}
      </span>
    </Container>
  );
}
