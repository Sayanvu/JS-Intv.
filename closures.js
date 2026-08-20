function outer ()
{
    count = 10;
    function inner (){
        count++;
        console.log(count);
    }
    return inner;
}



let fn = outer();
fn();
fn();
fn();
fn = null;
// fn();