import Cover from "../../Shared/Cover/Cover";
import shopCover from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OderTab from "../OrderTab/OderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const [menu] = useMenu();
  const categories = ["salad", "pizza", "soup", "dessert", "drinks", "deshi"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  console.log(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const deshi = menu.filter((item) => item.category === "deshi");
  return (
    <div className="mb-[25px]">
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover
        heading="OUR SHOP"
        subHeading="Would you like to try a dish?"
        img={shopCover}
      ></Cover>
      <div className="">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizzas</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OderTab foodItem={salads}></OderTab>
          </TabPanel>
          <TabPanel>
            <OderTab foodItem={pizzas}></OderTab>
          </TabPanel>
          <TabPanel>
            <OderTab foodItem={soups}></OderTab>
          </TabPanel>
          <TabPanel>
            <OderTab foodItem={desserts}></OderTab>
          </TabPanel>
          <TabPanel>
            <OderTab foodItem={drinks}></OderTab>
          </TabPanel>
          <TabPanel>
            <OderTab foodItem={deshi}></OderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
