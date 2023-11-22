/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function ProjectIndex(props) {
  return (
    <div id="project-index">
      <h1>All Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.projects.map((project) => (
          <div key={project.id}>
            <div className="card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p>{project.goal_amount}</p>
              <p>{project.start_date}</p>
              <p>{project.end_date}</p>
              <Link to="./Project">Go to Project</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
