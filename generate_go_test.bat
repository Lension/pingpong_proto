@echo off

protoc ^
  -I pb ^
  --go_out=.. ^
  pb\*.proto