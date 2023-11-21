import { Header } from "./Header";

export function Project() {
  return (
    <div id="project" className="container">
      <Header />
      <div className="card text-center ">
        <div className="card-header">Title</div>
        <div className="card-body">
          <h5 className="card-title">Goal: amount</h5>
          <p className="card-text">
            Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eos pariatur explicabo
            ex, minima possimus vero recusandae provident suscipit ad illum delectus distinctio eius repudiandae cum
            corrupti quisquam neque laudantium illo. Doloremque perferendis natus itaque iure odio nesciunt. Amet at
            totam quidem sed eos aliquid esse voluptate veritatis debitis est?
          </p>
          <a href="#" className="btn btn-primary">
            Pledge
          </a>
        </div>
        <div className="card-footer text-body-secondary">
          <div className="row">
            <div className="col">
              <div type="text" className="form-control" placeholder="First name">
                <p>Start Date: November 18 2022</p>
              </div>
            </div>
            <div className="col">
              <div type="text" className="form-control">
                <p>End Date: January 12 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
