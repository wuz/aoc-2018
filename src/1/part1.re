[@bs.module "fs"] external readFileSync: string => string => string = "";
[@bs.module "path"] external dirname: string => string = "";

let readFile = path => try (Some(readFileSync(path, "utf8"))) { | e => {Js.log(e); None} };

let defaultString = (str, ()) => switch (str) {
    | (Some(str')) => str'
    | (None) => "" 
}

readFile("./numbers.txt") 
    |>defaultString
    |>Js.String.split("\n") 
    |>Array.iter Js.log 