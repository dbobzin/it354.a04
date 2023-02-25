function Web({ desc }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="https://ctechhosting.com/images-354/java.png"
              alt="web"
              width="75"
              height="75"
            />

            <h4>Java</h4>
            <p>{desc}</p>
          </div>
          <div className="col">
            <img
              src="https://ctechhosting.com/images-354/python.png"
              alt="web"
              width="75"
              height="75"
            />
            <h4>JavaScript</h4>
            <p>{desc}</p>
          </div>
          <div className="col">
            <img
              src="https://ctechhosting.com/images-354/react.png"
              alt="web"
              width="75"
              height="75"
            />
            <h4>React</h4>
            <p>{desc}</p>
          </div>
          <div className="col">
            <img
              src="https://ctechhosting.com/images-354/sql.png"
              alt="web"
              width="75"
              height="75"
            />
            <h4>Databases</h4>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

Web.defaultProps = {
  desc: "List skills technologies here. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.",
};
export default Web;
