/**
 * Mocking client-server processing
 */
const _msg = 'message from DB';

export default {
    getMainMsg(cb) {
        setTimeout(() => cb(_msg), 3000);
    }
}