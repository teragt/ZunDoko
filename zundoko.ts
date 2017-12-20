    ZunDoko();

    function ZunDoko() {
        let zun_Counter = 0, zun = 0, cnt = 0 , doko = 0;
        let kiyoshi_Flag = false;

        while( zun_Counter <= 4 && !kiyoshi_Flag ) {
            let zundoko = Math.floor( Math.random() * 2 ) >= 1 ? true : false;
            cnt++;
           
            if(zundoko) {
                console.log('ズン');
                zun++;
                zun_Counter < 4 ? zun_Counter++ : false;
            } else {
                console.log('ドコ');
                doko++;
                zun_Counter < 4 ? zun_Counter=0 : kiyoshi_Flag=true;
            }
        }
        console.log('き・よ・し！');
        console.log(`${cnt}回目で成功\nズン:${zun}回\nドコ:${doko}回`)
    }