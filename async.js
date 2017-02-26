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
