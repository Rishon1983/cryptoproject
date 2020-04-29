import {getAllSettings, createSettings, updateSettings, deleteSettings} from '../models/settings.js'

export const getCymulateSettings = async (connection, data) => {
    console.log('getCymulateSettings');
    return await getAllSettings(connection, data);
};

export const createCymulateSettings = async (connection, data) => {
    console.log('createCymulateSettings');
    return await createSettings(connection, data);
};

export const updateCymulateSettings = async (connection, data) => {
    console.log('updateCymulateSettings');
    return await updateSettings(connection, data);
};

export const deleteCymulateSettings = async (connection, data) => {
    console.log('deleteCymulateSettings');
    return await deleteSettings(connection, data);
};

export default {
    getCymulateSettings,
    createCymulateSettings,
    updateCymulateSettings,
    deleteCymulateSettings
};