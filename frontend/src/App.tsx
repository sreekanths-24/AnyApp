import { useEffect, useState } from "react";
import AppRouter from "./app/router/AppRouter";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return <AppRouter />;
}

export default App;