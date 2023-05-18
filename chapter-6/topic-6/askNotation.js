let postDetails = null;

console.log(postDetails?.title);
console.log(postDetails?.body);

postDetails = {
  id: 1,
  title: "a",
  body: "b",
};

console.log(postDetails?.title);
console.log(postDetails?.body);
