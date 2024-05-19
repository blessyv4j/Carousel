import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import "./styles.css";

const Login = () => {
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const [username, setUsername] = useState("");
    
    // const LoginDiv = styled.div`
    // width:100%;
    // display: flex;
    // justify-content: end;
    // `
    // const LoginButton = styled.button`
    // margin-right:24px;
    // border: 1px solid #40E0D0;
    // border-radius: 48px;
    // background-color: #40E0D0;
    // padding: 12px 48px;
    // `
    // const LoginPromptDiv = styled.div`
    // display: flex;
    // flex-direction: column;
    // `

    // const PromptInput = styled.input`
    // margin: 12px 24px 12px 0px;
    // padding: 12px;
    // border-radius: 5px;
    // `
    // const ValidateButton = styled.button`
    // border: 1px solid #40E0D0;
    // border-radius: 48px;
    // background-color: #40E0D0;
    // padding: 12px 48px;
    // margin-right: 24px;
    // `
    
    const handleSubmit = () => {
        const hardcodedUsername = "Blessy";
        if (username === hardcodedUsername) {
            alert(`Hi ${hardcodedUsername}`);
            document.cookie = `username=${username}`;
            setShowLoginPrompt(!showLoginPrompt);
            window.location.href = "/"

        } else {
            alert("Invalid username");
        }
    };
    useEffect(() => {
        if (document.cookie) {
            setShowLoginButton(false);
        }
    }, [showLoginButton])

    const toggleLoginPrompt = () => {
        setShowLoginPrompt(!showLoginPrompt);
        setShowLoginButton(!showLoginButton);
    };
    return (
        <div className="LoginDiv">
            {showLoginButton && (<button className="LoginButton" onClick={toggleLoginPrompt}>Login</button>)}
            {showLoginPrompt && (
                <div className="LoginPromptDiv">
                    <input
                    className="PromptInput"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className="ValidateButton" onClick={handleSubmit}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default Login;