import React from 'react';
import { Button } from 'react-bootstrap';
import useForm from "react-hook-form";
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to OCAT/client/services/AssessmentService.js and
  // then onto the OCAT/server/routes/AssessmentAPI express API
  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  return <form>
    <p>Name:</p>
    <input type="text" placeholder="Name" name="catName" />
    <p>Date of Birth:</p>
    <input type="text" placeholder="Date of Birth" name="DOB" />
    <p>Does the Cat have previous contact with the Cat Judicial System?</p>
    <td align="left">
      <input type="radio" id="contactYes" name="contact" value="Yes" />
      <label for="contactYes">Yes</label>
      <input type="radio" id="contactNo" name="contact" value="No" />
      <label for="contactNo">No</label>
    </td>
    <p>Does the Cat have previous physical altercations with other cats?</p>
    <td align="left">
      <input type="radio" id="altercationsNo" name="altercations" value="No" />
      <label for="altercationsNo">0-3</label>
      <input type="radio" id="altercationsYes" name="altercations" value="Yes" />
      <label for="altercationsYes">3+</label>
    </td>
    <p>Does the Cat have previous physical altercations with the owner?</p>
    <td align="left">
      <input type="radio" id="ownerAltercationsNo" name="ownerAltercations" value="No" />
      <label for="ownerAltercationsNo">0-10</label>
      <input type="radio" id="ownerAltercationsYes" name="ownerAltercations" value="Yes" />
      <label for="altercationsYes">3+</label>
    </td>
    <Button variant="primary" type="submit">Submit</Button>
  </form>;
};

// <div>
//   <p>Does the Cat have previous contact with the Cat Judicial System?</p>
//   <form onSubmit={handleSubmit(onSubmit)}>
//     <input type="radio" id="contact" name="contact" value="Yes" ref={register} />
//     <label for="contact">Yes</label>
//     <input type="radio" id="contact2" name="contact" value="No" ref={register} />
//     <label for="contact2">No</label>
//     <p>Does the Cat have any previous altercations with other Cats?</p>
//     <input type="radio" id="altercationsFew" name="altercations" value="Yes" ref={register} />
//     <label for="contact">Yes</label>
//     <input type="radio" id="contact2" name="contact2" value="No" ref={register} />
//     <label for="contact2">No</label>
//   </form>
// </div>

// const { handleSubmit, register } = useForm();
