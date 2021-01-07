function showDate() {
  const d = new Date();
  let data = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDay()}`;
  alert("Today is : " + data);
}
