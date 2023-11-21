/* eslint-disable react/prop-types */
export function ProjectIndex(props) {
  return (
    <div id="project-index">
      <h1>All Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.sampleprojects.map((project) => (
          <div key={project.id}>
            <div className="card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p>{project.goal_amount}</p>
              <p>{project.start_date}</p>
              <p>{project.end_date}</p>
              <button>Go to Project</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
