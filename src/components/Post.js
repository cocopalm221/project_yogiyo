import DaumPostcode from "react-daum-postcode";

const Post = (props) => {
  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "10%",
    left: "30%",
    width: "500px",
    // height: "250px",
    padding: "10px",
    zIndex: 10,
  };

  const complete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    props.setcompany({
      ...props.company,
      address: fullAddress,
    });
  };

  return (
    <div>
      <DaumPostcode style={postCodeStyle} autoClose onComplete={complete} />
    </div>
  );
};

export default Post;
