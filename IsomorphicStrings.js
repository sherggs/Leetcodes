/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    let sMap = {}
    let tMap = {}

    for(let i = 0; i < s.length; i++) {
        if (sMap[s[i]] && sMap[s[i]] !== t[i]) {
            return false
        }
        tMap[t[i]] = s[i]
        sMap[s[i]] = t[i]
    }

    if (Object.keys(sMap).length !== Object.keys(tMap).length) {
        return false
    }

    return true
};