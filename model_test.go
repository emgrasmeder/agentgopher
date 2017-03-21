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
		Context("given a Run call", func() {
			BeforeEach(func() {
				model.Run()
			})
			It("should end after running", func() {
				Expect(model.IsDone()).To(Equal(true))
			})
		})
		Context("given a Run call with 10 steps", func() {
			var steps int
			BeforeEach(func() {
				steps = 10
				model.SetMaxSteps(steps)
				model.Run()
			})
			It("should end and be 10 steps old", func() {
				Expect(model.StepsCompleted()).To(Equal(steps))
			})
		})
	})
	Describe("Step function advances the model one step", func() {
		Context("when the step function is called", func() {
			It("should advance the Steps Completed one step", func() {
				Expect(model.StepsCompleted()).To(Equal(0))
				model.Step()
				Expect(model.StepsCompleted()).To(Equal(1))
			})
		})
	})
})
