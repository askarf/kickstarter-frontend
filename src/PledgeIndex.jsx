/* eslint-disable react/prop-types */
export function PledgeIndex(props) {
  return (
    <div id="pledge-index">
      <h1>Your Pledges</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.samplepledges.map((pledge) => (
          <div key={pledge.id}>
            <div className="card">
              <h2>Pledge Project name here</h2>
              <p>{pledge.description}</p>
              <p>{pledge.goal_amount}</p>
              <p>{pledge.start_date}</p>
              <p>{pledge.end_date}</p>
              <button>Go to pledge</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
