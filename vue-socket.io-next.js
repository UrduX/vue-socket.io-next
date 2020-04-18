import io from "socket.io-client";
import { reactive } from "vue";

let socketConfig = reactive({
  debug: false,
  connection: null,
  options: null,
});
const socket = io(socketConfig);

function debugMode() {
  if (socketConfig.debug) {
    console.log(
      `%c Socket Debug : ${socketConfig.debug}`,
      "color:white;background: green;padding:0px 10px"
    );
    console.log(
      `%c Socket Connection : ${socketConfig.connection}`,
      "color:white;background: green;padding:0px 10px"
    );
    if (socket.connected)
      console.log(
        `%c Socket Connected : ${socket.connected}`,
        "color:white;background: green;padding:0px 10px"
      );
    else
      console.log(
        `%c Socket Connected : ${socket.connected}`,
        "color:white;background: red;padding:0px 10px"
      );
  }
}

export function createSocket({
  debug: status,
  connection: url,
  options: path,
}) {
  socketConfig.connection = url;
  socketConfig.options = path;
  socketConfig.debug = status;
  debugMode();
}

export function useSocket() {
  return socket;
}
