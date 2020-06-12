import React from 'react';
//import PropTypes from 'prop-types';
class Glad extends React.Component{
    state ={
        times:0
    };
    name ="glad";
    add= () => {
        console.log("add call")
        this.state.times++;
        
    };
    sub = () =>{
        console.log("sub call")
        this.state.times--;
        
    };
    render(){
        console.log(this.state);
        console.log(this.props);
        return(
            <div>
                <h2>
                    Glad you came I said {this.state.times} times
                </h2>
            <button onClick={this.add}>add</button>
            <button onClick={this.sub}>sub</button>
            </div>
            
        );    
    };
}



export default Glad;

