package server

import (
	context "context"
	"goservice/helloworld"
)

// We define a server struct that implements the server interface. 🥳🥳🥳
type Server struct {
	helloworld.UnimplementedGreeterServer
}

// We implement the SayHello method of the server interface. 🥳🥳🥳
func (s *Server) SayHello(ctx context.Context, in *helloworld.HelloRequest) (*helloworld.HelloReply, error) {
	return &helloworld.HelloReply{Message: "Hello, " + in.GetName()}, nil
}
