import "./css/text_highlight.scss"


interface InnerHtml {
    content: string;
}


function Text_highlighter(props: InnerHtml) {
    return (
        <>
            <span dangerouslySetInnerHTML={{ __html: highlight_text(props.content) }}></span>
        </>
    );


    function highlight_text(text: string) {
        let splited = text.split("¡")
        let output = ""

        for (let index in splited) {
            index = splited[index]
            if (index.startsWith("--")) {
                index = index.replace(/--(.*?)--/g, '<span class="highlight">¡¡$1¡¡</span>');
                index = index.replace(/_(.*?)_/g, '!!<span class="starting_highlight">$1</span>!!');
                index = index.replace(/¡¡(.*?)!!/g, '<span class="chars1">$1</span>');
                index = index.replace(/!!(.*?)¡¡/g, '<span class="chars2">$1</span>');
                output += index
            } else {
                output += index
            }
        }
        return output;

    }
}

export default Text_highlighter;