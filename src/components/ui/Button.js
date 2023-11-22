    import styled from "styled-components";

    const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    margin: 0.4rem;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;

    background: ${function(props) {
    if(props.variant === "primary"){
        return "linear-gradient(90deg, rgba(18,28,91,1) 16%, rgba(0,0,0,1) 45%, rgba(66,125,65,1) 63%);"
    }

    else if(props.variant === "secondary"){
        return "linear-gradient(90deg, rgba(18,28,91,1) 16%, rgba(0,0,0,1) 41%, rgba(158,4,4,1) 63%);"
    }

    else {
        return "#6c6c6c838"
    }
    }};

    `



    export default Button;