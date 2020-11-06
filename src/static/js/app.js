function App() {
    const { Container, Row, Col } = ReactBootstrap;
    return (
        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    Account
                    <AddItemForm service='account'/>
                    Authentication
                    <AddItemForm service='authentication'/>
                </Col>
            </Row>
        </Container>
    );
}

function AddItemForm(service) {
    const { Form, InputGroup, Button } = ReactBootstrap;

    const [message, setMessage] = React.useState('');
    const [sending, setSending] = React.useState(false);
    const [receiving, setReceiving] = React.useState(false);

    const sendMessage = e => {
        e.preventDefault();
        setSending(true);
        fetch('/msg', {
            method: 'POST',
            body: JSON.stringify({name: message}),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(r => r.json())
        .then(response => {
            console.log("Sending: " + response.body);
            setSending(false);
            setMessage("");
        });
    };

    const receiveMessage = e => {
        e.preventDefault();
        setReceiving(true);
        fetch('/api/'.concat(JSON.stringify(service).slice(12, -2)), {
            method: 'GET',
            body: JSON.stringify(),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(r => r.json())
            .then(response => {
                if(response == false) console.log("No message to receive!");
                else console.log("Received: "+response.body)
                setReceiving(false);
            });
    };

    return (
        <Form>
            <InputGroup className="mb-3">
                <Form.Control
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    type="text"
                    placeholder="New message"
                    aria-describedby="basic-addon1"
                />
                <InputGroup.Append>
                    <Button
                        onClick = {sendMessage}
                        type="submit"
                        variant="success"
                        disabled={!message.length}
                        className={sending ? 'disabled' : ''}
                    >
                        {sending ? 'Sending' : 'Send message'}
                    </Button>
                    <Button
                        onClick = {receiveMessage}
                        type="submit"
                        variant="success"
                        className={receiving ? 'disabled' : ''}
                    >
                        {receiving ? 'Receiving' : 'Receive message'}
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
