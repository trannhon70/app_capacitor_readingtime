import React from "react";
import io from "socket.io-client";

const SOCKET_SERVER_URL = 'https://backend-chat-latest.onrender.com';

const config = {
    reconnectionDelay: 10000,
    reconnectionDelayMax: 10000 
}

export const socketInstance = io(SOCKET_SERVER_URL, config)
export const SocketContext = React.createContext(socketInstance);