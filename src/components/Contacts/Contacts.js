import React from 'react';
import Contact from './../Contact/Contact'
import anonAvatar from './img/anonymous_avatar.png'
import './Contacts.css'
import IconSearch from './img/IconSearch'
import IconAnonymous from '../Contact/svg-icons/IconAnonymous';
import IconMale from '../Contact/svg-icons/IconMale';
import IconFemale from '../Contact/svg-icons/IconFemale';

export default class Contacts extends React.Component{
  state = {
    contact: [{
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male"
    }, {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female"
    }, {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666",
      avatar: anonAvatar
    }, {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female"
    }, {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male"
    }, {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male"
    }],

    search: '',

    genderFilter: {
      'female': true,
      'male': true,
      'anon': true
    }
  }

  handleSearchChange = (event) =>{
    this.setState({
      search: event.target.value
    });
  };

  checkToggle = (event) => {
    let key = event.target.id.replace('checkbox-' , '');
    let genderFilterProp = {...this.state.genderFilter};

    genderFilterProp[key] = !genderFilterProp[key];
    
    this.setState({genderFilter : genderFilterProp});
  }

  getFinallContacts = (arr, str) => {
    let currentArr = this.filterGender(arr);

    return this.filterContact(currentArr, str);
  };

  filterContact = (arr, str) => arr.filter(
    elem => elem.firstName.toLowerCase().indexOf(str.toLowerCase()) !== -1
      || elem.lastName.toLowerCase().indexOf(str.toLowerCase()) !== -1
      || elem.phone.toLowerCase().indexOf(str.toLowerCase()) !== -1
  );

  filterGender = (arr) => arr.filter(
    elem => elem.gender ? this.state.genderFilter[elem.gender] : this.state.genderFilter.anon
  );

  render(){
    return(
      <div className = "container contacts__container">
        <label htmlFor ="search" className = "search-bar">
          <input type = "text" className = "search" id ="search" value = {this.state.search} onChange = {this.handleSearchChange} />
          <IconSearch className = "search__icon" />
        </label>
        <div className = "filter-bar">
          <h4 className = "filter__heading">Filters:</h4>
          <div className = "filter__panel" onChange = {this.checkToggle}>
            <input type = "checkbox" className = "checkbox" id = "checkbox-male" defaultChecked/>
            <label htmlFor = "checkbox-male" className = "checkbox__label">
              <IconMale className = "filter__icon" />
            </label>
            <input type = "checkbox" className = "checkbox" id = "checkbox-female" defaultChecked/>
            <label htmlFor = "checkbox-female" className = "checkbox__label">
              <IconFemale className = "filter__icon" />
            </label>
            <input type = "checkbox" className = "checkbox" id = "checkbox-anon" defaultChecked/>
            <label htmlFor = "checkbox-anon" className = "checkbox__label">
              <IconAnonymous className = "filter__icon" />
            </label>
          </div>
        </div>
        <ul className = "contacts">
          {this.getFinallContacts(this.state.contact, this.state.search, this.state.excludeGender).map((elem, index) => <Contact
            key = {index}
            firstName = {elem.firstName}
            lastName = {elem.lastName}
            phone = {elem.phone}
            gender = {elem.gender}
            avatar = {elem.avatar} />
          )}
        </ul>

      </div>
    );
  };
};
