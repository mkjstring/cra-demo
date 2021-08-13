import { placeholder } from '@babel/types';
import React from 'react';

import './styles.searchbox.css'


export const SearchBox = ({placeholder,handleChange}) => (
    <input 
    className='search'
    type='search'
    placeholder={placeholder}
    onChange = {handleChange}
  />
)