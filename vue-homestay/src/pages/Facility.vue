<template>
     <div class="container">
        <div class="facility">
            <div class="moji">
                <img src="../assets/sheshiannei.png">
            </div>
            <div class="moji">
                <h1>施設案内</h1>
                <h3>仕事専用スペース</h3>
                <p>Wi-Fiを備えた仕事に最適な共用スペース</p>
                <h3>セルフチェックイン</h3>
                <p>キーボックスの鍵で入室できます。</p>
                <h3>48時間以内ならキャンセル無料</h3>
                <p>カナガワ県藤沢市に位置し、小田急線の藤沢本町駅から徒歩10分以内です。7 -11、マクドナルド、バーベキューなどの設備が近くにあります。
        この家は2階建ての独立した小さな建物で、1階に2つの寝室（と部屋）にトイレと簡易キッチン（約32平方メートル）があります。2階は大きなオープンプランのリビングルームとバスルーム（約32平方メートル）です。建物全体にバスルーム1つとトイレが1つあります。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Room'
}
</script>

<style>
    div{
        display: block;
    }
    .moji img{
        width: 570px;
        height: auto;
    }
    .moji{
        width: 48%;
        /* background-color: lightgreen; */
        display: inline-block;
        /* position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%); */
        /* display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 200px; */
        
    }
</style>