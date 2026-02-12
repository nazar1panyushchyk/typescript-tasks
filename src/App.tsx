import './App.css';

function App() {
  //task1
  let age: number = 50;
  let name: string = "Max";
  let toggle: boolean = true;
  let empty: null = null;
  let notInitialize: undefined = undefined;
  let callback = (a: number): number => {
    {return 100 + a}
  };
  console.log(age, name, toggle, empty, notInitialize);
  console.log(callback(2));
  
  //task2
  let anything: unknown = -20;
  anything = "Text";
  anything = {};
  console.log(anything);

  //task3
  let some: unknown;
  some = "Text";

  let str: string;

  if (typeof some === "string") {
    str = some;
  };
  console.log(some);

  //task4
  let person: [string, number];
  person = ["Max", 21];
  console.log(person);

  //task5
  // enum Status {
  //   LOADING = "LOADING",
  //   READY = "READY",
  // }

  // let status: Status;
  // status = Status.LOADING;
  // console.log(status);
  
  //task6
  let combine: string | number;
  combine = "Text";
  combine = "5";
  console.log(combine);
  
  //task7
  let literal: "enable" | "disable";
  literal = "enable";
  console.log(literal);

  //task8
  function showMessage(message: string): void {
    console.log(message);
  }
  console.log(showMessage);
  
  function calc(num1: number, num2: number): number {
    return num1 + num2;
  }
  console.log(calc);

  function customError(): never {
    throw new Error("Error");
  }
  console.log(customError);
  
  //task9
  type Page1 = {
    title: string,
    likes: number,
    accounts: string[],
    status: string,
    details: {
      createAt: Date,
      updateAt: Date,
    }
  };

  const page1: Page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
      createAt: new Date("2021-01-01"),
      updateAt: new Date("2021-05-01"),
    },
  };
  console.log(page1);
  

  type Page2 = {
    title: string,
    likes: number,
    accounts: string[],
    status: string,
  }

  const page2: Page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
  };
  console.log(page2);
  
  return (
    <>
     <h2>Typescript tasks</h2>
    </>
  )
}

export default App
