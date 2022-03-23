import React, { Component } from 'react'
import WantedPeopleService from './Pages/WantedPeopleService';

export default class CreateWantedPeopleComponent extends Component {
  constructor(props) {
      super(props)

      this.state = {
          firstName: '',
          lastName: '',
          gender: '',
          age: '',
          upperClothesColor:'',
          lowerClothesColor:'',
          lostAddress:'',
          wantedImage:''
       

      }
      this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
      this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
      this.changeGenderHandler = this.changeGenderHandler.bind(this);
      this.changeAgeHandler = this.changeAgeHandler.bind(this);
      this.changeUpClothesHandler = this.changeUpClothesHandler.bind(this);
      this.changeLowClothesHandler = this.changeLowClothesHandler.bind(this);
      this.changeLostAdHandler = this.changeLostAdHandler.bind(this);
      this.changeImageHandler = this.changeImageHandler.bind(this);
      this.saveWantedPeople = this.saveWantedPeople.bind(this);

}


  saveWantedPeople = (e) => {
      e.preventDefault();
      let wantedPeople = {firstName: this.state.firstName, lastName:this.state.lastName, gender: this.state.gender, age: this.state.age, 
        upperClothesColor: this.state.upperClothesColor, lowerClothesColor: this.state.lowerClothesColor, lostAddress: this.state.lostAddress,
        wantedImage: this.state.wantedImage};
        console.log('wantedPeople =>' + JSON.stringify(wantedPeople));

        WantedPeopleService.createWantedPeople(wantedPeople).then(res => {
            this.props.history.push('/WantedPeopleList');
        });



  } 
  
  changeFirstNameHandler = (event) => {
      this.setState({firstName: event.target.value});
   }

   changeLastNameHandler = (event) => {
    this.setState({lastName: event.target.value});
 }
 
 changeGenderHandler = (event) => {
    this.setState({gender: event.target.value});
 }

 changeAgeHandler = (event) => {
    this.setState({age: event.target.value});
 }

 changeUpClothesHandler = (event) => {
    this.setState({upperClothesColor: event.target.value});
 }

 changeLowClothesHandler = (event) => {
    this.setState({lowerClothesColor: event.target.value});
 }

 changeLostAdHandler = (event) => {
    this.setState({lostAddress: event.target.value});
 }

 changeImageHandler = (event) => {
    this.setState({wantedImage: event.target.value});
 }

 cancel() {

    this.props.history.push('/WantedPeopleList');



  }






  render() {
    return (
      <div>
          <div className='container'>
              <div className='row'>
                  <div className='card col-md-6 offset-md-3 offset-md-3'>
                      <h3 className='text-center'>Kayıt Ekle</h3>
                      <div className='card-body'>
                          <form>
                              <div className='form-group'>
                                  <label>First Name:</label>
                                  <input placeholder='First Name' name="firstName" className='form-control'
                                  value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Last Name:</label>
                                  <input placeholder='Last Name' name="lastName" className='form-control'
                                  value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Gender:</label>
                                  <input placeholder='Gender' name="gender" className='form-control'
                                  value={this.state.gender} onChange={this.changeGenderHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Age:</label>
                                  <input placeholder='Age' name="age" className='form-control'
                                  value={this.state.age} onChange={this.changeAgeHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Upper Clothes Color:</label>
                                  <input placeholder='Upper Clothes Color' name="upperClothesColor" className='form-control'
                                  value={this.state.upperClothesColor} onChange={this.changeUpClothesHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Lower Clothes Color:</label>
                                  <input placeholder='Lower Clothes Color' name="lowerClothesColor" className='form-control'
                                  value={this.state.lowerClothesColor} onChange={this.changeLowClothesHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Lost Address:</label>
                                  <input placeholder='Lost Address' name="lostAddress" className='form-control'
                                  value={this.state.lostAddress} onChange={this.changeLostAdHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Image:</label>
                                  <input placeholder='Image' name="wantedImage" className='form-control'
                                  value={this.state.wantedImage} onChange={this.changeImageHandler}/>
                              </div>

                              <button className='btn btn-success' onClick= {this.saveWantedPeople}>Kaydet</button>
                              <button className='btn btn-danger' onClick= {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Kapat</button>





                          </form>




                      </div>



                  </div>



              </div>




          </div>




      </div>
    )
  }
}
