import React from "react";
import Comment from "./Comment";
import UserInfoContext from "../context/UserInfoContext";

export default function Post() {
    const { username, isAdmin } = React.useContext(UserInfoContext);

    return (<div>
        <h2>Post Title {isAdmin && <button>Delete</button>}</h2>
        <p> Post description</p>
        <Comment username={username} isAdmin={isAdmin} />
    </div>)
}