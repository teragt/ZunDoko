    getZunDoko();

    function getZunDoko(){
        let zunCounter = 0;
        let dokoFlag = false;
        let count = 0;
        
        while(zunCounter <= 4 && dokoFlag === false){
            let zundon = Math.floor( Math.random() * 2);
            count++;
           
             if(zundon===0){
                 console.log('ズン');
                 if(zunCounter < 4)zunCounter++;
             }else if(zundon===1){
               console.log('ドコ');
               dokoFlag=false;
               if(zunCounter < 4)zunCounter=0;
               else if(zunCounter > 3)dokoFlag=true;
             }else{
                 console.log('ERROR!!!!!');
             }
        }
        console.log('き・よ・し！');
        console.log(count + '回目で成功')
}
