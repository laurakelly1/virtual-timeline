import React from "react";
import { Route, Routes } from "react-router";
import CreateItem from "../pages/CreateItem";
import DeleteItem from "../pages/DeleteItem";
import HomePage from "../pages/HomePage";
import Item from "../pages/Item";
import Items from "../pages/Items";
import TimeLine from "../pages/Timeline";
import UpdateItem from "../pages/UpdateItem";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/items" element={<Items />} />
      <Route path="/item/:id" element={<Item />} />
      <Route path="/createitem" element={<CreateItem />} />
      <Route path="/updateitem/:id" element={<UpdateItem />} />
      <Route path="/deleteitem/:id" element={<DeleteItem />} />
      <Route path="/timeline" element={<TimeLine />} />
    </Routes>
  );
};

export default Main;
