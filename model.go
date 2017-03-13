package abm

// Model struct collects all model-level attributes for each agent based model.
// Models will have multiple agents, which are instances of the Agent struct
type Model struct {
	done bool
}

func (m *Model) IsDone() {
	return m.done
}
func (m *Model) RunModel() {
	for m.done != true {
		m.Step()
	}
	return
}
func (m *Model) Step() {
	return
}
