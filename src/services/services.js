export default function PlanesList() {
  return fetch("/planes.json")
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
