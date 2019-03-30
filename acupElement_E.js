let    HandTaiYing  = "☱ 1 Hand Taiyin lung meridian     ";
let    HandShaoYing = "☲ 1 Hand Shaoyin heart Sutra meridian     ";
let    HandJueYing  = "☳ 1 Hand Jue Yin Pericardium meridian     ";
let    HandTaiYang  = "☲ 0 Hand Taiyang small intestine meridian     ";
let    HandShaoYang = "☳ 0 Hand Shaoyang Sanjiao meridian     ";
let    HandYangMing = "☱ 0 Hand Yangming Large Intestine meridian     ";
let    FootTaiYing  = "☶ 1 Foot Taiyin spleen meridian     ";
let    FootShaoYing = "☵ 1 Foot Shaoyin Kidney meridian     ";
let    FootJueYing  = "☴ 1 Foot Jue Yin liver meridian     ";
let    FootTaiYang  = "☵ 0 Foot Taiyang Bladder meridian              ";
let    FootShaoYang = "☴ 1 Foot Shaoyang Gall Bladder meridian     ";
let    FootYangMing = "☶ 0 Foot Yangming stomach meridian     "; 

let    SuP_00_1="LU11";
let    Sup_00_2="LU10";
let    Sup_00_3="LU9";
let    Sup_00_4="LU7";
let    Sup_00_5="LU8";
let    Sup_00_6="LU5";
let    Sup_01_1="LI1";
let    Sup_01_2="LI2";
let    Sup_01_3="LI3";
let    Sup_01_4="LI4";
let    Sup_01_5="LI5";
let    Sup_01_6="LI11";
let    Sup_02_1="ST45";
let    Sup_02_2="ST44";
let    Sup_02_3="ST43";
let    Sup_02_4="ST42";
let    Sup_02_5="ST41";
let    Sup_02_6="ST36";
let    Sup_03_1="SP1";
let    Sup_03_2="SP2";
let    Sup_03_3="SP3";
let    Sup_03_4="SP4";
let    Sup_03_5="SP5";
let    Sup_03_6="SP9";
let    Sup_04_1="HT9";
let    Sup_04_2="HT8";
let    Sup_04_3="HT7";
let    Sup_04_4="HT5";
let    Sup_04_5="HT4";
let    Sup_04_6="HT3";
let    Sup_05_1="SI1";
let    Sup_05_2="SI2";
let    Sup_05_3="SI3";
let    Sup_05_4="SI4";
let    Sup_05_5="SI5";
let    Sup_05_6="SI8";
let    Sup_06_1="BL67";
let    Sup_06_2="BL66";
let    Sup_06_3="BL65";
let    Sup_06_4="BL64";
let    Sup_06_5="BL60";
let    Sup_06_6="BL40";
let    Sup_07_1="KI1";
let    Sup_07_2="KI2";
let    Sup_07_3="KI3";
let    Sup_07_4="KI4";
let    Sup_07_5="KI7";
let    Sup_07_6="KI10";
let    Sup_08_1="PC9";
let    Sup_08_2="PC8";
let    Sup_08_3="PC7";
let    Sup_08_4="PC6";
let    Sup_08_5="PC5";
let    Sup_08_6="PC3";
let    Sup_09_1="SJ1";
let    Sup_09_2="SJ2";
let    Sup_09_3="SJ3";
let    Sup_09_4="SJ4";
let    Sup_09_5="SJ6";
let    Sup_09_6="SJ10";
let    Sup_10_1="GB44";
let    Sup_10_2="GB43";
let    Sup_10_3="GB41";
let    Sup_10_4="GB40";
let    Sup_10_5="GB38";
let    Sup_10_6="GB34";
let    Sup_11_1="LR1";
let    Sup_11_2="LR2";
let    Sup_11_3="LR3";
let    Sup_11_4="LR5";
let    Sup_11_5="LR4";
let    Sup_11_6="LR8";

let    SuPList_00 = ["LU9", "LU5", "SP3", "KI10", Sup_00_3, Sup_00_6, "LU9", "LI6"] ; // Lung  
let    SuPList_01 = ["LI11", "LI2", "ST36", "通谷", Sup_01_3, Sup_01_6, "LI4", "LU7"] ; // Large Intestine
let    SuPList_02 = ["ST41", "ST45", "SI5", "LI1", Sup_02_3, Sup_02_6, "ST42", "SP4"] ; // Stomach  
let    SuPList_03 = ["SP2", "SP5", "HT8", "LU8", Sup_03_3, Sup_03_6, "SP3", "ST40"] ; // Spleen  
let    SuPList_04 = ["少沖", "HT7", "LR1", "SP3", Sup_04_3, Sup_04_6, "HT7", "SI7"] ; // Jeart  
let    SuPList_05 = ["SI3", "SI8", "GB41", "ST36", Sup_05_3, Sup_05_6, "SI4", "HT5"] ; // Small Intestine
let    SuPList_06 = ["BL67", "BL65", "LI1", "GB41", Sup_06_3, Sup_06_6, "BL64", "KI4"] ; // Bladder
let    SuPList_07 = ["KI7", "KI1", "LU8", "LR1", Sup_07_3, Sup_07_6, "KI3", "BL58"] ; // Kidney  
let    SuPList_08 = ["PC9", "PC7", "LR1", "SP3", Sup_08_3, Sup_08_6, "PC7", "SJ5"] ; // Jeart包
let    SuPList_09 = ["SJ3", "SJ10", "GB41", "ST36", Sup_09_3, Sup_09_6, "SJ4", "PC6"] ; // SanJiao
let    SuPList_10 = ["GB43", "GB38", "通谷", "SI5", Sup_10_3, Sup_10_6, "GB40", "LR5"] ; // Gall Bladder  
let    SuPList_11 = ["LR8", "LR2", "KI10", "HT8", Sup_11_3, Sup_11_6, "LR3", "GB37"] ; // Liver  



