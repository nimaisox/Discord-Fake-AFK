/**
 * @name FakeAFK
 * @version 1.0.0
 * @description Fake AFK Discord Buger
 * @author nimaisox
 * @authorId 631463369458843668
 * @invite DStAkkypnm
 * @source https://github.com/nimaisox/Discord-Fake-AFK
 */
 module.exports = class FakeAFK{
   
 load() { }
 start() {
  
var text = new TextDecoder("utf-8");
  
WebSocket.prototype.original = WebSocket.prototype.send;
WebSocket.prototype.send = function(data) {
    if (Object.prototype.toString.call(data) === "[object ArrayBuffer]") {
        if (text.decode(data).includes("self_deaf")) {
            console.log("Run");
            data = data.replace('"self_mute":false', 'Discord');
            console.log("Fake AFK On");
        }
    }
    WebSocket.prototype.original.apply(this, [data]);
}
window.BdApi.alert("success",`Stop the plugin!`);
}
stop(){

}
}
