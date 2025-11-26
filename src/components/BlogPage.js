import Post from "./Post";
import React from "react";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

export default function BlogPage() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (<div>
        <p> Current theme:  {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>Blog</h1>
        <Post />
    </div>)
}