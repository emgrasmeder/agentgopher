package abm

// Model struct collects all model-level attributes for each agent based model.
// Models will have multiple agents, which are instances of the Agent struct
type Model struct {
	stepsCompleted int
	maxSteps       int
	done           bool
}

func (m *Model) IsDone() bool {
	return m.done
}
func (m *Model) setDone(b bool) {
	m.done = b
	return
}
func (m *Model) StepsCompleted() int {
	return m.stepsCompleted
}
func (m *Model) SetMaxSteps(steps int) {
	m.maxSteps = steps
	return
}
func (m *Model) Step() {
	m.stepsCompleted += 1
	return
}
func (m *Model) Run() {
	for m.stepsCompleted < m.maxSteps {
		m.Step()
	}
	m.setDone(true)
	return
}
func (m *Model) RunModel() {
	for m.done != true {
		m.Step()
	}
	return
}
