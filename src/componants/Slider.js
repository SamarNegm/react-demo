import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
export default function Slider(props) {

    let { count } = props;


    return (
        <Carousel style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://c4.wallpaperflare.com/wallpaper/86/168/901/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Current Count Is</h3>
                    <p>{count}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://c4.wallpaperflare.com/wallpaper/147/871/818/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Current Count Is</h3>
                    <p>{count}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://c4.wallpaperflare.com/wallpaper/121/20/857/digital-art-illustration-sunset-city-wallpaper-preview.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Current Count Is</h3>
                    <p>{count}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

}
