const socket = io();

const offline = document.getElementById("offline");
const online = document.getElementById("online");
const btn = document.getElementById("btn");
const text = document.getElementById("text");

socket.on("connect", () => {
  offline.style.display = "none";
  online.style.display = "";
});
socket.on("disconnect", () => {
  offline.style.display = "";
  online.style.display = "none";
});
socket.on("send-message", (payload) => {
  console.log(payload);
});

btn.addEventListener("click", () => {
  const message = text.value;
  const payload = {
    message: text.value,
    id: "IDSUPERCACHONDO",
    date: new Date().getTime(),
  };
  socket.emit("send-message", payload, (args) => {
    console.log(args);
  });
});
