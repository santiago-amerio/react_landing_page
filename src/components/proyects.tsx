import Text_highlighter from "./Text_highlighter";
import { useState } from 'react';
// import Text_highlighter from "./Text_highlighter";
type Type_data = {
    content: {
        title: string;
        sections: {
            subtitle: string;
            content: string;
        }[];
        category: string;
    };
};

type Type_item = {

    subtitle: string;
    content: string;

}

function Proyects(props: Type_data) {
    return (
        <>
            <h1>
                {props.content.title}
                <small className="subtitle">({props.content.category})</small>
            </h1>

            {props.content.sections.map((item, index) => (
                <div key={index}>
                    <Section subtitle={item.subtitle} content={item.content}></Section>
                </div>
            ))}
        </>
    );
}


function Section(props: Type_item) {
    const [showContent, setShowContent] = useState(false);

    const toggle_content = () => {
        setShowContent(!showContent);
    };

    return (
        <>
            <div onClick={toggle_content} className="proyect-section-title pointer inline-block">
                <Text_highlighter content={props.subtitle}></Text_highlighter>
            </div>
            <div className={`proyect-section-content animated ${showContent ? 'show' : 'hidden'}`}>
                <Text_highlighter content={props.content}></Text_highlighter>
            </div>
        </>
    );
}




export default Proyects;
