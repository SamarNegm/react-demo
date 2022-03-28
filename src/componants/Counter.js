import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
export default function Counter(props) {
    let [count, setCount] = useState(0);
    let { onCountChange } = props;
    useEffect(() => {
        onCountChange(count);

    }, [count]);

    let increment = () => {
        setCount(count + 1);
    }
    let decrement = () => { setCount(count - 1); }

    return (
        <Card className="col-11" style={{
            margin: '30px',
            boxSizing: 'content-box',
        }}>

            <Card.Body style={{
                backgroundColor: '#DFDFDE'
            }}>
                <Card.Title>Current Value</Card.Title>
                <Card.Text>
                    {count}
                </Card.Text>
                <Button onClick={increment} variant="primary" style={{
                    margin: '30px',
                    boxSizing: 'content-box',
                    width: '70px',
                    borderRadius: '30px',
                    backgroundColor: '#8D8DAA',
                    borderColor: '#8D8DAA'
                }}>+</Button>
                <Button onClick={decrement} variant="primary" style={{
                    margin: '30px',
                    boxSizing: 'content-box',
                    width: '70px',
                    borderRadius: '30px',
                    backgroundColor: '#8D8DAA',
                    borderColor: '#8D8DAA'
                }}>-</Button>
            </Card.Body>
        </Card>
    )
}


