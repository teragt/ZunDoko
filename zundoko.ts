    let zunCounter = 0;
    let dokoFlag = 0;
    let count = 0;
    
    function getZunDoko(){

        while(zunCounter <= 4 && dokoFlag === 0){
            let zundon = Math.floor( Math.random() * 2);
            count++;
            
            if(zundon===0){
              console.log('ズン');
              if(zunCounter < 4)zunCounter++;
            }else if(zundon===1){
              console.log('ドコ');
              dokoFlag=0;
              if(zunCounter < 4)zunCounter=0;
              else if(zunCounter > 3)dokoFlag=1;
            }
        }
        console.log('き・よ・し！');
        console.log(count + '回目で成功')
    }

    getZunDoko();