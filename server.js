const Websocket = require("ws")
const express = require("express")
var usernames = []
const sleep = async (ms) => new Promise((re) => setTimeout(re , ms) )

let statues = ["idle" , "dnd" , "online"]
const app = express()

app.get("/" , (req , res) => res.send("OK"))

app.listen(3000)

this.closed = false

let _onmessage = async (msg) =>{
  
  console.log(msg)
  
}



let _onclose = async (ms) =>{

if(ms) { await sleep(ms) }

try { this.ws.close() } catch { }
try { clearInterval(this.inv) } catch { }

this.ws = new Websocket("wss://gateway.discord.gg/" , [])
this.ws.on("message" , (msg) => _onmessage(msg))
this.ws.on("close" , () => { 
this.closed = true
})
this.ws.on("error" , (err) => _onerror(err))
}


let _onerror = async (ms) =>{
this._onclose()
}

_onclose(true)
