import CryptoJS from 'crypto-js'

var key = CryptoJS.enc.Utf8.parse('7890123456qazwsx')

/**
 * 加密
 *  @param {*} word 
 */
export function encrypt(word) {
  var srcs = CryptoJS.enc.Utf8.parse(word)
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString()
}

/**
 * 解密
 * @param {*} word 
 */
export function decrypt(word) {
  var decrypt = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return CryptoJS.enc.Utf8.stringify(decrypt).toString()
}
