const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  project.addEventListener("click", (e) => {
    e.stopPropagation();

    if (project.classList.contains("flip")) {
      project.classList.remove("flip");
      project.style.height = "164px";
    } else {
      projects.forEach((p) => p.classList.remove("flip"));
      project.classList.add("flip");
      project.style.height = "300px";
    }
  });
});

document.addEventListener("click", () => {
  projects.forEach((p) => {
    p.classList.remove("flip");
    p.style.height = "164px";
  });
});
