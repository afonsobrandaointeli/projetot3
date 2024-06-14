const sinon = require("sinon");

const mockAsync = (model, module, result = null) => {
    return sinon.stub(model, module).resolves(result);
};

const RESPONSE = {
    json: function (data) {
        return data;
    },
};
const USER = {
    id: "cce825bf-09d5-4c8e-a9be-9f4f4a9dba5d",
    username: "Julin",
    email: "joão.s@gmail.com",
    bio: "Sou o julin",
    password: "password123",
};

const FILE = (fieldName) => {
    return {
        upload: async (options, callback = async () => {}) => {
            console.log("Simulando upload do arquivo: ", fieldName);
            console.log("Opções: ", options);
            console.log("Callback: ", callback);
            await callback(null, [{ fd: "caminho/do/arquivo" }]);
        },
    };
};

module.exports = {
    mockAsync,
    RESPONSE,
    USER,
    FILE,
};
