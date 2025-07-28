const path=require("path")

const rootPath=path.dirname(require.main.filename)
console.log(path.dirname(require.main.filename));


module.exports=rootPath;