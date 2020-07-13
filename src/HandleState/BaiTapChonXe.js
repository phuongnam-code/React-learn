import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

   // bước 1: dàn layout
   // bước 2: xác định nguồn dữ liệu thay đổi => tổ chức lưu trữ
   // bước 3: xây dụng chức năng

   state = {
      srcImg: './img/red-car.jpg'
   }

   changeColor = (newImgSrc) => {
      this.setState({
         srcImg: newImgSrc
      })
   }


   render() {
      return (
         <div >
            <div className='container'>
               <h1 className='my-4'>Bài tập chọn xe</h1>
               <div class="row">
                  <div class='col-6'>
                     <img src={'./img/red-car.jpg'} alt='car' className='w-100' />
                     <strong>Honda Civic</strong>
                  </div>
                  <div class='col-6'>
                     <div className='row'>
                        <div className='col-3'>
                           <button onClick={() => {
                              this.changeColor('./img/red-car.jpg')
                           }}>Red
                              <img src={'./img/icon-red.jpg'} alt='car' className='w-50' />
                           </button>
                        </div>
                        <div className='col-3'>
                           <button onClick={() => {
                              this.changeColor('./img/black-car.jpg')
                           }}>Black
                              <img src={'./img/icon-black.jpg'} alt='car' className='w-50' />
                           </button>
                        </div>
                        <div className='col-3'>
                           <button onClick={() => {
                              this.changeColor('./img/silver-car.jpg')
                           }}>Silver
                              <img src={'./img/icon-silver.jpg'} alt='car' className='w-50' />
                           </button>
                        </div>
                        <div className='col-3'>
                           <button onClick={() => {
                              this.changeColor('./img/steel-car.jpg')
                           }}>Steel
                              <img src={'./img/icon-steel.jpg'} alt='car' className='w-50' />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
