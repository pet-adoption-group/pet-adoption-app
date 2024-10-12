import React from 'react';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src="cat1.png" alt={pet.name} />
      <h2>{pet.name}</h2>
      <p>Age: {pet.age}</p>
      <p>Species: {pet.species}</p>
      <button>Adopt {pet.name}</button>
    </div>
  );
};

export default PetCard;
