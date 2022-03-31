import Card from 'react-bootstrap/Card';
import React, { Component } from "react";
class MyCard extends Component {

    render() {

        let { Title, Body } = this.props;
        return (
            <Card className="col-3" style={{
                margin: '30px',
                boxSizing: 'content-box',
            }}>
                <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/966/951/802/digital-digital-art-artwork-illustration-fantasy-art-hd-wallpaper-preview.jpg" />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {Body}$
                    </Card.Text>
                </Card.Body>

            </Card>
        )
    }
}
export default MyCard;
