/*
export function get(url) {
  return fetch(url, {
    method: "GET",
  })
}
*/

export function post(url, data) {
  console.log("data", data)
  const formData = encode(data)

  return fetch(url, {
    method: "POST",
    body: formData,
    /*
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    */
  }).then(response => response.json())
}
const encode = data => {
  const formData = new FormData()
  Object.keys(data).map(key => {
    if (key === "resume") {
      for (const file of data[key]) {
        console.log("file", file)
        formData.append(key, file, file.name)
      }
    } else {
      formData.append(key, data[key])
    }
  })
  return formData
}
