export default function Card() {
    const cardStyle = {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px",
        maxWidth: "300px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textAlign: "center"
    };

    const imageStyle = {
        width: "100%",
        height: "auto",
        borderRadius: "4px",
        marginBottom: "12px"
    };

    const linkStyle = {
        display: "inline-block",
        margin: "8px",
        padding: "8px 16px",
        backgroundColor: "#edc84b",
        color: "white",
        textDecoration: "none",
        borderRadius: "4px",
        fontWeight: "bold"
    };

    return (
        <div style={cardStyle}>
            <img 
                src="descarga.jfif" 
                alt="Sample" 
                style={imageStyle}
            />
            <p>Granjas El Pollón</p>
            <div>
                <a href="https://www.linkedin.com/in/ellenjhernandezt" style={linkStyle}>LinkedIn</a>
                <a href="https://github.com/Jarelen" style={linkStyle}>Github</a>
            </div>
        </div>
    );
}