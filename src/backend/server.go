// +build ignore

package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"

	"github.com/emilyagras/agentGopher/messages"
	"github.com/gorilla/websocket"
)

var addr = flag.String("addr", "localhost:8080", "http service address")

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Handling connection from client...")
	socket, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("Error upgrading client to websocket connection: ", err)
		return
	}
	defer socket.Close()
	for {
		messageType, message, err := socket.ReadMessage()
		if err != nil {
			log.Println("read:", err)
			break
		}
		err = messages.ParseAndHandle(socket, string(message), messageType)
		if err != nil {
			break
		}
	}
}

func main() {
	flag.Parse()
	log.SetFlags(0)
	http.HandleFunc("/", handler)
	fmt.Println("Listening and serving at ", *addr)
	log.Fatal(http.ListenAndServe(*addr, nil))
}
