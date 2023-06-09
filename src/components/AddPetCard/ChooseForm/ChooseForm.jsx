// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import AddFormButtonBack from '../AddFormButton/AddFormButtonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButtonNext';
import { TbPaw } from "react-icons/tb";

import {
  AddFormRadioButton,
  RadioCategoryLabel,
  CategoryWrapper,
} from './ChooseForm.styled';

const ChooseForm = ({ formData, setFormData, nextStep, cancel, setValues }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!formData.category) setIsDisabled(true);
    else setIsDisabled(false);
  }, [formData.category]);

  const handleCategoryChange = e => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <CategoryWrapper>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="your pet"
        id="your pet"
        onChange={handleCategoryChange}
        checked={formData.category === 'your pet'}
      />
      <RadioCategoryLabel htmlFor="your pet" checked={formData.category === 'your pet'}>Your pet</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="sell"
        id="sell"
        checked={formData.category === 'sell'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="sell" checked={formData.category === 'sell'}>Sell</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="lost-found"
        id="lost-found"
        checked={formData.category === 'lost-found'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="lost-found" checked={formData.category === 'lost-found'}>Lost/found</RadioCategoryLabel>
      <AddFormRadioButton
        type="radio"
        name="category"
        value="for-free"
        id="for-free"
        checked={formData.category === 'for-free'}
        onChange={handleCategoryChange}
      />
      <RadioCategoryLabel htmlFor="for-free"  checked={formData.category === 'for-free'}>In good hands</RadioCategoryLabel>
      <AddFormButtonWrapper>
        <AddFormButtonNext
          isDisabled={isDisabled}
          type="button"
          text="Next"
          icon={<TbPaw style={{ stroke: '#FEF9F9', width: '24px', height: '24px' }}/>}
          clickHandler={nextStep}
          filled={false}
        />
        <AddFormButtonBack text="Cancel" isLink={true} path={cancel} />
      </AddFormButtonWrapper>
    </CategoryWrapper>
  );
};

// ChooseForm.propTypes = {
//   formData: PropTypes.object.isRequired,
//   setFormData: PropTypes.func.isRequired,
//   cancel: PropTypes.oneOfType([
//     PropTypes.string.isRequired,
//     PropTypes.object.isRequired,
//   ]),
//   nextStep: PropTypes.func.isRequired,
// };

export default ChooseForm;
