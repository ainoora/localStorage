import SectionCreator from "./join-us-section.js";
import "../styles/style.css";

function appLoad() {
  const sectionFactory = new SectionCreator();
  return sectionFactory.create("standard");
}

appLoad();
