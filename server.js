const Websocket = require("ws")
const express = require("express")
var usernames = []
const sleep = async (ms) => new Promise((re) => setTimeout(re , ms) )

let statues = ["idle" , "dnd" , "online"]
const app = express()

app.get("/" , (req , res) => res.send("OK"))

app.listen(3000)


let _onclose = (ms) {

if(ms) { await sleep(ms) }

try { this.ws.close() } catch { }
try { clearInterval(this.inv) } catch { }

this.ws = new Websocket("wss://gateway.discord.gg/" , [])
this.ws.on("message" , (msg) => this._onmessage(msg))
this.ws.on("close" , () => { 
if(!this.closed) { console.log("closed "+ this.id); }
this.closed = true
this.seq = 0
if(this.first) { this.emit("done" , false); this.first = false };
this._onclose(10000)
})
this.ws.on("error" , (err) => this._onerror(err))
}


_onerror(err) {
this._onclose()
}