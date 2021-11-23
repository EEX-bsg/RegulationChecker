# レギュレーションチェッカー  ver.1.1

【 ソフト名 】レギュレーションチェッカー  
【 製 作 者 】EEX-bsg  
【  種  別  】webアプリケーション   
【 開発環境 】chrome96  
【 動作環境 】chrome, firefox, MicrosoftEdge, Opera  
【バージョン】1.1  
【最終更新日】2021.11.21  
【  Dicord  】EEX#6681  
【 E - mail 】exendra314@gmail.com  

---------- ----------
## ◇ 概要 ◇
フォルダー内に存在するマシンデータをすべて読み込み、設定されたレギュレーションが守られているかチェックします

## ◇ 動作条件 ◇
InternetExplorerを除く、主要なwebブラウザ最新安定版
(chrome, firefox, MicrosoftEdge, Operaのいずれかなら基本動くと思います)

## ◇ ファイル構成 ◇
RegulationChecker.html :本体  
readme.txt             :説明書  
readme.md              :GitHub用説明書  
setting.js             :レギュレーション設定ファイル  
src  
  |_main.js            :javascriptのソースコード  
  |_blocksData.js      :Besiegeのブロックデータリスト(id,名前,各スライダーの上限下限値)  
style  
  |_main.css           :CSS  

## ◇ インストール ◇
githubのCodeをクリックして、Download ZIP  
zipファイルを解凍

## ◇ アンインストール ◇
フォルダーごとそのまま削除して下さい

## ◇ つかいかた ◇
RegulationChecker.htmlを実行して下さい。  
実行の方法はファイルをダブルクリックして、ファイルを開く方法の選択画面が出た場合、IE以外のwebブラウザーを指定して下さい。  
または、RegulationChecker.htmlをwebブラウザーにドラッグアンドドロップすることでも起動できます。  
起動したら、ファイルを選択を押して、調べたい機体の入ったフォルダーを選択すると、レギュレーションチェックがされ、リストが表示されます。  
※autosavemodを導入したことがある場合、SavedMachinesフォルダやbackupsフォルダを選択しないでください。場合によっては数万の機体データが読み込まれ、PCに高い負荷がかかります。  

### レギュレーションの変更
初期設定は第５回P1グランプリの設定になっています。
しかし、setting.jsを変更することで別レギュレーションに対応させることも可能です。
設定はjavascriptで書かれているため、文法には注意して下さい。(基本はそのまま真似れば大丈夫だと思います)

### ◇ GitHub ◇
https://github.com/EEX-bsg/RegulationChecker.git

### ◇ 免責 ◇
Copyright (c) 2021 EEX-bsg  
Released under the MIT license  
https://opensource.org/licenses/mit-license.php


----------
#### ◇ 連絡先 ◇
【  Dicord  】EEX#6681  
【 E - mail 】exendra314@gmail.com