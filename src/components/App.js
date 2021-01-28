import React from 'react';

//componentes
import Welcome from './Welcome';
import Tour from './Tour';

//estilos
import "../styles/App.css";

export default class App extends React.Component {
    render() {
        return (
            <div>
              <Welcome></Welcome>
              <Tour></Tour>
              {/* Albuns */}
              {/* Photos */}
              {/* Social */}
            </div>
        );
    }
}