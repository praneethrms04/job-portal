import CardData from "../data/CardData";
const Card = () => {
  return (
    <div className="container-fluid mt-4">
      <h1 className="d-flex display-5 text-primary text-align-center justify-content-center">
      😍 Welcome sam..!😍
      </h1>
      <div className="row mt-4 ms-auto me-2">
        {/* w1 */}
        {CardData.map((item, index) => {
          return (
            <div className="col-xs-12 col-lg-3 col-md-6" key={index}>
              <div
                className={item.CName}
                style={{ width: 14 + "rem", height: 8 + "rem" }}
              >
                <h4 className="card-subtitle my-2 fw-bolder text-dark">
                  {item.icon}
                </h4>

                <div className="row mb-2 d-flex align-items-center">
                  <div className="col text-dark mx-4 fw-bolder">
                    <h2>{item.num}</h2>
                  </div>
                </div>
                <div className="row mb-2 d-flex align-items-center">
                  <div className="col text-dark fw-bolder">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
