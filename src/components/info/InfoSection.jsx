const InfoSection = ({ info }) => {
  const { linkText, description, title } = info;


  return (
   <>
      {/* Box 1 */}
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4 fs-5 ">
        <div className="d-flex flex-column justify-content-center align-items-center bg-primary text-white p-5 rounded h-100  ">
          <h4 className="mb-4">{title}</h4>
          <p className="white-text">{description}</p>
          <div className="d-inline-flex justify-content-center align-items-center gap-2">
            <a href="#" className="text-white text-decoration-none">
              {linkText}
            </a>
            <span className="ms-2">
              <i className="fa fa-long-arrow-left"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
