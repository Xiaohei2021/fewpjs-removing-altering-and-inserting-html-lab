// Write your code here!
document.body.removeChild(main)
const newHeader = document.createElement('h1')
document.body.appendChild(newHeader)

let victory = document.createElement('id')
newHeader.id = "victory"
newHeader.appendChild(victory)

let message = document.createTextNode("Leon is the champion") 



victory.appendChild(message)
