package manager

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCreateNewCell(t *testing.T) {
	var m = Manager{}
	m.NewCell("white")
	m.NewCell("red")
	m.NewCell("blue")
	m.NewCell("green")
	assert.Equal(t, m.agents[0].color, "white")
	assert.Equal(t, m.agents[1].color, "red")
	assert.Equal(t, m.agents[2].color, "blue")
	assert.Equal(t, m.agents[3].color, "green")
}
