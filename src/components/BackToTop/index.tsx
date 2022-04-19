import { FC, useCallback, useEffect, useState } from "react";
import { Scroller } from "../../hooks/useScrollSettings";
import { StyledBackToTop } from "./styles";
import { BsArrowUp } from "react-icons/bs";
import useLanguageContext from "../../hooks/useLanguageContext";

interface Props {
  scroller: Scroller;
}

const BackToTop: FC<Props> = ({ scroller }) => {
  const {
    dispatch: { getTexts },
  } = useLanguageContext();
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
        <span className="text">{text.back}</span> <BsArrowUp />
      </span>
    </StyledBackToTop>
  );
};

export default BackToTop;
