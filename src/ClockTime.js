import React from 'react';

class ClockTime extends React.Component {

    state = { time: new Date().toLocaleTimeString() };

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000);
    };

    render() {
        return (
            <div>
                the time is: { this.state.time }
            </div>
        );
    };
};

export default ClockTime; 