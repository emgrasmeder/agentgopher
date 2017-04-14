package main

import (
	"fmt"
	"log"
	"net/http"
)

func sayoahi(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, `{ "text": "ohai" }`) // send data to client side
}

func jsDisplay(w http.ResponseWriter, r *http.Request) {
}

func main() {
	http.HandleFunc("/asdf.json", sayoahi) // set router
	log.Fatal(http.ListenAndServe(":8080",
		http.FileServer(http.Dir("js-display"))))
}
