map={}
map.heise={
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

map.pang={
  "f":"R",
  "v":"r",
  "w":"U",
  "e":"u",
  "z":"L",
  "a":"l",
  "r":"F",
  "q":"f",
  "c":"D",
  "x":"d",
  "d":"M",
  "s":"m",
  "i":"X",
  "k":"x",
  "j":"Y",
  "l":"y",
  "o":"Z",
  "u":"z",
  ";":"."
}

cube.rotation.y=0
cube.rotation.x=.6
lo='pang'
lm='xX'
onkeydown=e=>{
  e.ctrlKey||e.altKey||e.metaKey||((x=map[lo||'pang'][e.key])&&cube.twist(lm=x=='.'?lm:x))
}
