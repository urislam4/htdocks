// const tabItems = document.querySelectorAll('.tabheader_item')
// const tabContent = document.querySelectorAll('.tabcontent')
// const tabParent = document.querySelector('.tabheader_items')

// const hideTabContent = () => {
//     tabContent.forEach((item) => {
//         item.style.display = 'none'
//     })
//     tabItems.forEach((item) => {
//         item.classList.remove("tabheader__item_active")
//     })
// }

// const showContent = (i = 0) => {
//     tabContent[i].style.display = 'block'
//     tabItems[i].classList.add('tabheader__item_active')
// }

// hideTabContent()
// showContent(0)
// tabParent.addEventListener("click", (event) => {
//     const target = event.target
//     if(!target.classList.contains('tabheader__item_active')){
//         tabItems.forEach(item, (idx) => {
//             if(target == item){
//                hideTabContent()
//                showContent(idx)
//             }
//         })
//     }
// })

// const modal = document.querySelector(".modal")
// const openModal = document.querySelector('#open')
// const closeModal = document.querySelector('.modal__close')

// openModal.addEventListener('click', () => {
//     modal.style.display = ('show')
//     modal.style.remove('hide')
// })
// closeModal.addEventListener("click", () => {
//     modal.style.add = ('hide')
//     modal.classList.remov = ("show")
    
// })

// const forms = document.querySelectorAll('form');

// const message = {
//     loading: "Загрузка...",
//     success: "Success",
//     error: "Error"


// }

// forms.forEach((form,idx) => {
//  postData(form)
// })

// function postData(form){
// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const messegBlock = document.createElement("div")
//   from.append(messegBlock);
//   messegBlock.textContent = message.loading
//   const request = new XMLHttpRequest()
//   request.open('POST','server.php')
//   request.setRequestHeader('Content-Type', 'application/json')

//   const formDate = new formDate(form)

//   const object = {}
//   formDate.forEach((item,idx) => {
//     object[idx] = item
//   })
// //   console.log(object);
//   request.send(JSON.stringify(object))
//   request.addEventListener("load", () => {
//    if(request.status == 200) {
//       console.log(request.response)
//       messegBlock.textContent = message.success
//     }else{
//       messegBlock.textContent = message.error
//      }
//    })
//  })
 
// }