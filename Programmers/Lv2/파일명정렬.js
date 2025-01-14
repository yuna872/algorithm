function solution(files) {
  var answer = [];
  let arr = [];
  files.forEach((file, idx) => {
      const fileStr = file.replace(/\s+/g, "").split("");
      let start = -1;
      let end = -1;
      console.log(fileStr)
      // 맨 마지막이 숫자일 경우
      if(!isNaN(fileStr.slice(-1))) end = fileStr.length
    fileStr.forEach((str, i) => {
      if (start === -1 && !isNaN(str)) start = i;
      else if (start >= 0 && end === -1 && isNaN(str)) {
        if(i-start > 5) end = start + 5
        end = i;
      }
    });
    arr.push([
      idx,
      fileStr.slice(0, start).join(""),
      fileStr.slice(start, end).join(""),
      fileStr.slice(end).join(""),
    ]);
  });
  arr.sort(
    (a, b) =>
      a[1].toUpperCase().localeCompare(b[1].toUpperCase()) ||
      Number(a[2]) - Number(b[2])
  );

  answer = arr.map((item) => files[item[0]]);

  return answer;
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);
console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);
