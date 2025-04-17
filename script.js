document
  .querySelectorAll(".project")
  .forEach((project) =>
    project.addEventListener("click", () => project.classList.toggle("expand"))
  );
