
const REACT_APP_TEZOS_RPC_URL = 'https://hangzhounet.api.tez.ie';
const SCORE_FA12_V1_CONTRACT_HANGZHOUNET = 'KT1QTVq7xqaQzFFWBkyvDZofKQ4Sq6x7ATeY';
const SCORER_V1_CONTRACT_HANGZHOUNET = 'KT19MZYkKgeZZ4TRUYrEQKnPZE9K9Dvop35G';
const WXTZ_V1_CONTRACT_HANGZHOUNET = 'KT1BPoewfRbaonhMTqbukeNLMPxyH8itYmDf';
const DEX_V1_CONTRACT_HANGZHOUNET = 'KT1TmaLdNqKzBSr4UsBZRSCvkvMn1SHKch9Q';
const PREFERRED_NETWORK_TYPE = 'hangzhounet';

const LEVELS = [SCORER_V1_CONTRACT_HANGZHOUNET]
var currentLevel = 0;

function setCurrentLevel(level) {
    currentLevel = level
}

function getCurrentLevel() {
    return currentLevel
}

export {
    REACT_APP_TEZOS_RPC_URL,
    SCORE_FA12_V1_CONTRACT_HANGZHOUNET,
    SCORER_V1_CONTRACT_HANGZHOUNET,
    WXTZ_V1_CONTRACT_HANGZHOUNET,
    DEX_V1_CONTRACT_HANGZHOUNET,
    PREFERRED_NETWORK_TYPE,
    LEVELS,
    setCurrentLevel,
    getCurrentLevel
}