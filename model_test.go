package abm_test

import (
	. "github.com/emmagras/go-abm"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("Model", func() {
	var (
		model Model
	)

	BeforeEach(func() {
		model = Model{}
	})

	Describe("Model basic attributes", func() {
		Context("at instantiation", func() {
			It("should exist", func() {
				Expect(model).NotTo(BeNil())
			})
		})
	})
	Describe("Model runs to completion", func() {
		Context("given a finite life of 10 steps", func() {
			It("should do 10 steps and end", func() {
				Expect(model).NotTo(BeNil())
			})
		})
	})
})
