import { Header } from "./Header";

export function Project(props) {
  return (
    <div id="project" className="container">
      <Header />
      {props.sampleprojects.map((project) => (
        <div key={project.id}>
          <div className="card text-center ">
            <div className="card-header">
              <h1>{project.title}</h1>
            </div>
            <div className="card-body">
              <p className="card-text">{project.description}</p>
              <h5 className="card-title">{project.goal_amount}</h5>
            </div>
            <div className="card-footer text-body-secondary"></div>
            <div className="card-header">
              <h2>Rewards:</h2>
            </div>

            <p className="card-text p-3">Description: </p>
            <div className="row p-3">
              <div className="col">
                <div type="text" className="form-control" placeholder="First name">
                  <p>Amount: </p>
                </div>
              </div>
              <div className="col">
                <div type="text" className="form-control">
                  <p>Limit: </p>
                </div>
              </div>
              <div className="col">
                <div type="text" className="form-control">
                  <p>Delivery:</p>
                </div>
              </div>
              <div className="container p-2">
                <a href="#" className="btn btn-primary">
                  Pledge
                </a>
              </div>
              <div className="row p-5">
                <div className="col">
                  <div type="text">
                    <p>Start Date: {project.start_date}</p>
                  </div>
                </div>
                <div className="col">
                  <div type="text">
                    <p>End Date: {project.end_date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
