import { IMAGE_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
    cloudinaryImageId,
  } = resData.data;
  return (
    <div className="res-card">
      <img className="res-image" src={IMAGE_URL + cloudinaryImageId} />

      <h3 className="res-name">{name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} </h4>
      <h4>{deliveryTime} </h4>
      <h4>{costForTwo / 100} </h4>
    </div>
  );
};

export default ResCard;
