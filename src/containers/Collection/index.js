import React from 'react';
import {Div, Flex, Rectangle, Text} from "./styles";
import Banner from "../../components/Banner";
/*import LinkCard from "../../components/LinkCard";*/
import credilikeme from "../../images/artis-example.jpg";
import SimpleCard from "../../components/SimpleCard";


function Collection() {
    return (
        <Div>
            <Banner
                content={
                    <div className="title">THE JAKA COLLECTION</div>
                }
            />
            <Text>
                <Rectangle />
                <span className="medium">The JAKA collection. </span>
                <span>I believe engaging with art is a spiritual pursuit, both for the creator and for the beholder. Art serves as a gateway to peek - if only for a moment - into other realms. Because of this ability of art to act as a spiritual gateway, I collect art by artists that remind me of the existence of other dimensions beyond what I can perceive: spiritual, intangible, and imaginary realms where consciousness and unconsciousness revel. I resonate with artists that use science, technology, and abstractions to create the conditions so that spectators can supersede their mental rationale with a conversation with their own higher selves. This is the foundation of my collection.
                </span>
                <span>
                    My collection also aims to capture a moment in art history where artists began to engage in artistic processes that could be understood as experiments; these artists would convey the emotional aspect of abstract expressionism, using a scientific approach. They experimented with sacred geometry, fauvism color gradients, and Bauhaus proportions to obtain abstractions that expressed their ideals. The outcomes of such processes are paintings and sculptures as byproducts of a creation process -- regardless of how methodical -- that allows for randomness. And it is that unknown, intuitive, and inspired variable inserted in a repetitive process, such as the creation process, that allows the artist to encounter the divine.
                </span>
                <span>
                    The art movements that influence my collection are Op art, Kinetic Art, Minimalism, and Geometric abstraction. Additional movements that serve as references to the above are: Sacred Mandala creations by Tibetans, Kandisky “spiritual in art ideals”, as well as abstract expressionism. I collect pieces that are representative of these movements or that were created using these movements as clear references. Artists in my collection may be referencing their work to: Victor Vasarely, Alexander Calder, and Carlos-Cruz Diez.
                </span>
                <span>
                    I selected Op art, Kinetic Art, Minimalism, and Geometric abstraction on the basis of the shared intent I sense in these movements. Op art is a straightforward reminder to the spectator that in life, we are experiencing an illusion. The reality that we experience is not the totality of who we are, or what exists. This cloudiness of clear perception is translated to Kinetic art. Our physical universe is constructed of particles that are in constant quantum conflict. Kinetic art mirrors physics by creating conflict between colors, shapes, and materials.  Artists set elements against one another to create atmospheres, illusions of movement and illusions of time and space. These conflicts result in a dynamic experience for the viewers, which they can control by changing their perspectives, a subtle reminder of our role as creators of our own realities.
                </span>
                <span>
                    Still within the themes of perspective and perception, Minimalism uses both geometry and space to seize the viewers’ senses. Once the attention is captured, the simplicity of Minimalism allows for artists to express higher concepts, because larger concepts are typically better expressed using fewer elements. A circle can serve as a vehicle for reminding us about our unity, continuity of life, or god. And if the viewer is allowed into the circle, the perspective change will result in an exponential effect on the same idea. The higher concept that I want to communicate with my collection is that there is a divine order in everything.
                </span>
                <span>
                    As Mark Rothko famously said, “A painting is not a picture of an experience; it is an experience itself”, my collection aims to push the spectator into a certain kind of experience; a Zen like meditation. My collection aims to facilitate a trance created by the inability of the mind to logically understand the beauty and meaning of each piece. In this way, my collection gifts the spectator with a spiritual experience that inspires and enriches their lives, as it does mine.
                </span>
                <span>
                    My commitment to the artists showcased in the JAKA collection is to honor and exhibit their post-material intentions and to share their ideals with as many people as possible. My wish is that this collection might be a worthy gift to humanity after my death – my transcendence to the next realm.
                </span>
                <span>Armando Kuroda</span>
            </Text>
            <div>
                <Flex>
                    <SimpleCard image={credilikeme} text="Artista 1 " />
                    <SimpleCard image={credilikeme} text="Artista 2 " />
                    <SimpleCard image={credilikeme} text="Artista 3 " />
                </Flex>
                <Flex>
                    <SimpleCard image={credilikeme} text="Artista 4 " />
                    <SimpleCard image={credilikeme} text="Artista 5 " />
                    <SimpleCard image={credilikeme} text="Artista 6 " />
                </Flex>
                <Flex>
                    <SimpleCard image={credilikeme} text="Artista 7 " />
                    <SimpleCard image={credilikeme} text="Artista 8 " />
                    <SimpleCard image={credilikeme} text="Artista 9 " />
                </Flex>
            </div>
            <Banner
                content={
                    <div className="big-title">ART & FINANCE</div>
                }
            />
        </Div>
    );
}

export default Collection;