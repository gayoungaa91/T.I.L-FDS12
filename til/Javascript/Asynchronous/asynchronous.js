function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const getDog = async () => {
  await sleep(1000);
  return '멍멍'
}

const getRabbit = async () => {
  await sleep(500);
  return '깡총'
}

const getTuttle = async () => {
  await sleep(3000);
  return '느릿'
}

async function process() {
  // 비동기적으로 코드 진행
  const first = await Promise.race([getDog(), getRabbit(), getTuttle()])
  console.log(first);

  // 동기적으로 코드가 진행
  // const dog = await getDog()
  // console.log(dog);
  // const rabbit = await getRabbit()
  // console.log(rabbit);
  // const tuttle = await getTuttle()
  // console.log(tuttle);
}

process()