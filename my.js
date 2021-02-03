function touch(a1,b1)
{
  if(b1.x-a1.x<=a1.width/2+b1.width/2&&a1.x-b1.x<=a1.width/2+b1.width/2
    &&b1.y-a1.y<=a1.height/2+b1.height/2 && a1.y-b1.y<=a1.height/2+b1.height/2){

      return true;


    }

else
{
return false;
}
}

function boff(a1,b1)
{
  if(b1.x-a1.x<=a1.width/2+b1.width/2&&a1.x-b1.x<=a1.width/2+b1.width/2)
{
  a1.velocityX=-1*a1.velocityX;
}
else if(b1.y-a1.y<=a1.height/2+b1.height/2 && a1.y-b1.y<=a1.height/2+b1.height/2){
 a1.velocityY=-1*a1.velocityY 
}
}