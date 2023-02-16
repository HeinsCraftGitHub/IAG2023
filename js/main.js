// 紙芝居スクロール

// $(window).on('load resize', function() {
//     var windowWidth = window.innerWidth;
//     var elements = $('.fixed');
//     if (windowWidth >= 768) {
//     Stickyfill.add(elements);
//     }else{
//     Stickyfill.remove(elements);
//     }
// });
let area = 'firstview';

let firstview_height = 0;
let area1_height = 0;
let area2_height = 0;
let area3_height = 0;
let area4_height = 0;
let margin = 50;

function getContentsHeight() {
    firstview_height = $("#firstview").outerHeight(true);
    area1_height = firstview_height + $('#area-1').outerHeight(true);
    area2_height = area1_height + $('#area-2').outerHeight(true);
    area3_height = area2_height + $('#area-3').outerHeight(true);
    area4_height = area3_height + $('#area-4').outerHeight(true);
}
function ChangeSticky(){

    const scrollTop = $(window).scrollTop();
    
    

    function AddSticky(){

        $("section").addClass("fixed");
        console.log(area);
    }

    function RemoveSticky(){
        $("section").removeClass("fixed");
        console.log(area);
    }

    if (scrollTop < $("#firstview").offset().top){
        AddSticky();
    }
    else if(scrollTop < area1_height){
        AddSticky();
        area = 'area-1';
    }
    else if(scrollTop < area2_height){
        // RemoveSticky();
        if($('#area-2').outerHeight(true) > window.innerHeight) {
            let top_value = $('#area-2').outerHeight(true) - window.innerHeight + margin;
            $('.fixed').css('top',`-${top_value}px`);
        }
        area = 'area-2'
    }
    else if(scrollTop < area3_height){
        // AddSticky();
        if($('#area-3').outerHeight(true) > window.innerHeight) {
            let top_value = $('#area-3').outerHeight(true) - window.innerHeight + margin;
            $('.fixed').css('top',`-${top_value}px`);
        }
        area = 'area-3';
    }
    else if(scrollTop < area4_height){
        // AddSticky();
        if($('#area-4').outerHeight(true) > window.innerHeight) {
            let top_value = $('#area-4').outerHeight(true) - window.innerHeight + margin;
            $('.fixed').css('top',`-${top_value}px`);
        }
    }
    else if(scrollTop < $("#area-5").offset().top){
        RemoveSticky();
    }
    else{
        RemoveSticky();
    }
}


$(function(){
    getContentsHeight();
    $(window).scroll(ChangeSticky);
  ChangeSticky();
  console.log('あ');
});

// ページ内スクロール
// $('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
// 	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
// 	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
// 	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
// 	return false;
// });



// SPグローバルナビゲーション
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#sp-g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#sp-g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#sp-g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});







// ページトップリンク↓
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});






// カルーセル
$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
});