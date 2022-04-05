import React, { Component } from 'react';
import WantedPeopleService from './WantedPeopleService';

//in react 2 types of components stateless function component stateful class component. We use class component

class ListWantedPeople extends Component {
    constructor(props) {
        
        //we props to the React component
        super(props)
        
        //this is state which is belongs to this component (ListEmployeeComponent)
        this.state = {
            //initialize an array
          wantedPeople : []
         
        
    }
    this.addWantedPeople=this.addWantedPeople.bind(this);
    this.editWantedPeople=this.editWantedPeople.bind(this);
    this.deleteWantedPeople= this.deleteWantedPeople.bind(this);
    
}
    editWantedPeople(id) {
        this.props.history.push(`/AddWantedPeople/${id}`);

    }

    componentDidMount() {
        WantedPeopleService.getWantedPeople().then((res)=> {
            this.setState({wantedPeople:res.data});
            
        });
    }
    
    addWantedPeople() {

        this.props.history.push('/AddWantedPeople/_add');
    }

    deleteWantedPeople(id) {
      //rest api
      WantedPeopleService.deleteWantedPeople(id).then(res => {
          this.setState({wantedPeople: this.state.wantedPeople.filter(wantedPeople => wantedPeople.id !== id)})


      });


    } 

    viewWantedPeople(id) {
     
        this.props.history.push(`/ViewWantedPeople/${id}`);

    }

  

 


   render() {
        return (
            <div>
                <h2 className ="text-center" style= {{marginTop: '20px 20px', paddingTop: '20px'}}>Aranan Şahıs Listesi</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick = {this.addWantedPeople}>Kayıt Ekle</button>


                </div>
                <br></br>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Şahıs İsmi</th>
                                <th>Şahıs Soy İsmi</th>
                                <th>Cinsiyet</th>
                                <th>Yaş</th>
                                <th>Ust Kıyafet Rengi</th>
                                <th>Alt Kıyafet Rengi</th>
                                <th>Kayıp Adresi</th>
                                <th>Şahıs Resmi</th>
                                <th>Actions</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.wantedPeople.map(
                                    wantedPeople =>
                                    <tr key = {wantedPeople.id}>
                                        <td>{ wantedPeople.firstName}</td>
                                        <td>{ wantedPeople.lastName}</td>
                                        <td>{ wantedPeople.gender}</td>
                                        <td>{ wantedPeople.age}</td>
                                        <td>{ wantedPeople.upperClothesColor}</td>
                                        <td>{ wantedPeople.lowerClothesColor}</td>
                                        <td>{ wantedPeople.lostAddress}</td>
                                        <td>{ wantedPeople.wantedImage}</td>

                                        <td>
                                            <button onClick={ () => this.editWantedPeople(wantedPeople.id)} className="btn btn-info">Güncelle</button>
                                            <button style = {{margin:'10px'}}onClick={ () => this.deleteWantedPeople(wantedPeople.id)} className="btn btn-danger">Sil</button>
                                            <button style = {{margin:'10px'}}onClick={ () => this.viewWantedPeople(wantedPeople.id)} className="btn btn-info">İncele</button>
                                        </td>
                                    </tr>
                                    
                               )    


                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )

    }
}
export default ListWantedPeople;

























                 



