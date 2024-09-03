import { useEffect, useState } from "react";
import Background from "./components/Background";
import SocialMedia from "./components/SocialMedia";

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
        <SocialMedia isDarkMode={isDarkMode} />
      </Background>
    </>
  );
}

export default App;
