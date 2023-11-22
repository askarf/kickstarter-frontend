import axios from "axios";
import { useState, useEffect } from "react";
import { ProjectIndex } from "./ProjectIndex";
import { Project } from "./Project";
import { PledgeIndex } from "./PledgeIndex";
import { Login } from "./login";
import { Routes, Route } from "react-router-dom";

const samplepledges = [
  { id: 1, user_id: 1, reward_id: 1, project_id: 1, comment: "comment 1" },
  { id: 2, user_id: 2, reward_id: 2, project_id: 2, comment: "comment 2" },
  { id: 3, user_id: 3, reward_id: 3, project_id: 3, comment: "comment 3" },
  { id: 4, user_id: 4, reward_id: 4, project_id: 4, comment: "comment 4" },
  { id: 5, user_id: 5, reward_id: 5, project_id: 5, comment: "comment 5" },
];

const samplerewards = [
  {
    id: 1,
    project_id: 1,
    description: "Get your very own copy of our amazing website sent to you by email!",
    amount: "$80",
    delivery_date: "As soon as pledge veriffied.",
    limit: 5,
  },
  {
    id: 2,
    project_id: 1,
    description: "Get a copy of our website engraven in stone, so you can forever hold onto it.",
    amount: "$300",
    delivery_date: "3-5 buissness days",
    limit: 2,
  },
  {
    id: 3,
    project_id: 1,
    description: "The most priceless dimond, one with our website etched in it.",
    amount: "$2,000",
    delivery_date: "6-10 buissness days",
    limit: 1,
  },
];

export function Content() {
  const [projects, setProjects] = useState([]);

  const handleIndexProjects = () => {
    axios.get("http://localhost:3000/projects.json").then((response) => {
      console.log(response.data);
      setProjects(response.data);
    });
  };

  useEffect(handleIndexProjects, []);

  return (
    <div className="container text-center">
      <Routes>
        <Route path="/" element={<ProjectIndex projects={projects} />} />
        <Route path="/pledges" element={<PledgeIndex samplepledges={samplepledges} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Project" element={<Project samplerewards={samplerewards} />} />
      </Routes>
    </div>
  );
}
