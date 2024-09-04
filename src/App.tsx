import Background from "./components/Background";
import SocialMedia from "./components/SocialMedia";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Background>
        <div className="flex flex-col items-center min-h-screen lg:px-[100px] gap-[100px]">
          <div className="flex flex-col h-screen -mt-2 justify-center gap-[200px]">
            <Profile />
            <SocialMedia />
          </div>
          <div className="flex flex-col gap-[200px]">
            <Info />
            <Projects />
          </div>
        </div>
      </Background>
    </>
  );
}

export default App;
