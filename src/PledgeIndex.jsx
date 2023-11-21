/* eslint-disable react/prop-types */
export function PledgeIndex(props) {
  return (
    <div id="pledge-index">
      <h1>Hello Username</h1>
      <p>user image</p>
      <h2>Your Pledges</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.samplepledges.map((pledge) => (
          <div key={pledge.id}>
            <div className="card">
              <h2>Pledge Project name here</h2>
              <p>Pledge Amount here!</p>
              <p>{pledge.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
