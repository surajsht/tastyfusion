import "./pagenotfound.css";

const PageNotFound = () => {
  return (
    <div className="error-page">
      <div className="wrapper">
        <h2 className="error-page-title"> 404 </h2>
        <h3 className="error-page-sub-title"> There's nothing here </h3>
        <p className="error-page-desc">
          Sorry, the page you were looking for doesn't exist
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
