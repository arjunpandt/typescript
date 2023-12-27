interface User {
  username: string | null;
  githubid: string | null;
}

const loadingTime = (delaytime: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delaytime));
};

const validateForm = (user: User): Promise<void> => {
  // creating a promise to validate the form
  return new Promise((resolve, reject) => {
    if (user.username === "" || user.githubid === "") {
      // according to your validation logic here you can reject the promise can throw an error
      reject(new Error("Please fill all the fields"));
    } else {
      // if the validation is successful you can resolve the promise
      resolve();
    }
  });
};

//
const loading = async (): Promise<void> => {
  console.log("loading...");
  await loadingTime(3000);
  document.getElementById("loader")!.style.display = "none";
  console.log("done");
};
loading();

const submitForm = async (): Promise<any> => {
  try {
    console.log((<HTMLInputElement>document.getElementById("userName")).value);

    const userData: User = {
      username: (<HTMLInputElement>document.getElementById("userName")).value,
      githubid: (<HTMLInputElement>document.getElementById("githubID")).value,
    };

    // using this to show how to use async await
    const validatation = await validateForm(userData);

    // const response = await fetch(
    //   "https://jsonplaceholder.typicode.com/todos/1"
    // );
    // if (!response.ok) {
    //   throw new Error("Something went wrong");
    // }
  } catch (error) {
    console.log(error);
  }
};
