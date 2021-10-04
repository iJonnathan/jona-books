import jwt from 'jsonwebtoken'
var exports = {}

exports.openCertificate = function () {
  if (localStorage.hasOwnProperty('access-token') && localStorage.getItem('access-token') != null) {
    var token = localStorage.getItem('access-token')
    var decodedToken = jwt.decode(token, { complete: true })
    return decodedToken
  } else {
    return null
  }
}

exports.isCertificateValid = function () {
  var token = this.openCertificate()
  if (token != null) {
    var tokenExpiration = token.payload.exp
    if (tokenExpiration * 1000 < new Date()) {
      localStorage.removeItem('access-token')
      return false
    }
    return true
  }
  return false
}

exports.isAdmin = function () {
  var token = this.openCertificate()
  if (token != null && token.payload.user._role == 'admin') {
    return true
  } else {
    return false
  }
}

export default exports