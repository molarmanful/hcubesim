map={
  "i":"R",
  "k":"r",
  "j":"U",
  "f":"u",
  "d":"L",
  "e":"l",
  "h":"F",
  "g":"f",
  "s":"D",
  "l":"d",
  ";":"Y",
  "a":"y",
  "w":"B",
  "o":"b",
  "y":"X",
  "t":"x",
  "b":"X",
  "n":"x",
  "p":"Z",
  "q":"z",
  "u":"Rm",
  "m":"rM",
  "v":"LM",
  "r":"lm",
  "z":"UE",
  "x":"ue"
}

cube.rotation.y=0
cube.rotation.x=.6
onkeydown=e=>{
  e.ctrlKey||e.altKey||e.metaKey||((x=map[e.key])&&cube.twist(x))
}
