# Docker set up
```shell
docker build . -t num-test-fe
docker run -p 3000:3000 -d num-test-fe
```

# Manual set up
Please be sure that you are using node 16th version
```shell
yarn build && yarn start
```
