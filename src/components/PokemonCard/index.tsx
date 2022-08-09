import './styles/index.css';
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react';


interface Props {
    name : string;
    number : number;
}

const PokemonCard = ({
    name,
    number,
} : Props) => {

    const [image, setImage] = useState<string | undefined | null>("");

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                setImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`)
            }, 1500);
        }
    }, [inView]);

    return (
        <div ref={ref} className={`pokemonCard ${!image? 'animate-pulse' : ''}`} onClick={() => {
            alert('bbb')
        }}>
            {image ? <img src={image} alt={name} /> : (
                <div className="imageEmpty">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
                    </svg>
                </div>
            )}
            <h2>{name}</h2>
            <button className='buttonPlus' onClick={(e) => {
                e.stopPropagation()
                alert('aaa')
            }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </button>
        </div>
    );
}

export { PokemonCard };