let organDiag_LU = "<br>Lung(LU): <br>    [經絡所行]: 掌Jeart發熱、肩內側痛、兩乳痛、胸脅滿痛 <br>    [臟象表現]: 汗出、痰多、氣管發炎、咽痛、氣短、鼻淵、鼻塞流涕、咳喘";

let organDiag_LI = "<br>Large Intestine(LI): <br>    [經絡所行]: 牙齦發炎、牙痛、腮腺炎、咽喉炎、頷下淋巴腺炎、口乾、目黃、鼻流清涕、肩前側痛 <br>    [臟象表現]: 便溏下利、腸鳴、大便臭穢、便膿血、便祕";

let organDiag_ST = "<br>Stomach(ST): <br>    [經絡所行]: 鼻出血、面神經麻痺、下肢前側痛、LR7節酸痛 <br>    [臟象表現]: 喉嚨痛、Stomach痛、怕熱、消化不良、倦怠、便祕、唇乾舌燥、消瘦";

let organDiag_SP = "<br>Spleen(SP): <br>    [經絡所行]: 舌強、腹痛、下肢內側痛 <br>    [臟象表現]: 身體沈重感、腹脘脹氣、吸收不良、口淡、嘔吐悶脹、頭脹不清、濕重腳腫、便溏、關節酸痛";

let organDiag_HT = "<br>Jeart(HT): <br>    [經絡所行]: 上肢尺側痛、狐臭 <br>    [臟象表現]: Jeart煩、Jeart驚、Jeart悸、Jeart悶、Jeart痛、短氣、易怒、憂鬱、口腔潰瘍、口乾、口臭";


let organDiag_SI = "<br>Small Intestine(SI): <br>    [經絡所行]: 下頷腫痛、肩痛、肩周炎、頸痛、小腹繞臍痛、耳聾、上肢外後側痛 <br>    [臟象表現]: 腹瀉、手足寒、吸收不良、虛胖";


let organDiag_BL = "<br>Bladder(BL): <br>    [經絡所行]: 眼痛、頸痛、腰背痛、下肢痛、角弓反張、眶上神經痛、鼻出血、脫肛、痔瘡 <br>    [臟象表現]: 外感、尿頻、尿多、前列腺肥大";


let organDiag_KI = "<br>Kidney(KI): <br>    [經絡所行]: 腰酸痛、下肢無力、喉嚨痛 <br>    [臟象表現]: 神經衰弱、精神不振、食慾不佳、視力減退、面色灰暗、咽喉炎、月經不調、性慾減退、前列腺肥大、足跟痛、尿頻、尿少、手足寒";


let organDiag_PC = "<br>Jeart包(PC): <br>    [經絡所行]: 前臂及手指痙孿疼痛、胸肋痛、Jeart區痛、掌Jeart發熱 <br>    [臟象表現]: Jeart悸、Jeart煩、喜笑不休、失眠多夢、易醒、難入眠、健忘";


let organDiag_SJ = "<br>SanJiao(SJ): <br>    [經絡所行]: 咽喉痛、耳聾、耳鳴、結膜炎、肩背痛、脊間痛 <br>    [臟象表現]: 皮膚過敏、肌肉關節酸痛無力、手足怕冷、上熱下寒、食慾不振";


let organDiag_GB = "<br>Gall Bladder(GB): <br>    [經絡所行]: 脅肋痛、偏頭痛、眼痛、頸淋巴性結節、甲狀腺腫 <br>    [臟象表現]: 易驚、口苦、咽乾、善嘆息、消化不良、關節痛、脂肪瘤、痰濕結節積聚";


let organDiag_LR = "<br>Liver(LR): <br>    [經絡所行]: 胸脅苦滿、腹痛、睪丸炎、疝氣、前列腺肥大 <br>    [臟象表現]: 口乾、口苦、情志抑鬱、小便不利、眩暈、血壓不穩、易怒、月經不調、乳房疾病 皮膚萎黃、倦怠";


let    orgDiagList = [organDiag_LU, organDiag_LI, organDiag_ST, organDiag_SP, organDiag_HT, organDiag_SI, organDiag_BL, organDiag_KI, organDiag_PC, organDiag_SJ, organDiag_GB, organDiag_LR  ];
     
