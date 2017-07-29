import React from 'react';
import ProtoTypes from 'prop-types';

//Stateless Component 

const SelectLanguage = (props)=> {
  let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map((lang)=> {
        return (
          <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
              {lang}
          </li>
        )
      },this)}
    </ul>
  )
}

SelectLanguage.protoTypes = {
	selectedLanguage : ProtoTypes.string.isRequired,
	onSelect : ProtoTypes.func.isRequired
}

module.exports = SelectLanguage;