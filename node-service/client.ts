import { credentials } from "@grpc/grpc-js";
import { GreeterClient } from "./protos/helloworld_grpc_pb";
import { HelloRequest } from "./protos/helloworld_pb";

const client = new GreeterClient('127.0.0.1:9090', credentials.createInsecure());

const request = new HelloRequest().setName("Anders");

client.sayHello(request, (err, response) => {
    console.log(response.toString())
});