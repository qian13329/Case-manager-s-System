import axios from "axios";

const userAxios = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

const apiUrl = "http://127.0.0.1:8000/api";

//登入
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

//註冊
export function register(contents) {
    const api = `${apiUrl}/register`;
    const content = {
        staffName: contents.staffName,
        // staffNum: contents.staffNum,
        staffSex: contents.staffSex,
        staffPhone: contents.staffPhone,
        // staffPassword: contents.staffPassword,
        staffID: contents.staffID,
        staffBirthday: contents.staffBirthday,
        staffAddress: contents.staffAddress,
        staffEmail: contents.staffEmail,
        identify: contents.identify
    };
    return userAxios.post(api, content).then((res) => {
        return res;
    });
}


// 所有人員個資
export function staff(contents) {
    const api = `${apiUrl}/admin/all`;
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

// 人員資訊
export function staffList(contents) {
    const api = `${apiUrl}/staff`;
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

//搜尋staff
export function searchStaff(contents) {
    const api = `${apiUrl}/admin/searchStaff`;
    const content = {
        token: contents.token,
        staffName: contents.staffName,
        // staffNum: contents.staffNum,
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

// 所有病患(index)
export function patients(contents) {
    const api = `${apiUrl}/admin/allPatient`;
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

// 個管所有病患(index) 基本資料
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


// 所有醫護負責的所有病患
export function carePatient(contents) {
    const api = `${apiUrl}/admin/carePatient`;
    const content = {
        token: contents.token,
        staffNum: contents.staffNum
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//新增病患
export function insertPatient(contents) {
    const api = `${apiUrl}/patient/adCreate`;
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

// 病患資訊
export function patientInform(contents) {
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

// 搜尋病患
export function searchPatient(contents) {
    const api = `${apiUrl}/patient/search`;
    const content = {
        token: contents.token,
        pName: contents.pName,
        pNum: contents.pNum,
        room: contents.room,
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

// 搜尋所有病患
export function searchAllPatient(contents) {
    const api = `${apiUrl}/admin/searchPatient`;
    const content = {
        token: contents.token,
        pName: contents.pName,
        pNum: contents.pNum,
        room: contents.room,
    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}

//總之歷史紀錄大總匯 (沒只有癌症資料且不想寫生化資料)
export function allMainInfo(contents) {
    const api = `${apiUrl}/mainInfo/show`;
    const content = {
        token: contents.token,
        pNum: contents.pNum,

    };
    return userAxios.post(api, content, {
        headers: {
            Authorization: `Bearer ` + content.token, // Bearer 跟 token 中間有一個空格
        }
    }).then((res) => {
        return res;
    });
}