import Text_highlighter from "./Text_highlighter";

// import Text_highlighter from "./Text_highlighter";
type Type_data = {
    content: {
        title: string;
        highlight_title: string;
        sections: {
            subtitle: string;
            content: string;
        }[];
        category: string;
    }[];
    title: string;
};

function Proyects_list(props: Type_data) {
    return (
        <>
            <ul>
                {props.content.map((item, index) => (
                    <li key={index}>
                        <a className="link-pointer " href={"#" + item.title}>
                            <Text_highlighter content={item.highlight_title}></Text_highlighter>
                        </a>{" "}
                        {item.category}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Proyects_list;
