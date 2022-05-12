import './display.css';
import '../Calculator/calculator.css';

import { useSelector } from 'react-redux';

export default function Display() {
    const display = useSelector(s => s.display);
    return (
        <>
            <div className="displayContainer">
                <div className="display">
                <p>{display.equation + (display.isRenderable ? (' = ' + eval(display.equation)) : "")}</p>
                </div>
               
            </div>
        </>
    );
}
