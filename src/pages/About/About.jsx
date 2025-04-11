import React from "react";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

const aboutData = [
    {
        title: "Fiabilité",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum, urna at aliquet ultricies, tortor diam scelerisque massa, nec dignissim nulla metus non sem."
    },
    {
        title: "Respect",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum, urna at aliquet ultricies, tortor diam scelerisque massa, nec dignissim nulla metus non sem."
    },
    {
        title: "Service",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum, urna at aliquet ultricies, tortor diam scelerisque massa, nec dignissim nulla metus non sem."
    },
    {
        title: "Sécurité",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum, urna at aliquet ultricies, tortor diam scelerisque massa, nec dignissim nulla metus non sem."
    }
];

export default function About(){
    return(
        <div>
            <Banner text=""
            image={"/images/imgHome.png"}
            />
            {aboutData.map((item, index) => (
                <Collapse 
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    )
}