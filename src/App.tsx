import { useEffect, useState } from "react";
import Background from "./components/Background";
import SocialMedia from "./components/SocialMedia";
import Section from "./components/Section";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const handleChange = (e: { matches: boolean }) => {
      setIsDarkMode(e.matches);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Background isDarkMode={isDarkMode} handleClick={handleClick}>
        <div className="flex flex-col p-5 justify-around h-screen gap-[200px]">
          <Section isDarkMode={isDarkMode} />
          <SocialMedia isDarkMode={isDarkMode} />
        </div>
      </Background>
    </>
  );
}

export default App;
