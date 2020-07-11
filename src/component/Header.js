import React from 'react';

const header = {
    textAlign: 'right'
}

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
        setInterval(() => this.tick(), 1000);
    }
    tick() {
        this.setState({date: new Date()});

    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <h1 className='text-info'>
                            <img src='Donut.png' style={{heigh: 50, width: 50}}></img> 
                        My Shop
                        </h1>
                    </div>
                    <div  class="col-6 col-md-4"  style={header}>
                        {this.state.date.toLocaleTimeString()}
                    </div>
                </div>
          </div>

           
        )
    }
}




