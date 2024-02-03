import "./App.css";
import SocialMediaLinkes from "./components/footer/socialmedialinkes";
import Header from "./components/header/header";
import Plans from "./components/header/plans";
import Differrent from "./components/page/differrent";

function App() {
  return (
    <div>
      <Header />
      <Plans />
      <Differrent />
      <SocialMediaLinkes />
    </div>
  );
}
// import family2 from "../../assets/image-intro-mobile.jpg";

//<img src={family2} alt="" />

export default App;
