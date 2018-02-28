function makeAdjectifier(adjective){
  return function (string) {
    return adjective + " " + string;
  };
}

var coolifier = makeAdjectifier("cool");
coolifier("conference");

// console.log("HI")
