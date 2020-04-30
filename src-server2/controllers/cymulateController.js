import {getAllSettings, createSettings, updateSettings, deleteSettings} from '../models/settings.js'

export const getCymulateSettings = async (data) => {
    console.log('getCymulateSettings');
    return await getAllSettings(data);
};

export const createCymulateSettings = async (data) => {
    console.log('createCymulateSettings');
    return await createSettings(data);
};

export const updateCymulateSettings = async (data) => {
    console.log('updateCymulateSettings');
    return await updateSettings(data);
};

export const deleteCymulateSettings = async (data) => {
    console.log('deleteCymulateSettings');
    return await deleteSettings(data);
};

export default {
    getCymulateSettings,
    createCymulateSettings,
    updateCymulateSettings,
    deleteCymulateSettings
};