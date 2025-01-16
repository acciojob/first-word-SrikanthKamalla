function firstWord(s) {
  // your code here
	let i=0;
let n=s.length;
let t='';
s=s.trim();
while (i<n && s[i]!=' ') {
    t+=s[i];
    i++;
}
return t;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
