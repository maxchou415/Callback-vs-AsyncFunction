# Callback vs Async Function
Please DO NOT run this project, this is a example project.

#Callback
```javascript
(exampleFunction () => {
  A.find({}, (err, aData) => {
    if(err) console.log(err)
    B.find({}, (err, bData) => {
      if(err) console.log(err)
      C.find({}, (err, cData) {
        if(err) console.log(err)
        console.log('A', aData)
        console.log('B', bData)
        console.log('C', cData)
      })
    })
  })
})
```

#Async Function
```javascript
(async () => {
  try {
    let A = await A.find({})
    let B = await B.find({})
    let C = await C.find({})

    console.log('A', A)
    console.log('B', B)
    console.log('C', C)
  } catch(e) {
    console.log(e)
  }
})
```
