import axios from "axios";

const userAxios = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

const apiUrl = "http://127.0.0.1:8000/api";

//登入ok
export function login(contents) {
    const api = `${apiUrl}/login`;
    const content = {
        // staffName: contents.staffName,
        staffNum: contents.staffNum,
        staffPassword: contents.staffPassword,
        token: contents.token
    };
    return userAxios.post(api, content).then((res) => {
        return res;
    });
}


//登出ok
export function logout(contents) {
    const api = `${apiUrl}/logoutStaff`;
    const content = {
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//-----------------------------------------------------todolist-----------------------------------------------------

//今日代辦事項ok
export function todayList(contents) {
    const api = `${apiUrl}/todo/todayList`;
    const content = {
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//代辦事項ok
export function allList(contents) {
    const api = `${apiUrl}/todo/allList`;
    const content = {
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//新增代辦事項ok
export function insertList(contents) {
    const api = `${apiUrl}/todo/insertList`;
    const content = {
        // id: contents.id,
        // staffNum: contents.staffNum,
        insertTime: contents.todoTime,
        insertTodo: contents.work,
        // state: contents.state,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}


//修改代辦事項ok
export function updateList(contents) {
    const api = `${apiUrl}/todo/updateList`;
    const content = {
        id: contents.id,
        insertTime: contents.todoTime,
        insertTodo: contents.work,
        state: contents.state,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//完成代辦事項ok
export function finishList(contents) {
    const api = `${apiUrl}/todo/finishList`;
    const content = {
        id: contents.id,
        state: contents.state,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//刪除代辦事項ok
export function deleteList(contents) {
    const api = `${apiUrl}/todo/deleteList`;
    const content = {
        id: contents.id,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//搜尋代辦事項ok
export function searchList(contents) {
    const api = `${apiUrl}/todo/searchList`;
    const content = {
        date: contents.date,
        work: contents.work,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}


//未完成代辦事項ok
export function getDoingList(contents) {
    const api = `${apiUrl}/todo/getDoingList`;
    const content = {
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}


//已完成代辦事項ok
export function getDoneList(contents) {
    const api = `${apiUrl}/todo/getDoneList`;
    const content = {
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//-----------------------------------------------------todolist------------------------------------------------------
//-----------------------------------------------------病患相關-------------------------------------------------------



// 所有病患(index)ok
export function patient(contents) {
    const api = `${apiUrl}/patient`;
    const content = {
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}


// 病患個資ok
export function patientInfo(contents) {
    const api = `${apiUrl}/patient/info`;
    const content = {
        pNum: contents.pNum,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

// Admin修改病患個資ok
export function updatePatients(contents) {
    const api = `${apiUrl}/admin/updatePatient`;
    const content = {
        pName: contents.pName,
        pAge: contents.pAge,
        birthday: contents.birthday,
        pSex: contents.pSex,
        room: contents.room,
        pNum: contents.pNum,
        staffNum: contents.staffNum,
        phone: contents.phone,
        email: contents.email,
        address: contents.address,
        pProfession: contents.pProfession,
        pEdu: contents.pEdu,
        pFamilySize: contents.pFamilySize,
        pMarriage: contents.pMarriage,
        pChild: contents.pChild,
        pDisease: contents.pDisease,
        pReligion: contents.pReligion,
        pDrugs: contents.pDrugs,
        pSport: contents.pSport,
        pAllergy: contents.pAllergy,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

// 修改病患個資ok
export function updatePatient(contents) {
    const api = `${apiUrl}/patient/update`;
    const content = {
        pName: contents.pName,
        pAge: contents.pAge,
        birthday: contents.birthday,
        pSex: contents.pSex,
        room: contents.room,
        pNum: contents.pNum,
        staffNum: contents.staffNum,
        phone: contents.phone,
        email: contents.email,
        address: contents.address,
        pProfession: contents.pProfession,
        pEdu: contents.pEdu,
        pFamilySize: contents.pFamilySize,
        pMarriage: contents.pMarriage,
        pChild: contents.pChild,
        pDisease: contents.pDisease,
        pReligion: contents.pReligion,
        pDrugs: contents.pDrugs,
        pSport: contents.pSport,
        pAllergy: contents.pAllergy,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//新增病患ok
export function insertPatient(contents) {
    const api = `${apiUrl}/patient/create`;
    const content = {
        pID: contents.pID,
        pName: contents.pName,
        pAge: contents.pAge,
        birthday: contents.birthday,
        pSex: contents.pSex,
        room: contents.room,
        staffNum: contents.staffNum,
        phone: contents.phone,
        email: contents.email,
        address: contents.address,
        pProfession: contents.pProfession,
        pEdu: contents.pEdu,
        pFamilySize: contents.pFamilySize,
        pMarriage: contents.pMarriage,
        pChild: contents.pChild,
        pDisease: contents.pDisease,
        pReligion: contents.pReligion,
        pDrugs: contents.pDrugs,
        pSport: contents.pSport,
        pAllergy: contents.pAllergy,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}



//搜尋病患ok
export function searchPatient(contents) {
    const api = `${apiUrl}/patient/search`;
    const content = {
        pName: contents.pName,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//新增生化資料ok
export function insertBiochemical(contents) {
    const api = `${apiUrl}/biochemical/create`;
    const content = {
        pNum: contents.pNum,
        pDate: contents.pDate,
        pTAG: contents.pTAG,
        pHDL: contents.pHDL,
        pVAT: contents.pVAT,
        pAC: contents.pAC,
        p5HTTLPR: contents.p5HTTLPR,
        pVitaminD: contents.pVitaminD,
        drSay: contents.drSay,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//修改生化資料
// export function updateBiochemical(contents) {
//     const api = `${apiUrl}/biochemical/update`;
//     const content = {
//         pNum: contents.pNum,
//         pDate: contents.pDate,
//         // pTAG: contents.pTAG,
//         // pHDL: contents.pHDL,
//         // pVAT: contents.pVAT,
//         // pAC: contents.pAC,
//         // p5HTTLPR: contents.p5HTTLPR,
//         // pVitaminD: contents.pVitaminD,
//         drSay: contents.drSay,
//         token: contents.token
//     };
//     return userAxios.post(api, content, {
//         headers: {
//             Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
//         }
//     }).then((res) => {
//         return res;
//     });
// }

//生化資料（最新辣個）ok
export function biochemical(contents) {
    const api = `${apiUrl}/biochemical`;
    const content = {
        pNum: contents.pNum,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

// 歷史就診資料（顯示生化資料）ok
export function allBiochemical(contents) {
    const api = `${apiUrl}/biochemical/show`;
    const content = {
        pNum: contents.pNum,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

// 病患的癌症資料ok
export function mainInfo(contents) {
    const api = `${apiUrl}/mainInfo`;
    const content = {
        pNum: contents.pNum,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

// 新增病患癌症資料ok
export function insertMainInfo(contents) {
    const api = `${apiUrl}/mainInfo/create`;
    const content = {
        pNum: contents.pNum,
        date: contents.date,
        pCancerTime: contents.pCancerTime,
        case: contents.case,
        lymphaticMtastasis: contents.lymphaticMtastasis,
        drug: contents.drug,
        period: contents.period,
        transferLocation: contents.transferLocation,
        DrugAllergy: contents.DrugAllergy,
        tumorSize: contents.tumorSize,
        plan: contents.plan,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}


// 歷史病症資料（顯示癌症資料）ok
export function allMainInfo(contents) {
    const api = `${apiUrl}/mainInfo/show`;
    const content = {
        pNum: contents.pNum,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//-----------------------------------------------------病患相關-------------------------------------------------------



//憂鬱症專區ok
export function insertDetection(contents) {
    const api = `${apiUrl}/detection/insertDetection`;
    const content = {
        pID: contents.pID,
        score: contents.score,
        pDate: contents.pDate,
        token: contents.token,
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}


//最新憂鬱分數
export function detection(contents) {
    const api = `${apiUrl}/detection/getDetection`;
    const content = {
        pID: contents.pID,
        // score: contents.score,
        // pDate: contents.pDate,
        token: contents.token,
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}
//最新憂鬱分數
export function detections(contents) {
    const api = `${apiUrl}/detection/detectionHistory`;
    const content = {
        pID: contents.pID,
        // score: contents.score,
        // pDate: contents.pDate,
        token: contents.token,
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//醫護設定 個人資料ok
export function staffInform(contents) {
    const api = `${apiUrl}/staff`;
    const content = {
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//醫護更改密碼ok
export function updatePasswd(contents) {
    const api = `${apiUrl}/updatePasswd`;
    const content = {
        // id: contents.id,
        oldPasswd: contents.oldPasswd,
        newPasswd: contents.newPasswd,
        checkPasswd: contents.checkPasswd,
        token: contents.token
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token,  // Bearer 跟 token 中間有一個空格

        }
    }).then((res) => {
        console.log("res是我", res.data);
        return res;
    });
}


