import "../App.css";

const SmallVideoCard = (props) => {
  return (
    <div className="VideoCard">
      <div className="his-video"></div>

      <div>
        {/* <h3>{props.title}</h3> */}
        <p className="his-p">


          {props.title}
        </p>
      </div>
    </div>
  );
};

export default SmallVideoCard;
