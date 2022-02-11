import React from 'react';
import Hero from "../../components/Hero";
import {Gif, Intro} from "./styles";
import trustCode from "../../images/trust-code.svg";


function Home() {
    return (
        <div>
            <Hero />
            <Intro>
                <span className="title">FREE PLAY</span>
                <span className="description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </span>
            </Intro>
            <Gif>
                <div><img src={trustCode} /></div>
                <span>The practicing mind</span>
            </Gif>
        </div>
    );
}

export default Home;