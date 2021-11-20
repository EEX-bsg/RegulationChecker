"use strict";

/**
 *ブロックIDは以下のスプレッドシートで確認してください
 *https://docs.google.com/spreadsheets/d/14_QISDZe4cLrCiJPu0582J_SwphtTWOFvWS6ToUAStI
 */


//禁止ブロックリスト
//ブロックIDで指定する
const prohibitedBlockList = [
    8,//未使用のブロック
    11,//キャノン
    12,//スケーリングブロック(隠しブロック)
    21,//フレイムスローワー
    52,//52プロペラ(没データ)
    61,//クロスボウ
    62,//バキューム
    64,//マグネット(没データ)
    73,//面の生成(サーフェス)
]


//ブロック数制限リスト
//指定したブロックの使用個数 上限下限(max,min)を決める
//ブロックIDで指定する
const blockLimitList = {
      0:{max:   1, min:  1},//スターティングブロック
     14:{max:  20, min:  0},//フライングブロック
     23:{max: 200, min:  4},//ボム
     53:{max:  20, min:  0},//榴散弾キャノン
     56:{max:  20, min:  0},//ウォーターキャノン
     59:{max:  10, min:  0},//ロケット
}


//スライダーの制限タイプ
//ダブルクオーテーションを忘れないように
//
//vanilla: バニラのスライダーで動かせる範囲が制限になります
//   copy: コピペテクを使ったときの上限値が制限になります
//unlimit: 制限がありません 限凸modと同じ制限
//
//第5回P1GPレギュに合わせる場合、vanillaにしてください。
const sliderLimitType = "vanilla";


//スライダーの制限リスト
//指定したブロックのスライダーの上限下限値(max, min)を決める
//ブロックIDで指定する
//sliderLimitTypeよりも優先される
//第5回P1GPで言えば、ロケットのようなコピペが許可されてるブロックの設定を書いて下さい
const sliderLimitList = {
    59:{//ロケット
        "bmt-duration": {max: 10, min: 0.5},//飛行時間
        "bmt-strength": {max: 4 , min: 0.5},//推力
        "bmt-charge"  : {max: 1.5,min: 0.0},//爆発の威力
    },
}

//スキンの使用数を制限するかどうか
const isLimitNumberOfSkins = true;
//許可するスキン数
const limitNumberOfSkins = 2;

//合計ブロック数を制限するかどうか
const isLimitTotalBlocks = true;
//許可するブロック数(コアブロックを含みます)
const limitTotalBlocks = 200;

//スケーリングを禁止するか
const isBanScaling = true;

//バニラに存在しないブロックを禁止するか
const isBanNotVanillaBlocks = true;