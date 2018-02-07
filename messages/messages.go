package messages

import (
	"log"

	"github.com/gorilla/websocket"
	"encoding/json"
	"github.com/emilyagras/agentGopher/manager"
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

type Response2 struct {
	MessageType string            `json:"messageType"`
	Content     map[string]string `json:"content"`
}

func ParseAndHandle(socket *websocket.Conn, message string) (err error) {
	parsedMessage := Response2{}
	json.Unmarshal([]byte(message), &parsedMessage)

	log.Printf("Received message from client 1: %s", parsedMessage)
	if parsedMessage.MessageType == "announcement" {
		if parsedMessage.Content["message"] == "ready" {
			manager.ResetGrid(socket)
		}
	} else if parsedMessage.MessageType == "update" {
		id := parsedMessage.Content["id"]
		color := parsedMessage.Content["color"]
		manager.NewAgent(id, color)
	}
	if message == "update" {
		err = socket.WriteMessage(1, []byte(`{"type":"announcement", "message":"ready"}`))
	}
	if parsedMessage.MessageType == "clear_all" {
		manager.ResetGrid(socket)
	}
	return err
}
