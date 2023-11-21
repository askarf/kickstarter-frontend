import { ProjectIndex } from "./ProjectIndex";

const sampleprojects = [
  {
    id: 1,
    category_id: 1,
    title: "project 1",
    description: "description 1",
    goal_amount: 10,
    start_date: "start date 1",
    end_date: "end date 1",
  },
  {
    id: 2,
    category_id: 1,
    title: "project 2",
    description: "description 2",
    goal_amount: 20,
    start_date: "start date 2",
    end_date: "end date 2",
  },
  {
    id: 3,
    category_id: 1,
    title: "project 3",
    description: "description 3",
    goal_amount: 30,
    start_date: "start date 3",
    end_date: "end date 3",
  },
  {
    id: 4,
    category_id: 1,
    title: "project 4",
    description: "description 4",
    goal_amount: 40,
    start_date: "start date 4",
    end_date: "end date 4",
  },
  {
    id: 5,
    category_id: 1,
    title: "project 5",
    description: "description 5",
    goal_amount: 50,
    start_date: "start date 5",
    end_date: "end date 5",
  },
  {
    id: 6,
    category_id: 1,
    title: "project 6",
    description: "description 6",
    goal_amount: 60,
    start_date: "start date 6",
    end_date: "end date 6",
  },
];

export function Content() {
  return (
    <div>
      <ProjectIndex sampleprojects={sampleprojects} />
      <h1>Content</h1>
      <h2>Content 2</h2>
    </div>
  );
}