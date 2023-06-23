import Text_highlighter from "./Text_highlighter";
type Type_data = {
    list: { title: string, list: string[] }[]
    category:string
}

function Techs(props: Type_data) {
  
    let techs = props.list
    return (
        <>
            <h1>
                <Text_highlighter content={props.category}></Text_highlighter>
            </h1>
            <div className="list">
                {techs.map((item, index) => (
                    <div key={index}>
                        <h2 className='tech-title'>
                            <Text_highlighter content={item.title}></Text_highlighter>
                        </h2>

                        {item.list.map((item, index) => (
                            <p key={index} className="tech-item">
                                <Text_highlighter content={item}></Text_highlighter>
                            </p>

                        ))}
                    </div>

                ))}
            </div>
        </>

    );
}

export default Techs;