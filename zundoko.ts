    ZunDoko();

    function ZunDoko(){
        let zunCounter = 0;
        let dokoFlag = true;
        let count = 0;
        
        while(zunCounter <= 4 && dokoFlag){
            let zundon = Math.floor( Math.random() * 2);
            count++;
           
            if(zundon===0){
                console.log('ズン');
                zunCounter < 4 ? zunCounter++ : false;
             }else if(zundon===1){
               console.log('ドコ');
               zunCounter < 4 ? zunCounter=0:dokoFlag=false;
             }else{
                 console.log('ERROR!!!!!');
             }
        }
        console.log('き・よ・し！');
        console.log(count + '回目で成功')
}