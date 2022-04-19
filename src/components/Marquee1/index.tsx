import { StyledMarquee1 } from "./styles";
import { FaReact } from "react-icons/fa";
import { FC } from "react";
import useLanguageContext from "../../hooks/useLanguageContext";

const Marquee1: FC = () => {
  const {
    dispatch: { getTexts },
  } = useLanguageContext();
  const text = getTexts("marquee1");
  return (
    <StyledMarquee1 data-scroll-section>
      <div className="top">
        <p
          className="text"
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
        >
          <span>{text.openToWork}</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Open to work</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Open to work</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Open to work</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Open to work</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Open to work</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Open to work</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Open to work</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Open to work</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Open to work</span>{" "}
          <span>
            <FaReact />
          </span>
        </p>
      </div>
      <div className="bottom">
        <p
          className="text"
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          <span>{text.fullName}</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>{text.portfolio2022}</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Santiago Molina</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Portfolio 2022</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Santiago Molina</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Santiago Molina</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Portfolio 2022</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Santiago Molina</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Portfolio 2022</span>{" "}
          <span>
            <FaReact />
          </span>{" "}
          <span>Santiago Molina</span>{" "}
          <span>
            <FaReact />
          </span>
        </p>
      </div>
    </StyledMarquee1>
  );
};

export default Marquee1;
