    ZunDoko();

    function ZunDoko() {
        let zun_Counter = 0;
        let kiyoshi_Flag = false;
        let count = 0;
        
        while( zun_Counter <= 4 && !kiyoshi_Flag ) {
            let zundon = Math.floor( Math.random() * 2 ) >= 1 ? true : false;
            count++;
           
            if( zundon === true ) {
                console.log('ズン');
                zun_Counter < 4 ? zun_Counter++ : false;
            } else if( zundon === false ) {
                console.log('ドコ');
                zun_Counter < 4 ? zun_Counter=0 : kiyoshi_Flag=true;
            } else {
                console.log('ERROR!!!!!');
            }
        }
        console.log('き・よ・し！');
        console.log(count + '回目で成功')
    }