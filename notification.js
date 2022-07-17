// alert("HI");

function pushNotification() {
//   iziToast.warning({
//     position: 'bottomRight',
//     title: "Hey",
//     message: "What would you like to add?",
//   });

  iziToast.warning({
    id:'warnings',
    title: 'Caution',
    timeout: false,
    iconText: '__',
    message: 'You forgot important data',
});

}




// let notificationObject ={
//     id,
//     title,
//     timeout:false,
//     iconText,
//     message
// }

// function pushNotification(notifyObj) {
// //   iziToast.warning({
// //     position: 'bottomRight',
// //     title: "Hey",
// //     message: "What would you like to add?",
// //   });

//   iziToast.warning({
//     id: notifyObj.id,
//     title: notifyObj.title,
//     timeout: notifyObj.timeout,
//     iconText: '__',
//     message: notifyObj.message,
// });

// }