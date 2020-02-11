import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Mr. Anderson',
            address: 'Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        }
    }
    render () {
        return (
            <div className={'col-lg-4'}>
                <svg className={'bd-placeholder-img rounded-circle'} width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <h2>{this.state.name}</h2>
                <p>{this.state.address}</p>
                <p><a className={'btn btn-secondary'} href="#" role="button">View details »</a></p>
            </div>
        );
    }
}