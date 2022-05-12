import { useSelector } from 'react-redux';
import './history';
import '../Calculator/calculator.css';

export default function History() {
    const historyList = useSelector(s => s.history);

    return (
        <>
        <div className="historyContainer">
            <ul className="history">
                {
                    historyList.map(h =>
                        <li>
                            {h}
                        </li>
                    )
                }
            </ul>     
        </div>
        </>
    );
}
