package manager

import (
	"sync"
	"github.com/gorilla/websocket"
)

type manager struct {
	agents []*Agent
	steps  int
}

var (
	m    *manager
	once sync.Once
)

func CellManager() *manager {
	once.Do(func() {
		m = &manager{
			steps:  0,
			agents: []*Agent{},
		}
	})
	return m
}

func (m *manager) Steps() int {
	return m.steps
}

func (m *manager) Step() {
	m.steps += m.steps + 1
}

func (m *manager) CountAgents() int {
	return len(m.agents)
}

func ListAllAgents() []*Agent {
	m := CellManager()
	return m.agents
}

func AddAgent(a *Agent) {
	m = CellManager()
	m.agents = append(m.agents, a)
}

func (m *manager) Restart() {
	m.steps = 0
	m.agents = []*Agent{}
}

type Agent struct {
	id    string
	color string
}

func NewAgent(id, color string) *Agent {
	a := &Agent{id: id, color: color}
	AddAgent(a)
	return a
}

func (a *Agent) GetId() string {
	return a.id
}

func (a *Agent) GetColor() string {
	return a.color
}

func (a *Agent) SetColor(c string) {
	a.color = c
}

func ResetGrid(socket *websocket.Conn) {
	defaultColor := "white"
	//defaultCellCount := "324"
	err := socket.WriteMessage(1, []byte(`{"message":"initialize", "cellCount": "324", "color": "white"}`))
	if err != nil {
		panic(err)
	}
	for _, a := range ListAllAgents() {
		a.SetColor(defaultColor)
	}
}
