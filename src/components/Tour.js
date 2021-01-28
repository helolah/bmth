import React from 'react';

//estilos
import "../styles/Tour.css";

export default class List extends React.Component {
    render() {
        return (
            <div className="Tour">
                <h1 className="Title">tour dates</h1>
                <div className="tourItems">
                    <div className="divisorLeft">
                        <p>18th may 2021</p>
                        <p>20th may 2021</p>
                        <p>22nd may 2021</p>
                        <p>23rd may 2021</p>
                        <p>25th may 2021</p>
                        <p>26th may 2021</p>
                    </div>
                    <div className="divisorCenter">
                        <p>lokomotiv arena</p>
                        <p>ice yekateringburg expo</p>
                        <p>tatneft arena</p>
                        <p>mtl arena</p>
                        <p>olymp</p>
                        <p>event hall</p>
                    </div>
                    <div className="divisorRight">
                        <p>novosibirsk, russia</p>
                        <p>yekaterinburg, russia</p>
                        <p>kazan, russia</p>
                        <p>samara, russia</p>
                        <p>krasnodar, russia</p>
                        <p>voronezh, russia</p>
                    </div>
                </div>
                <h3 className="subtitle">get tickets</h3>
            </div>
        );
    }
}