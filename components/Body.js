import ResCard from "./ResCard";
import { resList } from "../utils/mockJSON";
import { useEffect, useState } from "react";

// let resList = [
//   {
//     data: {
//       id: "522172",
//       name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
//       cloudinaryImageId: "askborsmyjypehnfz3ui",
//       cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
//       costForTwo: 20000,
//       deliveryTime: 28,
//       avgRating: "4.5",
//     },
//   },
//   {
//     data: {
//       id: "522173",
//       name: "KFC",
//       cloudinaryImageId: "askborsmyjypehnfz3ui",
//       cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
//       costForTwo: 20000,
//       deliveryTime: 28,
//       avgRating: "3.9",
//     },
//   },
//   {
//     data: {
//       id: "522174",
//       name: "Dominos",
//       cloudinaryImageId: "askborsmyjypehnfz3ui",
//       cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
//       costForTwo: 20000,
//       deliveryTime: 28,
//       avgRating: "4.4",
//     },
//   },
// ];

const Body = () => {
  // useEffect(() => {
  //   return async () => {
  //     const data = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.0424863&lng=73.28799339999999&page_type=DESKTOP_WEB_LISTING"
  //     );

  //     let dataJson = await data.json();
  //     let resList = dataJson.data.cards[2].data.data.cards;
  //   };
  // }, []);

  const [listOfRes, setListOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="body-search">
        <input
          className="input-search"
          type="text"
          onChange={(event) => {
            const searchedRes = resList.filter((res) =>
              res.data.name
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
            );
            setListOfRes(searchedRes);
          }}
          placeholder="Search..........."
        ></input>
        <button className="body-search-button"> SEARCH</button>
      </div>
      <div className="filterRes">
        <button
          className="btn-filter"
          onClick={() => {
            let filterList = listOfRes.filter((res) => res.data.avgRating > 4);
            setListOfRes(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <ResCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
