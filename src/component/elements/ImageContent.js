const ImageContent = props => {
  return (
    <div className="row px-3 justify-content-center mt-5 mb-6 border-line">
        <img src={props.imageurl} className="image" />
    </div>
  );
};
export default ImageContent;
