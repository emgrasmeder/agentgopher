package manager

import (
	"sync"
)

type manager struct {
	agents []Agent
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
			agents: []Agent{},
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

func (m *manager) AddAgent(a Agent) {
	m.agents = append(m.agents, a)
}

func (m *manager) Restart() {
	m.steps = 0
	m.agents = []Agent{}
}

type Agent struct {
	id    int
	color string
}

func NewAgent() Agent {
	a := Agent{id: m.CountAgents()}
	m.AddAgent(a)
	return a
}

func (a *Agent) Id() int {
	return a.id
}
