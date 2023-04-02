//components
import Header from "./components/header/header";
import Home from "./components/home/home";
import DetailView from "./components/details/DetailView";
import Cart from "./components/cart/cart";
import ViewAll from "./components/viewAll/viewAll";
import CompareMobiles from "./components/compare/compareMobiles";
import WishList from "./components/wishList/wishList";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material"; 
import DataProvider from "./context/dataProvider";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header />
        <Box style={{ marginTop: 54}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/allmobiles" element={<ViewAll />} />
            <Route path="/:mobile/:id" element={<DetailView />} />
            <Route path="/compareMobiles" element={<CompareMobiles />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishList" element={<WishList />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
