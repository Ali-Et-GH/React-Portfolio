import Navigation from "./components/Navigation";
import Providers from "./components/providers";
import Router from "./components/Router";
import ThemeButton from "./components/ThemeButton";

export default function App() {

  return (
    <Providers>
      <ThemeButton/>
      <Router/>
      <Navigation/>
    </Providers>
  )
}