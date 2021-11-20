const blocksData = [
    {
        id:0,
        name: "スターティングブロック",
        hasSlider: false,
    },
    {
        id:1,
        name: "木製ブロック",
        hasSlider: false,
    },
    {
        id:2,
        name: "ホイール",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-speed":{max: 2, min: 0},
                "bmt-acceleration":{max: Infinity, min: 0.1},
            }
        }
    },
    {
        id:3,
        name: "鉄製ブレード",
        hasSlider: false,
    },
    {
        id:4,
        name: "デカップラー",
        hasSlider: false,
    },
    {
        id:5,
        name: "ヒンジ",
        hasSlider: false,
    },
    {
        id:6,
        name: "スパイクボール",
        hasSlider: false,
    },
    {
        id:7,
        name: "ブレース",
        hasSlider: false,
    },
    {
        id:8,
        name: "未使用ID",
        hasSlider: false,
    },
    {
        id:9,
        name: "スプリング",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-slider":{max: 10, min:0.3},
            }
        }
    },
    {
        id:10,
        name: "ウッドパネル",
        hasSlider: false,
    },
    {
        id:11,
        name: "キャノン",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-strength":{max: 2, min: 0.1},
            },
            copy:{
                "bmt-strength":{max: 4, min: 0.1},
            }
        }
    },
    {
        id:12,
        name: "スケーリングブロック",
        hasSlider: false,
    },
    {
        id:13,
        name: "ステアリングブロック",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-rotation-speed":{max: 2, min:0}
            }
        }
    },
    {
        id:14,
        name: "フライングブロック",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-speed":{max: 1.25, min: 0},
            },
            copy:{
                "bmt-speed":{max: 2, min: 0},
            },
        }
    },
    {
        id:15,
        name: "小型木製ブロック",
        hasSlider: false,
    },
    {
        id:16,
        name: "サスペンション",
        hasSlider: true,
        slider: {
            vanilla:{
                "bmt-spring":{max: 3, min: 0.5},
            }
        }
    },
    {
        id:17,
        name: "サーキュラーソー",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-speed":{max: 2, min: 0},
                "bmt-acceleration":{max: Infinity, min: 0.1},
            }
        }
    },
    {
        id:18,
        name: "ピストン",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-speed":{max: 2, min: 0.1},
            }
        }
    },
    {
        id:19,
        name: "スイベル",
        hasSlider: false,
    },
    {
        id:20,
        name: "スパイク",
        hasSlider: false,
    },
    {
        id:21,
        name: "フレイムスローワー",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-range":{max: 1.25, min: 0.2}
            }
        }
    },
    {
        id:22,
        name: "スピニングブロック",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-speed":{max: 2, min: 0},
                "bmt-acceleration":{max: Infinity, min: 0.1},
            }
        }
    },
    {
        id:23,
        name: "ボム",
        hasSlider: false,
    },
    {
        id:24,
        name: "小型鉄製プレート",
        hasSlider: false,
    },
    {
        id:25,
        name: "ウィング",
        hasSlider: false,
    },
    {
        id:26,
        name: "プロペラ",
        hasSlider: false,
    },
    {
        id:27,
        name: "グラバー",
        hasSlider: false,
    },
    {
        id:28,
        name: "ステアリングヒンジ",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-rotation-speed":{max: 2, min: 0},
            }
        }
    },
    {
        id:29,
        name: "丸型鉄製プレート",
        hasSlider: false,
    },
    {
        id:30,
        name: "ホルダー",
        hasSlider: false,
    },
    {
        id:31,
        name: "ファイアーボール",
        hasSlider: false,
    },
    {
        id:32,
        name: "大型鉄製プレート",
        hasSlider: false,
    },
    {
        id:33,
        name: "プラウ",
        hasSlider: false,
    },
    {
        id:34,
        name: "ウィングパネル",
        hasSlider: false,
    },
    {
        id:35,
        name: "バラスト",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-mass":{max: 2, min: 0.2}
            }
        }
    },
    {
        id:36,
        name: "丸岩",
        hasSlider: false,
    },
    {
        id:37,
        name: "ハーフパイプ",
        hasSlider: false,
    },
    {
        id:38,
        name: "中型無動力歯車",
        hasSlider: false,
    },
    {
        id:39,
        name: "中型動力歯車",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-speed":{max: 2, min: 0},
                "bmt-acceleration":{max: Infinity, min: 0.1},
            }
        }
    },
    {
        id:40,
        name: "無動力ホイール",
        hasSlider: false,
    },
    {
        id:41,
        name: "木製ポール",
        hasSlider: false,
    },
    {
        id:42,
        name: "スライダー",
        hasSlider: false,
    },
    {
        id:43,
        name: "バルーン",
        hasSlider: false,
    },
    {
        id:44,
        name: "ボールジョイント",
        hasSlider: false,
    },
    {
        id:45,
        name: "ロープウィンチ",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-slider":{max: 2, min: 0.3}
            },
            copy:{
                "bmt-slider":{max: 10, min: 0.3}
            }
        }
    },
    {
        id:46,
        name: "大型ホイール",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-speed":{max: 2, min: 0},
                "bmt-acceleration":{max: Infinity, min: 0.1},
            }
        }
    },
    {
        id:47,
        name: "トーチ",
        hasSlider: false,
    },
    {
        id:48,
        name: "ドリル",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-speed":{max: 2, min: 0},
                "bmt-acceleration":{max: Infinity, min: 0.1},
            }
        }
    },
    {
        id:49,
        name: "グリップパッド",
        hasSlider: false,
    },
    {
        id:50,
        name: "小型ホイール",
        hasSlider: false,
    },
    {
        id:51,
        name: "無動力大型歯車",
        hasSlider: false,
    },
    {
        id:52,
        name: "52プロペラ",
        hasSlider: false,
    },
    {
        id:53,
        name: "榴散弾キャノン",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-strength":{max: 4, min: 0.1}
            }
        }
    },
    {
        id:54,
        name: "グレネード",
        hasSlider: false,
    },
    {
        id:55,
        name: "小型プロペラ",
        hasSlider: false,
    },
    {
        id:56,
        name: "ウォーターキャノン",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-strength":{max: 1.5, min: 0.1}
            },
            copy:{
                "bmt-strength":{max: 4, min: 0.1}
            },
        }
    },
    {
        id:57,
        name: "ピン",
        hasSlider: false,
    },
    {
        id:58,
        name: "カメラブロック",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-distance":{max: 80, min:1},
                "bmt-height":{max: 90, min: -90},
                "bmt-rotation":{max: 180, min: -180},
                "bmt-pitch":{max: 180, min: -180},
                "bmt-roll":{max: 180, min: -180},
                "bmt-yaw":{max: 180, min: -180},
                "bmt-smooth":{max: 1, min: 0},
                "bmt-fov":{max: 70, min: 30},
                "bmt-predict":{max:10, min: 0}
            },
            copy:{
                "bmt-distance":{max: 80, min:1},
                "bmt-height":{max: 250, min: -90},
                "bmt-rotation":{max: 180, min: -180},
                "bmt-pitch":{max: 180, min: -180},
                "bmt-roll":{max: 180, min: -180},
                "bmt-yaw":{max: 180, min: -180},
                "bmt-smooth":{max: 1, min: 0},
                "bmt-fov":{max: 70, min: 30},
                "bmt-predict":{max:10, min: 0}
            }
        }
    },
    {
        id:59,
        name: "ロケット",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-duration":{max: 10, min:0.5},
                "bmt-strength":{max: 1.5, min:0.5},
                "bmt-charge":{max: 1.5, min:0}
            },
            copy:{
                "bmt-duration":{max: 10, min:0.5},
                "bmt-strength":{max: 4, min:0.5},
                "bmt-charge":{max: 1.5, min:0}
            }
        }
    },
    {
        id:60,
        name: "無動力大型ホイール",
        hasSlider: false,
    },
    {
        id:61,
        name: "クロスボウ",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-rate-of-fire":{max: 4, min: 0.25},
                "bmt-power":{max: 2, min: 0.25}
            }
        }
    },
    {
        id:62,
        name: "バキューム",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-power":{max: 2, min: 0.25}
            }
        }
    },
    {
        id:63,
        name: "ログブロック",
        hasSlider: false,
    },
    {
        id:64,
        name: "マグネット",
        hasSlider: false,
    },
    {
        id:65,
        name: "センサー",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-distance":{max: 50, min: 0.5},
                "bmt-radius":{max: 2, min: 0.25}
            },
            copy:{
                "bmt-distance":{max: 80, min: 0.5},
                "bmt-radius":{max: 2, min: 0.25}
            }
        }
    },
    {
        id:66,
        name: "タイマー",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-wait":{max: 60, min: 0},
                "bmt-emulation-time": {max: 60, min:0}
            }
        }
    },
    {
        id:67,
        name: "高度計",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-height":{max: 250, min: 0.5},
            }
        }
    },
    {
        id:68,
        name: "ロジックゲート",
        hasSlider: false,
    },
    {
        id:69,
        name: "角度系",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-start-a":{max: 180, min: -180},
                "bmt-end-a":{max: 180, min: -180},
            }
        }
    },
    {
        id:70,
        name: "速度計",
        hasSlider: true,
        slider:{
            vanilla:{
                "bmt-speed-threshold":{max: 250, min: 0.5},
            }
        }
    },
    {
        id:71,
        name: "サーフェスの頂点",
        hasSlider: false,
    },
    {
        id:72,
        name: "サーフェスの角",
        hasSlider: false,
    },
    {
        id:73,
        name: "サーフェスの面",
        hasSlider: false,
    },
]