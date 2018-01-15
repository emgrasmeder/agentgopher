package manager

type Manager struct {
	agents []agent
	count  int
}

type agent struct {
	num   int
	color string
}

func (m *Manager) NewCell(color string) {
	m.agents = append(m.agents, agent{num: m.count, color: color})
	m.count++
}
