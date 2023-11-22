/* eslint-disable react/prop-types */
export function Project(props) {
  return (
    <div id="current-project" className="container">
      <div className="card text-center ">
        <div className="card-header">
          <h1>{props.sampleprojects[0].title}</h1>
        </div>
        <div className="card-body">
          <p className="card-text">{props.sampleprojects[0].description}</p>
          <h5 className="card-title">{props.sampleprojects[0].goal_amount}</h5>
        </div>
        <div className="card-footer text-body-secondary"></div>
      </div>
      <div className="card-header">
        <div className="row p-5">
          <div className="col">
            <div type="text">
              <p>Start Date: {props.sampleprojects[0].start_date}</p>
            </div>
          </div>
          <div className="col">
            <div type="text">
              <p>End Date: {props.sampleprojects[0].end_date}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="current-project-pledges">
        <h2>Rewards:</h2>
        {props.samplerewards.map((reward) => (
          <div key={reward.id}>
            <p className="card-text p-3">Description: {reward.description}</p>
            <div className="row p-3">
              <div className="col">
                <div type="text" className="form-control" placeholder="First name">
                  <p>Amount: {reward.amount}</p>
                </div>
              </div>
              <div className="col">
                <div type="text" className="form-control">
                  <p>Limit: {reward.limit}</p>
                </div>
              </div>
              <div className="col">
                <div type="text" className="form-control">
                  <p>Delivery: {reward.delivery_date}</p>
                </div>
              </div>
              <div className="container p-2">
                <a href="#" className="btn btn-primary">
                  Pledge {reward.amount}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
