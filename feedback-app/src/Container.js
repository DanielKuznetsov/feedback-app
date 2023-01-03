import "./Container.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useEffect, useState } from "react";

function Container() {
  const [feedbackQuantity, setFeedbackQuantity] = useState();
  const [allRequests, setAllRequests] = useState([]);
  const [category, setCategory] = useState("All");
  const [categoryRequests, setCategoryRequests] = useState([]);

  const handleClick = (evt) => {
    setCategory(evt.target.name);
    console.log(category);
  };

  useEffect(() => {
    setCategoryRequests(allRequests.filter((el) => el.category === category));
  }, [category, allRequests, categoryRequests]);

  return (
    <div className="Container">
      <div className="left">
        <Sidebar handleClick={handleClick} />
      </div>
      <div className="right">
        <Navbar feedbackQuantity={feedbackQuantity} />
        <Main
          categoryRequests={
            categoryRequests.length > 0 ? categoryRequests : null
          }
          setFeedbackQuantity={setFeedbackQuantity}
          setAllRequests={setAllRequests}
          category={category}
        />
      </div>
    </div>
  );
}

export default Container;
