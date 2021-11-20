"use strict";

const init = function(){
    document.getElementById("select-directory").addEventListener("change", (e)=>{loadDirectory(e)});
}

const loadDirectory = function(e){
    for(let i = 0; i<e.target.files.length; i++){
        const file = e.target.files[i];
        const relativePath = file.webkitRelativePath;
        const fileReader = new FileReader();
        fileReader.onload =(e)=>{
            const text = e.target.result;
            //console.log(relativePath, text);
            if(checkExt(relativePath)){
                const filename = getFileName(relativePath);
                loadMachine(filename, text);
            }
        }
        fileReader.readAsText(file);
    }
}

const loadMachine = function(filename, text){
    const dom = convertText2dom(text);
    const machineName = dom.getElementsByTagName("Machine")[0].getAttribute("name");
    const result = checkMachine(dom);
    displayResult(filename, machineName, result);
}

const checkMachine = function(dom){
    const blocks = dom.getElementsByTagName("Block");
    let totalblocks = 0;
    let isTotalBlocksOverLimit = false;
    let skins = new Set();
    let isUsingBanBlock = false;
    let usingBanBlockList = new Set();
    let isUsingOverLimitBlock = false;
    let usingOverLimitBlockList = [];
    let isUsingBlockOverSliderLimit = false;
    let listOfBlocksOverSliderLimit = new Set();
    let isUsingScaling = false;
    let listOfBlocksScaling = new Set();
    let isOverSkins = false;
    let isOK = true;
    let skinCount = 0;
    const blocksCount = new Map();
    //ブロック１こずつ読み込み
    for(let i = 0; i < blocks.length; i++){
        const block = blocks[i];

        totalblocks++;//合計ブロック数

        const blockId = block.getAttribute("id");
        if(!blocksCount.has(blockId)){
            blocksCount.set(blockId, 1);
        }else{
            blocksCount.set(blockId, blocksCount.get(blockId) + 1)//ブロックIdごとにカウント
        }

        {
            let skin;
            if((skin = block.getElementsByTagName("Skin")[0]) != null){
                const skinId = skin.getAttribute("id");
                skins.add(skinId);
            }
        }
        {
            let result;
            if((result = checkIfBlockIsBan(blockId))[0]) {
                isUsingBanBlock = true;//使用禁止ブロック使っているかどうか
                if(result[1] != -1){
                    usingBanBlockList.add(result[1]);
                }
            }
        }

        if(checkIfSliderOver(blockId, block)){
            isOK = false;
            isUsingBlockOverSliderLimit = true;
            listOfBlocksOverSliderLimit.add(blockId);
        }

        if(checkScaling(block)){
            isOK = false;
            isUsingScaling = true;
            listOfBlocksScaling.add(blockId);
        }
    }

    skinCount = skins.size;
    if(skinCount == 0 || skinCount ==undefined){
        skinCount = 0;
    }
    if(isLimitNumberOfSkins){
        if(skinCount > limitNumberOfSkins){
            isOK = false;//スキン数カウントして制限超えていたらfalse
            isOverSkins = true;
        }
    }
    if(isLimitTotalBlocks){
        if(totalblocks > limitTotalBlocks){
            isOK = false;//合計ブロック数が制限超えていたらfalse
            isTotalBlocksOverLimit = true;
        }
    }
    {
        let result;
        if((result = checkIfBlockLimitIsOver(blocksCount))[0]){
            isOK = false;//制限ブロック数を超えていたらfalse
            isUsingOverLimitBlock = true;
            usingOverLimitBlockList = result[1];
        }
    }
    return [
        isOK,
        isTotalBlocksOverLimit,
        totalblocks,
        isUsingBanBlock,
        [...usingBanBlockList],
        isUsingOverLimitBlock,
        usingOverLimitBlockList,
        isUsingBlockOverSliderLimit,
        [...listOfBlocksOverSliderLimit],
        isUsingScaling,
        [...listOfBlocksScaling],
        skinCount,
        isOverSkins
    ];
}

