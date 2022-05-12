import './calculator.css';

import { useState } from "react";
import { Provider } from "react-redux";

import Display from "../Display/display";
import NumPad from "../NumPad/num-pad";
import History from "../History/history";
import { calculationStore } from '../../stores/calculator-store';


export default function Calculator() {
    return (
       
        <>
         <div className="container">
            <Provider store={calculationStore}>
                    <div className="calcCore">
                    <History />
                    <Display />
                    <NumPad />
                </div>
        
            </Provider>
            </div>
        </>
    );
}
