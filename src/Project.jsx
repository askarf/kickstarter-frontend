import { Header } from "./Header";

export function Project() {
  return (
    <div id="project" className="container">
      <Header />
      <div className="card text-center ">
        <div className="card-header">
          <h1>Title</h1>
        </div>
        <div className="card-body">
          <p className="card-text">
            Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eos pariatur explicabo
            ex, minima possimus vero recusandae provident suscipit ad illum delectus distinctio eius repudiandae cum
            corrupti quisquam neque laudantium illo. Doloremque perferendis natus itaque iure odio nesciunt. Amet at
            totam quidem sed eos aliquid esse voluptate veritatis debitis est?
          </p>
          <h5 className="card-title">Goal: $60000</h5>
        </div>
        <div className="card-footer text-body-secondary"></div>
        <div className="card-header">
          <h2>Rewards:</h2>
        </div>
        <p className="card-text p-3">
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eos pariatur explicabo
          ex, minima possimus vero recusandae provident suscipit ad illum delectus distinctio eius repudiandae cum
          corrupti quisquam neque laudantium illo. Doloremque perferendis natus itaque iure odio nesciunt. Amet at totam
          quidem sed eos aliquid esse voluptate veritatis debitis est?
        </p>
        <div className="row p-3">
          <div className="col">
            <div type="text" className="form-control" placeholder="First name">
              <p>Amount: $500</p>
            </div>
          </div>
          <div className="col">
            <div type="text" className="form-control">
              <p>Limit: 5</p>
            </div>
          </div>
          <div className="col">
            <div type="text" className="form-control">
              <p>Delivery: 3-5 Buissness Days</p>
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
                <p>Start Date: November 18 2022</p>
              </div>
            </div>
            <div className="col">
              <div type="text">
                <p>End Date: January 12 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
