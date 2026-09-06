// -------------1
let result: string;

function concat(a: string, b: string) {
  return result = a + b;
}

concat('Hello ', 'World');


//--------------2

interface MyFirstInterface {
  howIDoIt: string,
  simeArray: (string | number)[],
  withData: [{
    howIDoIt: string,
    simeArray: (string | number)[]
  }]
}

const MyHometask: MyFirstInterface = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}


//--------------3
const myArray: MyArray<number> = [1, 2, 3];

interface MyArray<T> {
  [N: number]: T;

  //добавьте типизацию для метода reduce

  reduce<U>(
    callback: (state: U, element: T, index: number, arr: T[]) => U, firstState: U
  ): MyArray<T>

}

const initialValue = 0;

myArray.reduce((accumulator: number, value: number) => accumulator + value, initialValue);



//--------------4
interface IHomeTask {
  data: string
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }

}

const homeTask:  MyPartial<IHomeTask> = {
  externalData: {
    value: 'win'
  }

}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

