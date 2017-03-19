const camera = require("nativescript-camera")

exports.pageLoad = (args) => {
  page = args.object
  camera.requestPermissions()
//  page.bindingContext = pageData
}

exports.takePhoto = () => {
  let opt = {
    width: 300,
    height: 300,
    keepAspectRatio: true,
    saveToGallery: true,
  }
  camera.takePicture(opt).then((img) => {
    let photo = page.getViewById('photo')
    photo.src = img
    console.dump(img)
    camera.requestPermissions()
    console.log('error')
  })
}