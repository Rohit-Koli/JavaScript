console.log('Hello Rohit Koli');

setTimeout(()=> {
    console.log('This is Timeout 01');
 },2000)

 setTimeout(()=> {
    console.log('This is Timeout 02');
 },0)

const fn = () => {
    console.log("Nothing")
  }
  
  const callback = (arg, fn) => {
      console.log(arg)
      fn()
  }
  
  const loadScript = (src, callback) => {
      let sc = document.createElement("script");
      sc.src = src;
      sc.onload = callback("Rohit", fn);
      document.head.append(sc)
  }
  
  
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )