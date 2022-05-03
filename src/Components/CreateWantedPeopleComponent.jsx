import React, { Component } from 'react'
import WantedPeopleService from './Pages/WantedPeopleService';

export default class CreateWantedPeopleComponent extends Component {
  constructor(props) {
      super(props)

      this.state = {
          id: this.props.match.params.id,
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
      this.saveOrUpdateWantedPeople = this.saveOrUpdateWantedPeople.bind(this);

} 

componentDidMount(){
    if(this.state.id === '_add') {
        return
    }else{

      WantedPeopleService.getWantedPeopleById(this.state.id).then( (res) =>{
        let wantedPeople = res.data;
        this.setState({firstName: wantedPeople.firstName,
            lastName: wantedPeople.lastName,
            gender : wantedPeople.gender,
            age: wantedPeople.age,
            upperClothesColor: wantedPeople.upperClothesColor,
            lowerClothesColor:wantedPeople.lowerClothesColor,
            lostAddress: wantedPeople.lostAddress,
            wantedImage: wantedPeople.wantedImage




        });
    });
  }
}

   saveOrUpdateWantedPeople = (e) => {
      e.preventDefault();
      let wantedPeople = {firstName: this.state.firstName, lastName:this.state.lastName, gender: this.state.gender, age: this.state.age, 
        upperClothesColor: this.state.upperClothesColor, lowerClothesColor: this.state.lowerClothesColor, lostAddress: this.state.lostAddress,
        wantedImage: this.state.wantedImage};
        console.log('wantedPeople =>' + JSON.stringify(wantedPeople));

        if(this.state.id === '_add') {
            WantedPeopleService.createWantedPeople(wantedPeople).then(res => {
                this.props.history.push('/WantedPeopleList');
            });
            
        }else{
            WantedPeopleService.updateWantedPeople(wantedPeople, this.state.id).then( res => {
                this.props.history.push('/WantedPeopleList');
            });
        
        }
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

getTitle() {

    if(this.state.id === '_add'){
    return <h3 className='text-center'>Kayıt Ekle</h3>
}else {
   return  <h3 className='text-center'>Kayıt Güncelle</h3>
}

}


  render() {
    return (
      <div>
          <div className='container'>
              <div className='row'>
                  <div className='card col-md-6 offset-md-3 offset-md-3'>
                     {
                         this.getTitle()
                     }
                      <div className='card-body'>
                          <form>
                              <div className='form-group'>
                                  <label>Şahıs İsmi:</label>
                                  <input placeholder='First Name' name="firstName" className='form-control'
                                  value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Şahıs Soy İsmi:</label>
                                  <input placeholder='Last Name' name="lastName" className='form-control'
                                  value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Cinsiyet:</label>
                                  <input placeholder='Gender' name="gender" className='form-control'
                                  value={this.state.gender} onChange={this.changeGenderHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Yaş:</label>
                                  <input placeholder='Age' name="age" className='form-control'
                                  value={this.state.age} onChange={this.changeAgeHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Üst Kıyafet Rengi:</label>
                                  <input placeholder='Upper Clothes Color' name="upperClothesColor" className='form-control'
                                  value={this.state.upperClothesColor} onChange={this.changeUpClothesHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Alt Kıyafet Rengi:</label>
                                  <input placeholder='Lower Clothes Color' name="lowerClothesColor" className='form-control'
                                  value={this.state.lowerClothesColor} onChange={this.changeLowClothesHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Kayıp Adresi:</label>
                                  <input placeholder='Lost Address' name="lostAddress" className='form-control'
                                  value={this.state.lostAddress} onChange={this.changeLostAdHandler}/>
                              </div>
                              <div className='form-group'>
                                  <label>Şahıs Resmi:</label>
                                  <input type ="file" placeholder='Image' name="wantedImage" className='form-control'
                                 
                                  value={this.state.wantedImage} onChange={this.changeImageHandler}/>
                              </div>

                              <button className='btn btn-success' onClick= {this.saveOrUpdateWantedPeople}>Kaydet</button>
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
