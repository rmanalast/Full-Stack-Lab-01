document.addEventListener("DOMContentLoaded", async () => {
  // The copyright year in the footer
  const year = new Date().getFullYear();
  const footer = document.getElementById("copyright");
  footer.textContent = `Copyright Pixell River Financial ${year}`;

  // The employee directory
  const mainNode = document.querySelector(".employee-directory");

  try {
    const response = await fetch("employees.json");
    if (!response.ok) throw new Error("Failed to load employees.json");

    const departments = await response.json();

    departments.forEach(dept => {
      // Department name
      const h4 = document.createElement("h4");
      h4.textContent = dept.department;
      mainNode.appendChild(h4);

      // Employee names
      const ul = document.createElement("ul");
      dept.employees.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
      });
      mainNode.appendChild(ul);
    });

  } catch (error) {
    console.error("Error loading employee data:", error);
    mainNode.textContent = "Failed to load employee directory.";
  }
});
