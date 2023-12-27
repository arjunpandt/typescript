interface User {
  username: string | null;
  githubid: string | null;
  gender: string | null;
  country: string | null;
}

const loadingTime = (delaytime: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delaytime));
};

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

    // const userData: User = {
    //   username: (<HTMLInputElement>document.getElementById("userName")).value,
    //   githubid: (<HTMLInputElement>document.getElementById("githubID")).value,
    //   gender: (<NodeListOf<HTMLInputElement>>(
    //     document.getElementsByName("gender")
    //   )).value,
    //   country: (<HTMLSelectElement>document.getElementById("country")).value,
    // };

    // console.log(userData.username);

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    // console.log("before loading");
    // await loadingTime(3000);
    // console.log("after loading");
    // it's just to show how catch block works
    // setTimeout(() => {
    //   throw new Error("Chill , it's just a demo");
    // }, 3000);
  } catch (error) {
    console.log(error);
  }
};
