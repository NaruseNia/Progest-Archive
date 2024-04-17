import "./App.scss";
import { Canvas } from "@react-three/fiber";
import { NoiseBackground } from "./components/three/background";
import { FirstScreen } from "./screens/FirstScreen";
import { Route, Routes } from "react-router-dom";
import { FirstSettingScreen } from "./screens/FirstSettingScreen";

function App() {
  return (
    <div className="container relative z-10">
      <Routes>
        <Route path="/" Component={FirstScreen} />
        <Route path="/setting-first" Component={FirstSettingScreen} />
      </Routes>
      <Canvas className="z-0 pointer-events-none bg_elm">
        <NoiseBackground />
      </Canvas>
    </div>
  );
}

export default App;
