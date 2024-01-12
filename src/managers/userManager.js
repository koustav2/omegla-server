export class UserManager {
  constructor() {
    this.users = [];
    this.queue = [];
    // this.roomManager = new RoomManager();
  }
  addUser(name, socket) {
    this.users.push({
      name,
      socket,
    });
    this.queue.push(socket.id);
  }
  removeUser(socketId) {
    const user = this.users.find((x) => x.socket.id === socketId);
    this.queue = this.queue.filter((x) => x === socketId);
    this.users = this.users.filter((x) => x.socket.id !== socketId);
  }

  clearQueue() {
    console.log("inside clear queues");
    console.log(this.queue.length);
    if (this.queue.length < 2) {
      return;
    }

    const id1 = this.queue.pop();
    const id2 = this.queue.pop();
    console.log("id is " + id1 + " " + id2);
    const user1 = this.users.find((x) => x.socket.id === id1);
    const user2 = this.users.find((x) => x.socket.id === id2);
  }
}
