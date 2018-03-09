const image = {
  toBase64 (file, handelFile) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      handelFile(reader.result)
    }
    reader.onerror = function (error) {
      console.log('Error: ', error)
    }
  },
  isImageFile (fileBase64) {
    return ~fileBase64.indexOf('image')
  }
}

export default image
