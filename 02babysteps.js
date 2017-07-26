var n_Result = 0;
for (var i=2; i < process.argv.length; i++){
  n_Result += Number(process.argv[i]);
}
console.log(n_Result);
