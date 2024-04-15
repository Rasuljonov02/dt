import axios from "axios";

const baseURL = "http://localhost:4000/api";
// fetch datas
export async function getTodos() {
  try {
    const res = await axios.get(`${baseURL}/todos`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

//  delete items
export async function deleteItem(Id) {
  console.log(Id);

  try {
    const res = await axios.delete(`${baseURL}/todos/${Id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("O'chirilgan malumot:", res.data);
    return res.data;
  } catch (error) {
    console.error("Xatolik yuz berdi:", error.message);
  }
}
