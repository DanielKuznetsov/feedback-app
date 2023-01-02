import axios from "axios";

export async function statusHelper() {
  const requests = await axios.get("http://localhost:4000/api/v1/requests", {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  const newArr = [
    ["In-Progress", 0, "#AD1FEA", [], "Currently being developed"],
    ["Live", 0, "#62BCFA", [], "Released features"],
    ["Suggestion", 0, "#23af23", [], "Suggested for development"],
    ["Planned", 0, "#F49F85", [], "Ideas prioritized for research"],
  ];

  requests.data.data.requests?.forEach((req, index) => {
    if (req.status === "In-Progress") {
      newArr[0][1]++;
      newArr[0][3].push(req);
    }

    if (req.status === "Live") {
      newArr[1][1]++;
      newArr[1][3].push(req);
    }

    if (req.status === "Suggestion") {
      newArr[2][1]++;
      newArr[2][3].push(req);
    }

    if (req.status === "Planned") {
      newArr[3][1]++;
      newArr[3][3].push(req);
    }
  });

  return newArr;
}
