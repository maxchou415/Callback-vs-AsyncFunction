function exampleFunction () {
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
}
