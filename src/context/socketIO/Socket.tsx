import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from './socket.context';
export const SocketIO = () => {
  const [isConnected, setIsConnected] = useState(false);
  const socket = useContext(SocketContext);
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
      setIsConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.disconnect();
      setIsConnected(false);
    };
  }, []);


  return (
    <div>
      {isConnected ? <p>Connecting</p> : <p>Not Connecting</p>}
    </div>
  );
};

