import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {

  const { errors, handleSubmit, register } = useForm();
  // create a form that utilizes the "onSubmit" function to send data to OCAT/client/services/AssessmentService.js and
  // then onto the OCAT/server/routes/AssessmentAPI express API
  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  return <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Group>
      <Form.Label>Name:</Form.Label>
      <Form.Control type="text" placeholder="Name" name="catName" ref={register({ required: `NAME REQUIRED!!` }) } />
      {errors.catName && <p>{errors.catName.message}</p>}
    </Form.Group>
    <Form.Group>
      <Form.Label>Date of Birth:</Form.Label>
      <Form.Control type="date" placeholder="Date of Birth" name="DOB" ref={register({ required: `DOB REQUIRED!!` }) } />
      {errors.DOB && <p>{errors.DOB.message}</p>}
    </Form.Group>
    <p>Does the Cat have previous contact with the Cat Judicial System?</p>
    <input type="radio" id="contactYes" name="judicialContact" value="1" ref={register} />
    <label htmlFor="contactYes">Yes</label><br />
    <input type="radio" id="contactNo" name="judicialContact" value="0" ref={register({ required: `THIS QUESTION IS REQUIRED!!` }) } />
    <label htmlFor="contactNo">No</label><br />
    {errors.judicialContact && <p>{errors.judicialContact.message}</p>}
    <p>Physical altercations with other cats:</p>
    <input type="radio" id="altercationsNo" name="catAltercations" value="0" ref={register} />
    <label htmlFor="altercationsNo">0-3</label> <br />
    <input type="radio" id="altercationsYes" name="catAltercations" value="1" ref={register({ required: `THIS QUESTION IS REQUIRED!!` }) } />
    <label htmlFor="altercationsYes">3+</label> <br />
    {errors.catAltercations && <p>{errors.catAltercations.message}</p>}
    <p>Physical altercations with the owner (scratching, biting, etc...):</p>
    <input type="radio" id="ownerAltercationsNo" name="ownerAltercations" value="0" ref={register} />
    <label htmlFor="ownerAltercationsNo">0-10</label> <br />
    <input type="radio" id="ownerAltercationsYes" name="ownerAltercations" value="1" ref={register({ required: `THIS QUESTION IS REQUIRED!!` }) } />
    <label htmlFor="altercationsYes">10+</label> <br />
    {errors.ownerAltercations && <p>{errors.ownerAltercations.message}</p>}
    <p>Does the Cat play well with dogs?</p>
    <input type="radio" id="playsWellY" name="playsWell" value="0" ref={register} />
    <label htmlFor="playsWellY">Yes</label> <br />
    <input type="radio" id="playsWellN" name="playsWell" value="1" ref={register({ required: `THIS QUESTION IS REQUIRED!!` }) } />
    <label htmlFor="playsWellN">No</label> <br />
    {errors.playsWell && <p>{errors.playsWell.message}</p>}
    <p>Does the Cat hiss at strangers?</p>
    <input type="radio" id="HissesY" name="Hisses" value="1" ref={register} />
    <label htmlFor="HissesY">Yes</label> <br />
    <input type="radio" id="HissesN" name="Hisses" value="0" ref={register({ required: `THIS QUESTION IS REQUIRED!!` }) } />
    <label htmlFor="HissesN">No</label> <br />
    {errors.Hisses && <p>{errors.Hisses.message}</p>}
    <Button variant="primary" type="submit">Submit</Button>
  </Form>;
};
