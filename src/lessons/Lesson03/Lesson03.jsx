import Button from "../../components/Button/OldButton";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import "./styles.css";
import { lionData, zebraData, normalizeData } from "./data";

function Lesson03() {
  return (
    <div className="lesson03-container">
      <AnimalCard
        animalData={lionData}
        animalName={normalizeData(lionData.name)}
      >
        <p>{lionData.skills[0]}</p>
        <div>{lionData.skills[1]}</div>
      </AnimalCard>
      <AnimalCard
        animalData={zebraData}
        animalName={normalizeData(zebraData.name)}
      ></AnimalCard>
      <Button />
      <Button name="Delete" isPrimary={false} />
    </div>
  );
}

export default Lesson03;
