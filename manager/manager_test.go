package manager

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_ManagerHasSteps(t *testing.T) {
	m := CellManager()
	steps := m.Steps()
	assert.Equal(t, steps, 0, "should be equal")
}

func Test_ManagerIncreasesSteps(t *testing.T) {
	m := CellManager()
	m.Step()
	steps := m.Steps()
	assert.Equal(t, steps, 1, "should be equal")
}

func Test_ManagerHasAgents(t *testing.T) {
	m := CellManager()
	numAgents := m.CountAgents()
	assert.Equal(t, numAgents, 0, "should be equal")
}

func Test_ManagerResetsEveryTest(t *testing.T) {
	m := CellManager()
	m.Step()
	m.Restart()
	steps := m.Steps()
	assert.Equal(t, steps, 0, "should be equal")
}

func Test_ManagerCanAddAgents(t *testing.T) {
	m := CellManager()
	m.AddAgent(Agent{})
	numAgents := m.CountAgents()
	assert.Equal(t, numAgents, 1, "should be equal")
}

func Test_AgentHasId(t *testing.T) {
	m.Restart()
	a := NewAgent()
	assert.Equal(t, 0, a.Id(), "should be equal")
}

func Test_Agent_Id_Assigned_Consecutively(t *testing.T) {
	m.Restart()
	a := NewAgent()
	a2 := NewAgent()
	assert.Equal(t, 0, a.Id(), "should be equal")
	assert.Equal(t, 1, a2.Id(), "should be equal")
}
