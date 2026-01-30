import './App.css'
import {useLocation} from "react-router-dom";

export default function App() {
  const location = useLocation();

  return (
    <>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<></>}/>
    </Routes>
    </>
  )
}
