import { FC, useCallback, useEffect, useState } from "react";
import { Scroller } from "../../hooks/useScrollSettings";
import { StyledBackToTop } from "./styles";
import { BsArrowUp } from "react-icons/bs";

interface Props {
  scroller: Scroller;
  getTexts: (key: string) => {
    [key: string]: string;
  };
}

const BackToTop: FC<Props> = ({ scroller, getTexts }) => {
  const text = getTexts("backToTop");
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(
    (t) => {
      if (!showScroll && t.scroll.y > 400) {
        setShowScroll(true);
      } else if (showScroll && t.scroll.y <= 400) {
        setShowScroll(false);
      }
    },
    [showScroll]
  );

  useEffect(() => {
    scroller?.on("scroll", checkScrollTop);
  }, [checkScrollTop, scroller]);

  return (
    <StyledBackToTop
      onClick={() => scroller.scrollTo("top", {})}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      <span>
        {text.back} <BsArrowUp />
      </span>
    </StyledBackToTop>
  );
};

export default BackToTop;
