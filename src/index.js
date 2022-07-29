import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from "./App/App";

const containner = document.getElementById( 'root' );
const root = ReactDOM.createRoot( containner );
root.render( <App/> );