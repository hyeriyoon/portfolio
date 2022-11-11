import React, {useEffect,useState,useRef} from 'react';
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

// Text typing component
function TextTypingAnimation(props) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDelete, setIsDelete] = useState(false);

  const timeoutRef = useRef(null);
  const displayedTextRef = useRef("");

  useEffect(() => {
    if (props.texts?.length !== 0) {
      const isEmptyDisplay = displayedTextRef.current === "";
      // to extra delay in order to show fully text
      const shouldDelayNextProcess =
        isDelete &&
        displayedTextRef.current.length === props.texts[textIndex].length;

      displayedTextRef.current = props.texts[textIndex].substr(0, charIndex);

      timeoutRef.current = setTimeout(
        () => {
          if (isDelete && isEmptyDisplay) {
            // when finish the deletion of current text, then start displaying next text index
            // if it's the last index already, then start the first text index
            setIsDelete(false);
            setTextIndex((prevTextIndex) =>
              prevTextIndex + 1 < props.texts.length ? prevTextIndex + 1 : 0
            );
          } else if (
            isDelete ||
            displayedTextRef.current === props.texts[textIndex]
          ) {
            // if the current text is displayed fully OR on deletion process,
            // then decrease sub-string index of current text to start deletion process
            setIsDelete(true);
            setCharIndex((prevSubIndex) =>
              prevSubIndex !== -1 ? prevSubIndex - 1 : 0
            );
          } else if (
            !isDelete &&
            displayedTextRef.current !== props.texts[textIndex]
          ) {
            // if it is not on deletion process and the full text has not been displayed yet
            // then increase sub-string index of current text
            setCharIndex((prevCharIndex) =>
              prevCharIndex + 1 <= props.texts[textIndex].length
                ? prevCharIndex + 1
                : 0
            );
          }
        },
        shouldDelayNextProcess ? 1500 : 150 - Math.random() * 100
      );
    }

    return () => clearTimeout(timeoutRef.current);
  }, [props.texts, charIndex, textIndex, isDelete]);

  return (
    <span className={props.className}>
      {displayedTextRef.current}
      <span className="cursor">|</span>
    </span>
  );
}

// App component
const App = () => {
  const buttonRef = useRef();
  return (
    <>
      <TextTypingAnimation className="block" key="line-0" texts={[]} />
      <TextTypingAnimation className="block" key="line-1" texts={["Hello!"]} />
      <TextTypingAnimation
        key="line-2"
        className="block"
        texts={["Example text 1", "Example text 2"]}
      />
    </>
  );
};

export default TextTypingAnimation;