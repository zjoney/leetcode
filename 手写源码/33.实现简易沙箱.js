var foo='foo1'

var ctx={
  func:variable=>{
    console.log(variable)
  },
  foo: 'f1'
}

function simpleSandbox(code, ctx){
    with(ctx){
      eval(code)
    }
}
const code = `func(foo)`;

simpleSandbox(code, ctx)