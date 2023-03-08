package main

import (
	"os"
	"time"
)

func main() {
	f, _ := os.OpenFile("/tmp/foo-pipe", os.O_WRONLY, os.ModeNamedPipe)
	defer f.Close()

	for {
		currentTime := time.Now().Format(time.UnixDate)
		message := "Ping Node"
		_, err := f.WriteString(currentTime + " " + message)
		if err != nil {
			panic(err)
		}
		time.Sleep(time.Second)
	}
}
