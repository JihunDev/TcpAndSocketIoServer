# Test-TcpAndSocketIoServer
센서에서 들어온 값을 Unity로 보내주는 서버



## About the Project

- Tcp 통신으로 센서와 서버 통신

- Socket.Io를 이용해 서버와 Unity 통신

- 센서에서 서버는 1분단위로 데이터를 수신

  

## Getting Started

### Requirements

- Unity3D
- Node.js 8.11.3 LTS
- NPM 5.6.0
- Socket.io 1.7.4



### Installation

### Node.js

- 인터넷을 이용하여 다운로드후 설치



### NPM

#### Socket.io

```shell
npm install socket.io@1.7.4
```

#### Date-util

```shell
npm install date-util
```



### Usage

```
node ServerApp.js
```



## Troubleshooting

### Unity에서 Socket.io 사용

#### Trouble  

Unity에서 Socket.io 사용시 1.7.4 버전 이상을 사용하게되면 연결은 되지만 데이터가 안받아지는 문제 발생

#### Solution  

Socket.io를 1.7.4버전으로 인스톨하여 사용



## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) file for details.