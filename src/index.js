import React from 'react';
import reactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';



class App extends React.Component {

    constructor(props){
        super(props);
        this.state = { lat: null, errorMessage:''};
        
        window.navigator.geolocation.getCurrentPosition(
            
            (position)=>{
                this.setState({ lat: position.coords.latitude })
            },
            (err)=>{
                this.setState({ errorMessage: err.message });
            }
        )
    
    }

    /*

    componentDidMount(){
        console.log("Component rendered to the screen");
    }

    componentDidUpdate(){
        console.log("Component got updated")
    }

    */

    render(){
        
            if (this.state.errorMessage && !this.state.lat){
                return <div>Error: {this.state.errorMessage}</div>;
            }

            if (!this.state.errMessage && this.state.lat){
                return <div>Latitude: {this.state.lat}</div>;
            }

           return <div>Loading !!!!</div>;
        
    }

}


reactDOM.render(
    <App />,
    document.querySelector('#root')
)



