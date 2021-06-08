

let BJGame = {
   'you' : {'scorespan' :'#your-black-jack-result' , 'div': '#your-box' , 'score' : 0,'case1':0,'case2':0,'case3':0},
   'dealer' : {'scorespan' :'#dealer-black-jack-result' , 'div': '#dealer-box' , 'score' : 0},
   'cards' : ['2','3','4','5','6','7','8','9','10','11','12','13','1'],
      'cardsMap' : {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'11':10,'12':10,'13':10,'1':[1,11]},
      'result' : {'win':'#w','loss':'#L','draw':'#D'},
};
const You= BJGame['you']
const Dealer= BJGame['dealer']
const Res= BJGame['result']
const m1 = new Audio('music1.aac')
const m2 = new Audio('music2.mpeg')
document.querySelector('#blackjack-hit').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand').addEventListener('click',blackjackDeal);
document.querySelector('#blackjack-deal').addEventListener('click',dealerLogic);
m2.loop=true;
m2.play();
function blackjackHit()
{
   let card = randomCard();
   console.log (card);
      shoeCard(card,You);
      uptade(card,You);
      console.log(You['score']);
    shoeSS(You);
}
function dealerLogic()
{
   let card = randomCard();
   shoeCard(card,Dealer);
   uptade(card,Dealer);
   console.log(Dealer);
   shoeSS(Dealer);

}
function blackjackDeal()
{
//m2.pause();
//m2.currentTime=0
//m2.play();
  determineWin(sh()) ;
   You['score']=0;
      Dealer['score']=0;
      let yourImg=   document.querySelector('#your-box').querySelectorAll('img');
      let compImg=   document.querySelector('#dealer-box').querySelectorAll('img');
      for(let i=0; i<yourImg.length;i++)     
      {yourImg[i].remove();}
       for(let i=0; i<compImg.length;i++)     
      {compImg[i].remove();}

      shoeSS(You);
      shoeSS(Dealer);
      document.querySelector('#your-black-jack-result').style.color ='#fff';
      document.querySelector('#dealer-black-jack-result').style.color ='#fff';
      
         
}
function computeWin(p)
{
   console.log('u  ' +p);
 /*  
   return winner;*/
}

function shoeCard(cardd,activeplayer)
{
   if(activeplayer['score'] <=21)
    {let card=document.createElement('img');
   card.src=cardd+'.jpg';
   document.querySelector(activeplayer['div']).appendChild(card);
   m1.play();
   }
}



function randomCard()
{
   let x =Math.floor (Math.random()*13);
   return BJGame[ 'cards' ][ x ] ;
}


function uptade(card,player)
{
   if(card=='1')
      {
         if(player['score'] + BJGame['cardsMap'][card][1] <=21)
            {
               player['score'] += BJGame['cardsMap'][card][1];
            }
         else
         {
               player['score']+=BJGame['cardsMap'][card][0];
         }
      }
      else
      
      {player['score']+=BJGame['cardsMap'][card];
      }
}

function shoeSS(p)
{
   var element = document.querySelector(p['scorespan']);
   if(p['score'] >21)
   {
    element.textContent='bust!';
        element.style.color = 'red';
   }
   else
{
if (element) {
       element.textContent = p['score'];
}
   }
}


function sh()
{


   if(You['score']<=21)
   {
      if(You['score']>Dealer['score'] || Dealer['score']>21)
         { return 1;}
      else if (You['score'] <Dealer['score'])
      {
         return -1;
      }
      else if (You['score'] ===Dealer['score'])
      { return 0;
      }
   }
   else if (You['score'] >21 && Dealer['score'] <=21)
   {
     return -1;
   }
   else if  (You['score'] >21 && Dealer['score'] >21)
   {return 0;
   }
   

}

function determineWin(x)
{
   var element;
   if(x==1)
      {
         You['case1'] += 1;
         element = document.querySelector(Res['win']);
            element.textContent = You['case1'];
         
         console.log('wins');
      }
   else if(x==0)
      {
         You['case2'] += 1;
         element = document.querySelector(Res['draw']); console.log('draw');
            element.textContent = You['case2'];
      }
  else
      {
         You['case3'] += 1;
         element = document.querySelector(Res['loss']); console.log('loss');
            element.textContent = You['case3'];
      }
}
