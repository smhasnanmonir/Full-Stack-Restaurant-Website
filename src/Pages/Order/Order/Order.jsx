import Cover from "../../Shared/Cover/Cover";
import shopCover from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OderTab from "../OrderTab/OderTab";
const Order = () => {
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(0);
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="mb-[25px]">
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
            <OderTab foodItem={salad}></OderTab>
          </TabPanel>
          <TabPanel>
            <OderTab foodItem={pizza}></OderTab>
          </TabPanel>
          <TabPanel>
            <OderTab foodItem={soup}></OderTab>
          </TabPanel>
          <TabPanel>
            <OderTab foodItem={dessert}></OderTab>
          </TabPanel>
          <TabPanel>
            <OderTab foodItem={drinks}></OderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
