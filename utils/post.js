// const SERVER_URL = "http://localhost:3000/api";

const postData = async (resource = "", data = {}, url = SERVER_URL) => {
  try {
    const response = await fetch(`${url}/${resource}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export default postData;
