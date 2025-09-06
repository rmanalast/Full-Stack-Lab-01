import { useEffect, useState } from "react";
import type { Department } from "../../types/types";
import "./EmployeeDirectory.css";

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