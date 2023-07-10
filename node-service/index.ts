import {
    ServerUnaryCall,
    sendUnaryData,
    ServerWritableStream,
    ServerReadableStream,
    ServerErrorResponse,
    Server,
    ServerCredentials,
} from "@grpc/grpc-js";
import { GreeterService, IGreeterServer } from "./protos/helloworld_grpc_pb";
import { HelloRequest, HelloReply } from "./protos/helloworld_pb";

export const GreeterServer: IGreeterServer = {
    sayHello: function (call: ServerUnaryCall<HelloRequest, HelloReply>, callback: sendUnaryData<HelloReply>): void {
        callback(null, new HelloReply().setMessage(call.request.getName()));
    }
};

const server = new Server();
const port = 9090;
const uri = `127.0.0.1:${port}`;

console.log(`Listening on ${uri}`);

server.addService(GreeterService, GreeterServer);
server.bindAsync(uri, ServerCredentials.createInsecure(), (err: Error | null) => {
  if (err) console.log(err);
  server.start();
});