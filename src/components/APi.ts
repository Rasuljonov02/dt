import axios from "axios";
const ImgUrl = "https://jsonplaceholder.typicode.com/photos";
const baseURL = "http://localhost:4000/api";
// fetch datas
export async function getTodos() {
  try {
    const res = await axios.get(`${baseURL}/todos`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

//  delete items
export async function deleteItem(id: any) {
  console.log(id);

  try {
    const res = await axios.delete(`${baseURL}/todos/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("O'chirilgan malumot:", res.data);
    return res.data;
  } catch (err: any) {
    console.log("Xatolik yuz berdi:", err.message);
  }
}

export async function getUsername(nemes: string) {
  // const axios = require('axios');

  const options = {
    method: "GET",
    url: `https://instagram-profile1.p.rapidapi.com/getprofile/${nemes}`,
    headers: {
      "X-RapidAPI-Key": "a4190b5426mshe46583b9c044cb6p136b48jsn839770809808",
      "X-RapidAPI-Host": "instagram-profile1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  // try {
  //   const res = await axios.get(`${ImgUrl}`);
  //   return res.data;
  // } catch (err) {
  //   console.log(err);
  // }
}
