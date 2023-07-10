package main

import (
	"goservice/helloworld"
	"goservice/server"
	"log"
	"net"

	"google.golang.org/grpc"
)

func main() {
	println("gRPC server tutorial in Go")

	listener, err := net.Listen("tcp", ":9090")
	if err != nil {
		panic(err)
	}

	s := grpc.NewServer()
	helloworld.RegisterGreeterServer(s, &server.Server{})
	if err := s.Serve(listener); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
