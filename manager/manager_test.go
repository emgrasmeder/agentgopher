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
	AddAgent(&Agent{})
	numAgents := m.CountAgents()
	assert.Equal(t, numAgents, 1, "should be equal")
}

func Test_ResetMakesAllAgentColorWhite(t *testing.T) {
	m.Restart()
	a := NewAgent("111", "cadetblue")
	a2 := NewAgent("222", "cadetblue")
	a3 := NewAgent("333", "cadetblue")

	ResetGrid()
	assert.Equal(t, "white", a.GetColor(), "should be equal")
	assert.Equal(t, "white", a2.GetColor(), "should be equal")
	assert.Equal(t, "white", a3.GetColor(), "should be equal")
}
