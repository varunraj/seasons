import React from 'react';
import reactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';



class App extends React.Component {

    constructor(props){
        super(props)
        this.state = { lat: null, errorMessage: ''}    
    }
    
    renderContent(){

        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please Accept Location Request" />;
    }

    render(){
    
        return(
        <div>
            {this.renderContent()}
        </div>
        )
    }

    componentDidMount(){        

        window.navigator.geolocation.getCurrentPosition(
            (position)=>{this.setState({ lat: position.coords.latitude })},
            (err)=>{this.setState({ errorMessage: err.message })}
        )
    }

}


reactDOM.render(
    <App />,
    document.querySelector('#root')
)



