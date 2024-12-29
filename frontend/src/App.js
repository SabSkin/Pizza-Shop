import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Main from "./components/Main/Main";
import Cart from "./components/CartPage/CartPage";
import Order from "./components/CartPage/Order/Order";
import Admin from "./components/Admin/Admin";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="basket" element={<Cart />} />
            <Route path="order" element={<Order />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
