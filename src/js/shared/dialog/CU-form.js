import { html } from "lit";

export const CUTableForm = ({ buttonTitle, headTitle,addHref }) => {
  const button = addHref ? html`
    <a href=${addHref} 
    class="flex  gap-x-2 py-[12px] text-white px-[16px] rounded-[8px] bg-[#377DFF]"
  >
    ${buttonTitle}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
        fill="white"
      />
      <path
        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
        fill="white"
      />
    </svg>
  </button>
  ` : html `
    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal"
    class="flex  gap-x-2 py-[12px] text-white px-[16px] rounded-[8px] bg-[#377DFF]"
  >
    ${buttonTitle}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
        fill="white"
      />
      <path
        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
        fill="white"
      />
    </svg>
  </button>
  `
  return html`
  ${button}

  <!-- Main modal -->
<div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[9999] justify-center items-center w-full md:inset-0 h-[calc(100%-5rem)] max-h-full">
<div class="relative p-4 w-full max-w-[50%] max-h-full">
  <!-- Modal content -->
  <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
      <!-- Modal header -->



<div
            class="flex items-center justify-between p-4 md:p-[15px] border-b rounded-t bg-[#EBF2FF] border-gray-200"
          >
            <h3 class="text-sm font-bold text-[#377DFF]">${headTitle}</h3>
            <button
              type="button"
              class="text-[#377DFF] bg-transparent rounded-lg ms-auto inline-flex justify-center items-center"
              data-modal-toggle="crud-modal"
            >
              <svg
             width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0013 30.3327C8.09464 30.3327 1.66797 23.906 1.66797 15.9993C1.66797 8.09268 8.09464 1.66602 16.0013 1.66602C23.908 1.66602 30.3346 8.09268 30.3346 15.9993C30.3346 23.906 23.908 30.3327 16.0013 30.3327ZM16.0013 3.66602C9.2013 3.66602 3.66797 9.19935 3.66797 15.9993C3.66797 22.7993 9.2013 28.3327 16.0013 28.3327C22.8013 28.3327 28.3346 22.7993 28.3346 15.9993C28.3346 9.19935 22.8013 3.66602 16.0013 3.66602Z"
                  fill="#377DFF"
                />
                <path
                  d="M12.2271 20.7738C11.9738 20.7738 11.7205 20.6805 11.5205 20.4805C11.1338 20.0938 11.1338 19.4538 11.5205 19.0671L19.0671 11.5205C19.4538 11.1338 20.0938 11.1338 20.4805 11.5205C20.8671 11.9071 20.8671 12.5471 20.4805 12.9338L12.9338 20.4805C12.7471 20.6805 12.4805 20.7738 12.2271 20.7738Z"
                  fill="#377DFF"
                />
                <path
                  d="M19.7738 20.7738C19.5205 20.7738 19.2671 20.6805 19.0671 20.4805L11.5205 12.9338C11.1338 12.5471 11.1338 11.9071 11.5205 11.5205C11.9071 11.1338 12.5471 11.1338 12.9338 11.5205L20.4805 19.0671C20.8671 19.4538 20.8671 20.0938 20.4805 20.4805C20.2805 20.6805 20.0271 20.7738 19.7738 20.7738Z"
                  fill="#377DFF"
                />
              </svg>

              <span class="sr-only">Close modal</span>
            </button>
          </div>

<!--  End Head Model -->

<div class='px-[25px] mt-3 cursor-pointer'>
<label for='uploadAvatar' class='relative w-[80px] h-[80px] bg-[#EBF2FF] flex justify-center items-center rounded-full cursor-auto'> 
<img class='w-[40px] h-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='../../../src/images/icons/user.png'/>
</label>
<input type='file' id='uploadAvatar' value='uploadAvatar' class='hidden' />

</div>

    
      <!-- Modal body -->
      <form class="p-4 md:p-5">
          <div class="grid gap-4 mb-4 grid-cols-2">

<div class="col-span-1">
                  <label for="name" class="block mb-2 text-sm font-medium text-[#414447]">الاسم بالكامل</label>
                  <input type="text" name="name" id="name" class=" border border-[#EBEBEC] text-gray-900 text-sm rounded-[6px] w-full p-[12px] focus:ring-0 focus:border-[#EBEBEC]" placeholder="محمد رضا ..." required="">
              </div>

                  <div class="col-span-1">
        <label for="category" class="block mb-2 text-sm font-medium text-[#414447] ">المجموعة</label>
                  <select id="category" class="border border-[#EBEBEC] text-gray-900 text-sm rounded-[6px] w-full p-[12px] focus:ring-0 focus:border-[#EBEBEC]">
                      <option selected="">- اختر -</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                  </select>
              </div>


                  <div class="col-span-1">
                  <label for="name" class="block mb-2 text-sm font-medium text-[#414447]">رقم الهاتف</label>
                  <input type="text" name="name" id="name" class="border border-[#EBEBEC] text-gray-900 text-sm rounded-[6px] w-full p-[12px] focus:ring-0 focus:border-[#EBEBEC]" placeholder="+966" required="">
              </div>
              
                  <div class="col-span-1">
                  <label for="name" class="block mb-2 text-sm font-medium text-[#414447]">بريد إلكتروني</label>
                  <input type="text" name="name" id="name" class="border border-[#EBEBEC] text-gray-900 text-sm rounded-[6px] w-full p-[12px] focus:ring-0 focus:border-[#EBEBEC]" placeholder="example@gmail.com" required="">
              </div>


                        <div class="col-span-1">
                  <label for="name" class="block mb-2 text-sm font-medium text-[#414447]">كلمة المرور</label>
                  <input type="text" name="name" id="name" class="border border-[#EBEBEC] text-gray-900 text-sm rounded-[6px] w-full p-[12px] focus:ring-0 focus:border-[#EBEBEC]" placeholder="*************" required="">
              </div>
              
                  <div class="col-span-1">
                  <label for="name" class="block mb-2 text-sm font-medium text-[#414447]">تأكيد كلمة المرور</label>
                  <input type="text" name="name" id="name" class="border border-[#EBEBEC] text-gray-900 text-sm rounded-[6px] w-full p-[12px] focus:ring-0 focus:border-[#EBEBEC]" placeholder="*************" required="">
              </div>


                  <div class="col-span-1">
<label class="inline-flex items-center cursor-pointer">
<input type="checkbox" value="" class="sr-only peer" checked>
<div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 ">هل تم التفعيل</span>
</label>
                  </div>

                                          <div class="col-span-1">
<label class="inline-flex items-center cursor-pointer">
<input type="checkbox" value="" class="sr-only peer" >
<div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 ">هل تم التفعيل</span>
</label>
                  </div>


<div class="col-span-1">
<div class="flex items-center mb-4">
<input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
<label for="checkbox-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">هل تم التفعيل</label>
</div>
</div>

<div class="col-span-1">
<div class="flex items-center mb-4">
<input id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
<label for="checkbox-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">هل تم التفعيل</label>
</div>
</div>

<div class="col-span-1">
<div class="flex items-center mb-4">
<input id="country-option-1" type="radio" name="countries" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked>
<label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
هل تم التفعيل
</label>
</div>
</div>


<div class="col-span-1">
<div class="flex items-center mb-4">
<input id="country-option-1" type="radio" name="countries" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked>
<label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
هل تم التفعيل
</label>
</div>
</div>

      
          </div>

          <div class="flex gap-x-1 justify-between flex-wrap">
          <button type="submit" class="   text-white w-[170px]  items-center bg-[#377DFF] font-semibold rounded-[6px] text-sm py-[12px] px-[32px] text-center ">
            حفظ
          </button>

            <button   data-modal-toggle="crud-modal" type="button" class="text-[#377DFF] w-[170px] items-center bg-[#EBF2FF] font-semibold rounded-[6px] text-sm py-[16px] px-[32px] text-center ">
            الغاء
          </button>
          </div>
      </form>
      
  </div>
</div>
</div> 





  <!-- Toast -->
  
        <div id="" class="gap-3 border hidden items-center w-full max-w-xs p-4 space-x-4  rounded-lg shadow-sm">
      
        <div class='flex gap-3 mb-3'>
        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="40" height="40" rx="6" fill="#10B981"/>
          <path d="M20 10.5C14.49 10.5 10 14.99 10 20.5C10 26.01 14.49 30.5 20 30.5C25.51 30.5 30 26.01 30 20.5C30 14.99 25.51 10.5 20 10.5ZM24.78 18.2L19.11 23.87C18.97 24.01 18.78 24.09 18.58 24.09C18.38 24.09 18.19 24.01 18.05 23.87L15.22 21.04C14.93 20.75 14.93 20.27 15.22 19.98C15.51 19.69 15.99 19.69 16.28 19.98L18.58 22.28L23.72 17.14C24.01 16.85 24.49 16.85 24.78 17.14C25.07 17.43 25.07 17.9 24.78 18.2Z" fill="white"/>
          </svg>
          <div>
                <h5 class="ps-4  text-[#0A0C33]">إضافة مستخدم بنجاح
                <p class='text-[#6C6D85] text-[12px]'>تم إضافة المستخدم بنجاح </p>
          </div>
          </div>
<svg width="240" height="4" viewBox="0 0 240 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.945312" width="239.056" height="4" rx="2" fill="#10B981"/>
</svg>

          
          </div>
        
          
          
`;
};
