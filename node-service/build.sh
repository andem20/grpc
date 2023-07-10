#!/bin/bash
protoc \                               
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_proto_opt=outputServices=grpc-js,env=node,esModuleInterop=true \
    --ts_out=grpc_js:./protos \
    -I ../proto \
    ../proto/**/*.proto


protoc \
    --js_out=import_style=commonjs,binary:./protos \
    --grpc_out=grpc_js:./protos \
    --plugin=protoc-gen-grpc=./node_modules/.bin/ \
    -I ../proto \
    ../proto/*.proto