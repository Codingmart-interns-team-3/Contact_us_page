import ContactPage from "./components/ContactPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ContactPage />
      <ToastContainer/>
    </div>
  );
}

export default App;
