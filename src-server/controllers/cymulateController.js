import axios from 'axios';

const sendDataToServer2 = async (data) => {
// const sendDataToServer2 = async (action, value = null) => {
    //passport.js JWT

    // const data = {
    //     action,
    //     value
    // };
    // const encryptedData = encryptIt(data);
    // const encryptedData = encrypt(JSON.stringify(data));
    // const result = await axios.post('http://localhost:3000/rfc', encryptedData);



    // console.log(data);
    // const result =  await axios.post('http://localhost:3000/rfc', data);
    // return result;


    let result = {};

    await axios.post('http://localhost:3000/rfc', data)
        .then((response) => {
            result = response.data;
        })
        .catch((error) => {
            console.log(error);
        });

    return result;

    // axios.post('http://localhost:3000/rfc', data).then(res => {
    //     console.log(res);
    //     return res;
    // })

    // const decryptedData = decrypt(result);
    // return (JSON.parse(decryptedData));
}

const cymulateSettings = async (req, res) => {
    console.log('cymulateSettings');
    const data = req.body;
    const settingsArray = await sendDataToServer2(data);
    // const settingsArray = await getAllSettings(data);
    await res.json({
        ok: true,
        result: {
            settingsArray: settingsArray
        },
        errMsg: ''
    });
};

export default {
    cymulateSettings
};