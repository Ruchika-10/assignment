function* a()
{
 var a=10;
 a++;
 yield a;
 a+=10;
yield a;
a-=5;
a++;
yield a;
}
a();
/* const it=a();
//we can use .next() for iterations
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//we can use for..of loop for iterations
for(j of it)
{
console.log(j);
}
*/
