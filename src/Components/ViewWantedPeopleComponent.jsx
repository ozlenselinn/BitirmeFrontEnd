import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WantedPeopleService from './Pages/WantedPeopleService';


class ViewWantedPeopleComponent extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            id: this.props.match.params.id,
            wantedPeople: {}
        
        }

    }
    
    componentDidMount() {
        WantedPeopleService.getWantedPeopleById(this.state.id).then(res => {
            this.setState({wantedPeople: res.data});

   })
    }

    render() {
        
        return (
            <div>
                <div className= "card col-md-6 offset-md-3">
                 <h3 className='text-center'>  Aranan Şahıs Bilgilerini İncele</h3>
                 <div className='card-body'>
                     <div className='row'>
                         <label>Şahıs İsmi: </label>
                         <div>{ this.state.wantedPeople.firstName }</div>
                         <label>Şahıs Soyismi: </label>
                         <div>{ this.state.wantedPeople.lastName }</div>
                         <label>Cinsiyet: </label>
                         <div>{ this.state.wantedPeople.gender }</div>
                         <label>Yaş: </label>
                         <div>{ this.state.wantedPeople.age}</div>
                         <label>Üst Kıyafet Rengi: </label>
                         <div>{ this.state.wantedPeople.upperClothesColor }</div>
                         <label>Alt Kıyafet Rengi: </label>
                         <div>{ this.state.wantedPeople.lowerClothesColor }</div>
                         <label>Kayıp Adresi: </label>
                         <div>{ this.state.wantedPeople.lostAddress }</div>
                         
                           </div>

                 </div>

                </div>

            </div>
        );
    }
}



export default ViewWantedPeopleComponent;