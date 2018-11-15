import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import Room from './components/Room';

const host = process.env.HOST || 'http://localhost:8080';
console.log(host)
const socket = io.connect(host);
socket.on('connect', function (data) {
    socket.emit('my other event', { my: 'data' });
});

const div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);

class App extends React.Component {
    render(){
        return(
            <div>
                <Room />
            </div>
        )
    }
}

ReactDOM.render(<App />, div);
