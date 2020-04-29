import getAllSettings from '../models/settings.js'

export const getCymulateSettings = async (connection, data) => {
    console.log('getCymulateSettings');
    return await getAllSettings(connection, data);
};

const createCymulateSettings = (req, res) => {
    console.log('createCymulateSettings');

    res.json({
        ok: true,
        result: {},
        errMsg: ''
    });
};

const updateCymulateSettings = (req, res) => {
    console.log('updateCymulateSettings');

    res.json({
        ok: true,
        result: {},
        errMsg: ''
    });
};

const deleteCymulateSettings = (req, res) => {
    console.log('deleteCymulateSettings')

    res.json({
        ok: true,
        result: {},
        errMsg: ''
    });
};

export default {
    getCymulateSettings,
    createCymulateSettings,
    updateCymulateSettings,
    deleteCymulateSettings
};