import React from "react"
import { useState } from "react";
import "../styles/LendForm.css"


function LendForm() {

    const [equipmentData, setEquipmentData] = useState({
        equipmentName: '',
        description: '',
        rentalRate: '',
        age : '',
        availability: '',
        termsAndConditions: '',
    });

    const handleLendingSubmit = async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append('equipmentName', equipmentData.equipmentName);
          formData.append('description', equipmentData.description);
          formData.append('rentalRate', equipmentData.rentalRate);
          formData.append('availability', equipmentData.availability);
          formData.append('termsAndConditions', equipmentData.termsAndConditions);
          formData.append('image', equipmentData.image);
          
          const response = await fetch('http://your-backend-api/lend-equipment', {
            method: 'POST',
            body: formData,
          });
          const data = await response.json();
          console.log('Lending response:', data);
        } catch (error) {
          console.error('Lending error:', error);
        }
      };

    return (
        <div className="lending-form-container">
            <form onSubmit={handleLendingSubmit} className="lending-form">
                <h1>List Your Equipment</h1>
                <input
                type="text"
                placeholder="Equipment Name"
                value={equipmentData.equipmentName}
                onChange={(e) => setEquipmentData({ ...equipmentData, equipmentName: e.target.value })}
                required
                />
                <textarea
                placeholder="Description"
                value={equipmentData.description}
                onChange={(e) => setEquipmentData({ ...equipmentData, description: e.target.value })}
                required
                />
                <input
                type="text"
                placeholder="Rental Rate"
                value={equipmentData.rentalRate}
                onChange={(e) => setEquipmentData({ ...equipmentData, rentalRate: e.target.value })}
                required
                />
                <input 
                placeholder="age of equipment"
                value={equipmentData.age}
                onChange={(e) => setEquipmentData({...equipmentData, age : e.target.value})}
                required
                />
                <input
                type="text"
                placeholder="Availability"
                value={equipmentData.availability}
                onChange={(e) => setEquipmentData({ ...equipmentData, availability: e.target.value })}
                required
                />
                <textarea
                placeholder="Terms and Conditions"
                value={equipmentData.termsAndConditions}
                onChange={(e) => setEquipmentData({ ...equipmentData, termsAndConditions: e.target.value })}
                required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LendForm;