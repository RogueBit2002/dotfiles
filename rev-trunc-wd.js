import path from "path"

let workingDirectory = process.cwd();
    workingDirectory = workingDirectory.startsWith(process.env.HOME) 
        ? "~" + workingDirectory.slice(process.env.HOME.length) 
        : workingDirectory;

console.log(workingDirectory);
/*
const parts = workingDirectory.split("/");

let output = parts.pop();
if(parts.length > 0) {
    
    const budget = 16;

    let space = budget - output.length;
    while(parts.length > 0 && space > 0)
    {

    }
}*/
//console.log(output);
/*
const budget = process.argv.length < 3
    ? 16 : Number(process.argv[2]);
const prefix = "..."

process.stdout.write((() => {
    //Replace $HOME with ~
    let workingDirectory = process.cwd();
    workingDirectory = workingDirectory.startsWith(process.env.HOME) 
        ? "~" + workingDirectory.slice(process.env.HOME.length) 
        : workingDirectory;

    if(workingDirectory.length <= budget)
        return workingDirectory;
    
    let base = path.basename(workingDirectory);
    
    let space = budget - base.length;

    if(base.length >= budget)
        return base;    

    if(space < prefix.length + 1)
        return base;
    
    let output = base;
    let parent = workingDirectory.substring(0, workingDirectory.length - base.length - 1)

    let parts = parent.split("/");

    //console.log(space);
    while(parts.length > 0) {
        let part = parts.pop();
        const l = part.length + 1;

        if(l >= space - (prefix.length + 1)) break;
        space -= l;

        output = part + "/" + output;
    }

    output = prefix + "/" + output;

    return output;
})());*/