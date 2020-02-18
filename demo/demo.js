import val from './import';

var test = false;

const test2 = "test";

function func() {
    return test;
}

const func2 = x => {
  return x;
};

func();
func2();

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const arr = ['8', '1', '2', '3', '4', '5'];

const arr2 = arr.map(x=>x*2);
const arr3 = arr.map((x)=> x * 2);
const arr4 = arr.map((x,i) => x * i);

const arrConcat = arr.concat(arr2,arr3,arr4);

const obj = {b: 1, a: 2, c: 3};


export {
  val,
  arrConcat,
  obj
};
