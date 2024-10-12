import Pet from '../models/Pet.js'; 
 
// Get all pets
export const getPets = async (req, res) => {
  try{
  
  const pets = await Pet.find();// Assuming `Pet` is your model for pets
  res.json(pets);
} catch (error){
  res.status(500).json({ message: 'Failed to fetch pets'});
}
};
// Fetch a specific pet by ID
export const getPet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch the pet' });
  }
};


// Create a new pet
export const createPet = async (req, res) => {
  const { name, age, species, habits, specialRequirements } = req.body;
  const pet = new Pet({ name, age, species, habits, specialRequirements });
  const createdPet = await pet.save();
  res.status(201).json(createdPet);
};

// Update an existing pet
export const updatePet = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPet = await Pet.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update pet' });
  }
};

// Delete a pet
export const deletePet = async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  if (pet) {
    await pet.remove();
    res.json({ message: 'Pet removed' });
  } else {
    res.status(404).json({ message: 'Pet not found' });
  }
};
