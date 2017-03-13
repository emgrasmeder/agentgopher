package abm_test

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"

	"testing"
)

func TestGoAbm(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "GoAbm Suite")
}