const displayResult = function(fileName, machineName, result) {
    const table = document.getElementById("result");

    const tr = document.createElement("tr");

    const checkElem = document.createElement("td");
    checkElem.textContent = (result[0]? "○" : "×");
    checkElem.className = (result[0]? "OK" : "notOK");

    const filenameElem = document.createElement("td");
    filenameElem.textContent = fileName;

    const machineNameElem = document.createElement("td");
    machineNameElem.textContent = machineName;

    const totalElem = document.createElement("td");
    totalElem.textContent = result[2];
    totalElem.className = (!result[1]? "OK" : "notOK");

    const banBlockElem = document.createElement("td");
    banBlockElem.textContent = (!result[3]? "○" : "×");
    banBlockElem.className = (!result[3]? "OK" : "notOK");

    const overLimitBlockElem = document.createElement("td");
    overLimitBlockElem.textContent = (!result[5]? "○" : "×");
    overLimitBlockElem.className = (!result[5]? "OK" : "notOK");

    const overLimitSliderElem = document.createElement("td");
    overLimitSliderElem.textContent = (!result[7]? "○" : "×");
    overLimitSliderElem.className = (!result[7]? "OK" : "notOK");

    const usingScalingElem = document.createElement("td");
    usingScalingElem.textContent = (!result[9]? "○" : "×");
    usingScalingElem.className = (!result[9]? "OK" : "notOK");

    const skinsElem = document.createElement("td");
    skinsElem.textContent = result[11];
    skinsElem.className = (!result[12]? "OK" : "notOK");

    const bikouElem = document.createElement("td");
    if(result[3]){
        let text = "使用禁止ブロックの利用:"
        result[4].forEach((id) => {
            text += `${blocksData[id].name}, `
        })
        bikouElem.textContent += text + "　　";
    }
    if(result[5]){
        let text = "個数制限の抵触:";
        result[6].forEach((block) => {
            text += `${blocksData[block[0]].name}(${block[1]}個), `
        })
        bikouElem.textContent += text + "　　";
    }
    if(result[7]){
        let text ="コピペ・限凸の使用:";
        result[8].forEach((id)=>{
            text += `${blocksData[id].name}, `
        })
        bikouElem.textContent += text + "　　";
    }
    if(result[9]){
        let text ="スケーリングの使用:";
        result[10].forEach((id)=>{
            text += `${blocksData[id].name}, `
        })
        bikouElem.textContent += text + "　　";
    }

    tr.appendChild(checkElem);
    tr.appendChild(filenameElem);
    tr.appendChild(machineNameElem);
    tr.appendChild(totalElem);
    tr.appendChild(banBlockElem);
    tr.appendChild(overLimitBlockElem);
    tr.appendChild(overLimitSliderElem);
    tr.appendChild(usingScalingElem);
    tr.appendChild(skinsElem);
    tr.appendChild(bikouElem);

    table.appendChild(tr);
}

const checkExt = function(path){
    const ext = getExt(path).toLowerCase();
    if(ext == "bsg"){
        return true;
    }
    return false;
}

const getExt = function(path){
    const pos = path.lastIndexOf(".");
    if(pos === -1) return "";
    return path.slice(pos + 1);
}

const getFileName = function(path){
    const pos1 = path.lastIndexOf("/") + 1;
    //const pos2 = path.lastIndexOf(".");
    return path.slice(pos1);
}

const convertText2dom = function(text){
    return new DOMParser().parseFromString(text, 'application/xml');
}

const checkIfBlockIsBan = function(blockId){
    // return true 禁止ブロックがある
    let check = false;
    let block = -1;
    prohibitedBlockList.forEach((banId) =>{
        if(blockId == banId){
            check = true;
            block = banId;
        }
    })
    if(isBanNotVanillaBlocks){
        const lastId = blocksData[blocksData.length - 1].id;
        if(blockId > lastId){
            check = true;
        }
    }
    return [check, block];
}

const checkIfBlockLimitIsOver = function(blocks){
    //return true ブロック数制限を超えている
    let check = false;
    let result = [];
    let list = new Set();
    blocks.forEach((count, blockId) =>{
        count = Number(count);
        list.add(blockId);
        if(blockLimitList[blockId] != undefined){
            const limit = blockLimitList[blockId];
            // if(blockId == 0){
            //     console.log(count);
            // }
            if(limit.max < count || limit.min > count){
                check = true;
                result.push([blockId, count]);
            }
        }
    })
    for(const [id, limit] of Object.entries(blockLimitList)){
        if(limit.min == 0) continue;
        if(!list.has(id)){
            check = true;
            result.push([id, 0]);
        }
    }
    return [check, result];
}

const checkIfSliderOver = function(blockId, block){
    //return true スライダー制限を超えている
    if(sliderLimitType == "unlimit"){
        return false;//設定がunlimitだったら判定しない
    }

    const blockData = blocksData[blockId];

    if(blockData == undefined){
        console.log(`Warning: ${blockId} does not exist in the BlocksData`);
        return false;//ブロックデータリストに存在しないブロックなら判定しない
    }
    if(!blockData.hasSlider){
        return false;//ブロックがスライダー持ってなかったら判定しない
    }

    let limitData;
    if(sliderLimitType == "vanilla"){
        limitData = blockData.slider.vanilla;//バニラの制限を代入
    }else if(sliderLimitType == "copy"){
        if(blockData.slider.copy != undefined){
            limitData = blockData.slider.copy;//コピペバグの制限を代入
        }else{
            limitData = blockData.slider.vanilla;//コピペバグ制限設定がなければバニラの制限を代入
        }
    }
    if(sliderLimitList[blockId] != undefined){
        limitData = sliderLimitList[blockId];//設定ファイルにあれば制限上書き
    }

    const sliders = block.getElementsByTagName("Single");
    for(let i = 0; i < sliders.length; i++){
        const slider = sliders[i];
        if(slider.getAttribute("key") == undefined) continue;
        const limit = limitData[slider.getAttribute("key")];//limitデータ
        let value = Number(slider.textContent);

        if(!(value <= limit.max && value >= limit.min)){
            return true;//制限範囲外の値ならtrue返す
        }
        return false;
    }
}

const checkScaling = function(block){
    if(isBanScaling){
        const scale = block.getElementsByTagName("Scale")[0];
        let x = scale.getAttribute("x");
        let y = scale.getAttribute("y");
        let z = scale.getAttribute("z");
        x = Math.round(x * 1000)/1000;
        y = Math.round(x * 1000)/1000;
        z = Math.round(x * 1000)/1000;
        if(x != 1 || y != 1 || z != 1){
            return true;//スケーリングされてたらtrue
        }
    }
    return false;
}