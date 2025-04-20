var md_delete_template = `

 <div id="delete_md_cd" class="flex-col flex justify-center items-center mt-3" >
                                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M39.9986 26.6667V40M39.9986 53.3334H40.0319M34.2986 9.53337L6.06527 56.6667C5.48316 57.6748 5.17516 58.8177 5.1719 59.9818C5.16864 61.1458 5.47024 62.2905 6.04669 63.3018C6.62315 64.3131 7.45436 65.1559 8.45763 65.7462C9.46091 66.3365 10.6013 66.6539 11.7653 66.6667H68.2319C69.3959 66.6539 70.5363 66.3365 71.5396 65.7462C72.5429 65.1559 73.3741 64.3131 73.9505 63.3018C74.527 62.2905 74.8286 61.1458 74.8253 59.9818C74.8221 58.8177 74.514 57.6748 73.9319 56.6667L45.6986 9.53337C45.1044 8.55372 44.2677 7.74376 43.2693 7.18164C42.2708 6.61953 41.1444 6.32422 39.9986 6.32422C38.8528 6.32422 37.7264 6.61953 36.728 7.18164C35.7295 7.74376 34.8928 8.55372 34.2986 9.53337Z" stroke="#E92727" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>

                                  <div class="flex-col flex w-[90%] items-center justify-center mt-3">
                                      <p class="block text-gray-700 mb-2 text-md font-semibold group-text">{{TXT}}</p>
                                      <p class="block text-gray-700 mb-2 text-sm flex items-center justify-center group-text text-center">{{MSG}}.</p>
                                  </div>
                              </div>

`;
var md_dialog_template = `

 <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M27.9297 40.0003L35.963 48.0669L52.063 31.9336" stroke="#10B981" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"></path>
                                      <path d="M35.8297 8.16445C38.1297 6.19779 41.8964 6.19779 44.2297 8.16445L49.4964 12.6978C50.4964 13.5645 52.363 14.2645 53.6964 14.2645H59.363C62.8964 14.2645 65.7964 17.1645 65.7964 20.6978V26.3645C65.7964 27.6645 66.4964 29.5645 67.363 30.5645L71.8964 35.8311C73.863 38.1311 73.863 41.8978 71.8964 44.2311L67.363 49.4978C66.4964 50.4978 65.7964 52.3645 65.7964 53.6978V59.3645C65.7964 62.8978 62.8964 65.7978 59.363 65.7978H53.6964C52.3964 65.7978 50.4964 66.4978 49.4964 67.3645L44.2297 71.8978C41.9297 73.8645 38.163 73.8645 35.8297 71.8978L30.563 67.3645C29.563 66.4978 27.6964 65.7978 26.363 65.7978H20.5964C17.063 65.7978 14.163 62.8978 14.163 59.3645V53.6645C14.163 52.3645 13.463 50.4978 12.6297 49.4978L8.12969 44.1978C6.19635 41.8978 6.19635 38.1645 8.12969 35.8645L12.6297 30.5645C13.463 29.5645 14.163 27.6978 14.163 26.3978V20.6645C14.163 17.1311 17.063 14.2311 20.5964 14.2311H26.363C27.663 14.2311 29.563 13.5311 30.563 12.6645L35.8297 8.16445Z" stroke="#10B981" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                  <div  class="flex-col flex w-[90%] items-center justify-center mt-3">
                                      <p class="block text-gray-700 mb-2 text-md font-semibold group-text">{{TXT}}</p>
                                      <p class="block text-gray-700 mb-2 text-sm flex items-center justify-center group-text text-center">{{MSG}}.</p>
                                  </div>

`;
var md_new_template = `
 <div class="flex bg-blue-100 justify-between items-center w-full h-12 p-2 border-b-[1px] border-blue-600">
                                  <label for="alert" class="block text-[16px] py-2 text-[13px] group-text text-blue-600 font-bold">{{TITLE}}</label>
                                  <svg class="cursor-pointer" data-modal-hide="new_md" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16.0013 30.3327C8.09464 30.3327 1.66797 23.906 1.66797 15.9993C1.66797 8.09268 8.09464 1.66602 16.0013 1.66602C23.908 1.66602 30.3346 8.09268 30.3346 15.9993C30.3346 23.906 23.908 30.3327 16.0013 30.3327ZM16.0013 3.66602C9.2013 3.66602 3.66797 9.19935 3.66797 15.9993C3.66797 22.7993 9.2013 28.3327 16.0013 28.3327C22.8013 28.3327 28.3346 22.7993 28.3346 15.9993C28.3346 9.19935 22.8013 3.66602 16.0013 3.66602Z" fill="#3b82f6"></path>
                                      <path d="M12.2271 20.7738C11.9738 20.7738 11.7205 20.6805 11.5205 20.4805C11.1338 20.0938 11.1338 19.4538 11.5205 19.0671L19.0671 11.5205C19.4538 11.1338 20.0938 11.1338 20.4805 11.5205C20.8671 11.9071 20.8671 12.5471 20.4805 12.9338L12.9338 20.4805C12.7471 20.6805 12.4805 20.7738 12.2271 20.7738Z" fill="#3b82f6"></path>
                                      <path d="M19.7738 20.7738C19.5205 20.7738 19.2671 20.6805 19.0671 20.4805L11.5205 12.9338C11.1338 12.5471 11.1338 11.9071 11.5205 11.5205C11.9071 11.1338 12.5471 11.1338 12.9338 11.5205L20.4805 19.0671C20.8671 19.4538 20.8671 20.0938 20.4805 20.4805C20.2805 20.6805 20.0271 20.7738 19.7738 20.7738Z" fill="#3b82f6"></path>
                                  </svg>
                              </div>
                              <div class="flex-col flex m-3 ">
                                  <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="40" cy="40" r="40" fill="#EBF2FF" />
                                      <path d="M40.1979 41.3014C40.0813 41.2848 39.9313 41.2848 39.7979 41.3014C36.8646 41.2014 34.5312 38.8014 34.5312 35.8514C34.5312 32.8348 36.9646 30.3848 39.9979 30.3848C43.0146 30.3848 45.4646 32.8348 45.4646 35.8514C45.4479 38.8014 43.1313 41.2014 40.1979 41.3014Z" stroke="#377DFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M51.2362 52.3016C48.2695 55.0182 44.3362 56.6682 40.0029 56.6682C35.6695 56.6682 31.7362 55.0182 28.7695 52.3016C28.9362 50.7349 29.9362 49.2016 31.7195 48.0016C36.2862 44.9682 43.7529 44.9682 48.2862 48.0016C50.0695 49.2016 51.0695 50.7349 51.2362 52.3016Z" stroke="#377DFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M39.9987 56.6673C49.2034 56.6673 56.6654 49.2054 56.6654 40.0007C56.6654 30.7959 49.2034 23.334 39.9987 23.334C30.794 23.334 23.332 30.7959 23.332 40.0007C23.332 49.2054 30.794 56.6673 39.9987 56.6673Z" stroke="#377DFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                      <rect x="0.625" y="55.625" width="29.75" height="29.75" rx="11.875" fill="#EBF2FF" />
                                      <rect x="0.625" y="55.625" width="29.75" height="29.75" rx="11.875" stroke="white" stroke-width="1.25" />
                                      <path d="M13.2856 62.249L8.15439 67.6803C7.96064 67.8865 7.77314 68.2928 7.73564 68.574L7.50439 70.599C7.42314 71.3303 7.94814 71.8303 8.67314 71.7053L10.6856 71.3615C10.9669 71.3115 11.3606 71.1053 11.5544 70.8928L16.6856 65.4615C17.5731 64.524 17.9731 63.4553 16.5919 62.149C15.2169 60.8553 14.1731 61.3115 13.2856 62.249Z" stroke="#377DFF" stroke-width="0.9375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M12.4297 63.1562C12.6984 64.8812 14.0984 66.2 15.8359 66.375" stroke="#377DFF" stroke-width="0.9375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M6.875 73.75H18.125" stroke="#377DFF" stroke-width="0.9375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>


                                  <div class=" flex w-[100%]  mt-3 justify-center items-center">
                                      <div class="flex w-full mt-1">
                                          <div class="flex-col w-[100%] ">
                                              <label for="example" class="block text-gray-700 mb-2 text-sm group-text text-[rgba(65, 68, 71, 1)] text-end">الاسم بالكامل</label>
                                              <input type="text"
                                                     id="example"
                                                     name="example"
                                                     class="w-[100%] h-9 px-2 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500 "
                                                     placeholder="">


                                          </div>
                                          <div class="flex-col w-[100%] pr-2">
                                              <label for="example" class="block text-gray-700 mb-2 text-sm group-text text-[rgba(65, 68, 71, 1)] text-end">المجموعة</label>
                                              <select class="w-[100%] h-9 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500" id="group">
                                                  <option class="w-full px-2" selected>اختر</option>
                                                  <option class="w-full px-2">Option 1</option>
                                                  <option class="w-full px-2">Option 2</option>
                                                  <option class="w-full px-2">Option 3</option>
                                              </select>




                                          </div>


                                      </div>
                                  </div>
                                  <div class=" flex w-[100%]  mt-[8px] justify-center items-center">
                                      <div class="flex w-full mt-1">
                                          <div class="flex-col w-[100%] ">
                                              <label for="example" class="block text-gray-700 mb-2 text-sm group-text text-[rgba(65, 68, 71, 1)] text-end">رقم الهاتف</label>
                                              <div class="flex">
                                                  <select class="w-[20%] h-9 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500" id="group">


                                                      <option class="w-full px-2">+963</option>
                                                      <option class="w-full px-2">+961</option>
                                                      <option class="w-full px-2">+962</option>
                                                      <option class="w-full px-2">+964</option>
                                                      <option class="w-full px-2">+967</option>
                                                  </select>

                                                  <input type="text"
                                                         id="example"
                                                         name="example"
                                                         class="w-[79%] h-9 mr-1 px-2 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500"
                                                         placeholder="">
                                              </div>



                                          </div>
                                          <div class="flex-col w-[100%] pr-2">
                                              <label for="example" class="block text-gray-700 mb-2 text-sm group-text text-[rgba(65, 68, 71, 1)] text-end">بريد إلكتروني</label>
                                              <input type="text"
                                                     id="example"
                                                     name="example"
                                                     class="w-[100%] h-9 px-2 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500"
                                                     placeholder="_">


                                          </div>


                                      </div>
                                  </div>
                                  <div class=" flex w-[100%]  mt-[8px] justify-center items-center">
                                      <div class="flex w-full mt-1">
                                          <div class="flex-col w-[100%] ">
                                              <label for="example" class="block text-gray-700 mb-2 text-sm group-text text-[rgba(65, 68, 71, 1)] text-end">كلمة المرور</label>
                                              <input type="password" id="password" id="example"
                                                     name="example"
                                                     class="w-[100%] h-9 px-2 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500" value="">



                                          </div>
                                          <div class="flex-col w-[100%] pr-2">
                                              <label for="example" class="block text-gray-700 mb-2 text-sm group-text text-[rgba(65, 68, 71, 1)] text-end">تأكيد كلمة المرور</label>
                                              <input type="password" id="password" id="example"
                                                     name="example"
                                                     class="w-[100%] h-9 px-2 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500" value="">


                                          </div>


                                      </div>
                                  </div>
                                  <div class="flex w-[100%] mt-[8px] justify-center items-center">
                                      <div class="flex w-full mt-1">
                                          <div class="flex-col w-[100%]">
                                              <label class="flex items-center space-x-3">
                                                  <div class="relative">
                                                      <input type="checkbox" class="sr-only" id="toggle1">
                                                      <div class="w-8 h-4 bg-gray-100 rounded-full shadow-inner transition-colors duration-300" id="toggle-bg1"></div>
                                                      <div class="absolute w-4 h-4 bg-white rounded-full shadow-md inset-y-0 left-0 transition-transform duration-300 ease-in-out" id="toggle-circle1"></div>
                                                  </div>
                                                  <span class="text-[12px] font-bold m-2 text-gray-700 group-text">هل تم التفعيل</span>
                                              </label>
                                          </div>
                                          <div class="flex-col w-[100%] pr-2">
                                              <label class="flex items-center space-x-3">
                                                  <div class="relative">
                                                      <input type="checkbox" class="sr-only" id="toggle2">
                                                      <div class="w-8 h-4 bg-gray-100 rounded-full shadow-inner transition-colors duration-300" id="toggle-bg2"></div>
                                                      <div class="absolute w-4 h-4 bg-white rounded-full shadow-md inset-y-0 left-0 transition-transform duration-300 ease-in-out" id="toggle-circle2"></div>
                                                  </div>
                                                  <span class="text-[12px] font-bold m-2 text-gray-700 group-text">هل تم التفعيل</span>
                                              </label>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="flex w-[100%] mt-[8px] justify-center items-center">
                                      <div class="flex w-full mt-1">
                                          <div class="flex-col w-[100%]">
                                              <label class="flex items-center space-x-2">
                                                  <input type="checkbox" class="w-4 h-4 bg-red-600 transition-colors duration-300">
                                                  <span class="text-[12px] font-bold m-2 text-gray-700 group-text">هل تم التفعيل</span>
                                              </label>
                                          </div>

                                          <div class="flex-col w-[100%] pr-2">
                                              <label class="flex items-center space-x-2">
                                                  <input type="checkbox" class="w-4 h-4 bg-red-600 transition-colors duration-300">
                                                  <span class="text-[12px] font-bold m-2 text-gray-700 group-text">هل تم التفعيل</span>
                                              </label>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="flex w-[100%] mt-[8px] justify-center items-center">
                                      <div class="flex w-full mt-1">
                                          <div class="flex-col w-[100%]">
                                              <label class="flex items-center space-x-2">
                                                  <input type="radio" name="radio-group" class="sr-only">
                                                  <div class="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center transition-all duration-300">
                                                      <div class="w-3 h-3 bg-blue-500 rounded-full scale-0 transition-transform duration-300"></div>
                                                  </div>
                                                  <span class="text-[12px] font-bold m-2 text-gray-700 group-text">هل تم التفعيل</span>
                                              </label>
                                          </div>


                                          <div class="flex-col w-[100%] pr-2">
                                              <label class="flex items-center space-x-2">
                                                  <input type="radio" name="radio-group" class="sr-only">
                                                  <div class="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center transition-all duration-300">
                                                      <div class="w-3 h-3 bg-blue-500 rounded-full scale-0 transition-transform duration-300"></div>
                                                  </div>
                                                  <span class="text-[12px] font-bold m-2 text-gray-700 group-text">هل تم التفعيل</span>
                                              </label>
                                          </div>
                                      </div>
                                  </div>

                                  

                              </div>
`;