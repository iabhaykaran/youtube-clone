import "../App.css";

const SmallVideoCard = (props) => {
  return (
    <div className="">
      <a href={props.vdourl} >
        <div className="his-video">
          <img
            style={{ borderRadius: "5px" }}
            src={props.thumburl}
            alt="#"
            width="100%"
            height="100%"
          />
        </div>

        <div>
          <p className="his-p">{props.title}...</p>
        </div>
      </a>
    </div>
  );
};

export default SmallVideoCard;
