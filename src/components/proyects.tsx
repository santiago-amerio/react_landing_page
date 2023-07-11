import Text_highlighter from "./Text_highlighter";

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

function Proyects(props: Type_data) {
    console.log(props);

    return (
        <>
            <h1>
                {props.content.title}
                <small className="subtitle">({props.content.category})</small>
            </h1>
            
            {props.content.sections.map((item, index) => (
                <div key={index}>
                    
                    <Text_highlighter content ={item.subtitle}></Text_highlighter>
                    
                    <Text_highlighter content={item.content}></Text_highlighter>
                </div>
            ))}
        </>
    );
}

export default Proyects;
