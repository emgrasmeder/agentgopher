package messages

import (
	"fmt"
	"log"

	"github.com/gorilla/websocket"
)

//func ClearAllCells(socket *websocket.Conn, messageType int) (err error) {
//	manager.NewCell("blue")
//	for _, agent := range manager.CellManager().Agents {
//
//		fmt.Println("hello world" + string(agent.Id))
//		json := fmt.Sprintf(`{ "type":"update_color", "color":"blue", "id": %s }`, string(agent.Id))
//		fmt.Println("json: " + json)
//		err = socket.WriteMessage(messageType, []byte(json))
//	}
//	return nil
//}

func ParseAndHandle(socket *websocket.Conn, message string, messageType int) (err error) {
	log.Printf("Received message from client 1: %s", message)
	if string(message) == "ready" {
		fmt.Println("Writing {type:announcement, message:ready} to socket")
		err = socket.WriteMessage(messageType, []byte(`{"type":"announcement", "message":"ready"}`))
		//err = ClearAllCells(socket, messageType)
	} else if string(message) == "update" {
		err = socket.WriteMessage(messageType, []byte(`{"type":"announcement", "message":"ready"}`))
	}
	return err
}
