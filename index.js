const fs=require('fs')
fs.readFile('First.txt', 'utf-8', (err, data) => {
    console.log(err,data)
})
console.log('after Function') 
