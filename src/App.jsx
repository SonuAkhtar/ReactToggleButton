import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div className={`container ${isDark && "dark"}`}>
        <div className="wrapper" onClick={() => setIsDark(!isDark)} />
      </div>
    </>
  );
}

export default App;
