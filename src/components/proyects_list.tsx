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
                <small className="text-small">({props.content.category})</small>
            </h1>
            
            {props.content.sections.map((item, index) => (
                <div className="sec" key={index}>
                    <small>{item.subtitle}</small>
                    <div>{item.content}</div>
                </div>
            ))}
        </>
    );
}

export default Proyects;
