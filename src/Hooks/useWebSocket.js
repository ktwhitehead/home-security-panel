import { useState, useCallback, useRef, useEffect } from 'react';

const useWebSocket = (url) => {
    const [isConnected, setConnected] = useState(false);
    const [socket, setSocket] = useState(null);

    const reconnectInterval = useRef(5000);
    const onOpen = useRef(() => { });
    const onClose = useRef(() => { });
    const onMessage = useRef(() => { });
    const onError = useRef(() => { });

    const setOnOpen = (f) => {
        onOpen.current = f;
    };
    const setOnClose = (f) => {
        onClose.current = f;
    };
    const setOnMessage = (f) => {
        onMessage.current = f;
    };
    const setOnError = (f) => {
        onError.current = f;
    };

    const reconnect = useCallback(() => {
        const newSocket = new WebSocket(url);
        newSocket.onopen = (event) => {
            setConnected(true);
            onOpen.current(event);
        };
        newSocket.onmessage = (event) => {
            onMessage.current(event);
        }
        newSocket.onerror = (event) => {
            onError.current(event);
            setConnected(false);
        }
        newSocket.onclose = (event) => {
            onClose.current(event);
            setConnected(false);
            console.log('WebSocket disconnected.')
            setTimeout(() => {
                console.log("Websocket is attempting to reconnect.");
                reconnect();
            }, reconnectInterval.current);
        }
        newSocket.sendMessage = (message) => {
            newSocket.send(JSON.stringify(message));
        }
        setSocket(newSocket);
    }, [url]);

    useEffect(() => {
        reconnect()
    }, [reconnect]);

    return {
        socket,
        reconnect,
        isConnected, 
        setOnOpen,
        setOnMessage,
        setOnClose,
        setOnError
    }
}


export default useWebSocket;