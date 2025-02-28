import "../App.css";

const SmallVideoCard = (props) => {
  return (
    <div className="">
      <div className="his-video"></div>

      <div>
        <p className="his-p">{props.title}</p>
      </div>
    </div>
  );
};

export default SmallVideoCard;
