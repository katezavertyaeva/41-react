import "./styles.css";

function AnimalCard({ animalData, animalName, children }) {
  console.log(animalName);
  return (
    <div class="animal-card-wrapper">
      <h2>{animalName}</h2>
      <p>{animalData.species}</p>
      <p>{animalData.role}</p>
      <img src={animalData.image} />
      {children}
    </div>
  );
}

export default AnimalCard;
