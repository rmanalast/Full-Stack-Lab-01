// This component fetches and displays an employee directory grouped by departments.
import { useEffect, useState } from "react";
import type { Department } from "../../types/types";
import "./EmployeeDirectory.css";

// This function is responsible for fetching and displaying the employee directory.
function EmployeeDirectory() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/employees.json")
      .then(res => {
        if (!res.ok) throw new Error("Failed to load employees.json");
        return res.json();
      })
      .then(data => setDepartments(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>{error}</p>;

  // Returning the main structure of the employee directory.
  return (
    <main className="container">
      <section className="employee-directory">
        <h2>Employee Directory</h2>
        {departments.map(dept => (
          <div key={dept.department}>
            <h4>{dept.department}</h4>
            <ul>
              {dept.employees.map(name => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}

export default EmployeeDirectory;