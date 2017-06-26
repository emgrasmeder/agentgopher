package main

import (
	"encoding/json"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("js-display"))
	http.HandleFunc("/helloworld.json", deliverFile)
	http.Handle("/", fs)
	http.ListenAndServe(":8080", nil)
}

func deliverFile(w http.ResponseWriter, r *http.Request) {
	type File struct {
		Hello string
	}
	f := File{"world!"}

	js, err := json.Marshal(f)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}
