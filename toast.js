
    //Toast function
function toast({
    title='',
    message='',
    type='',
    duration =3000
}) {
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');
        const timeremove = duration + 1000;

        //Auto remove 
       const autoRemoveChild =  setTimeout(function(){
            main.removeChild(toast)
        },timeremove)

        //Manual Remove
        toast.onclick = function(e){
           if(e.target.closest('.toast__close')){
            main.removeChild(toast);
            clearTimeout(autoRemoveChild)
           }
        }
        const icons = {
            success : 'fa-solid fa-circle-check',
            info : 'fa-solid fa-circle-question',
            warning : 'fa-solid fa-circle-exclamation',
            error : 'fa-solid fa-circle-radiation'
        };
        const icon = icons[type]
        const delay = (duration/1000).toFixed(2);
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
       
        toast.innerHTML = `
                <div class="toast__icon">
                <i class="${icon}"></i>   
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fa-solid fa-circle-xmark"></i>   
                </div>
        `;
        main.appendChild(toast);

     
    }

}

function showSuccessToast(){
    toast({
        title: 'Login Success',
        message: 'Chúc mừng bạn đã đăng nhập thành công Website của tôi. Rất chào mừng bạn.',
        type : 'success',
        duration : 3000
    })
}
function showErrorToast(){
    toast({
        title: 'Login Error',
        message: 'Tên đăng nhập hoặc mật khẩu của bạn chưa đúng. Vui lòng đăng nhập lại',
        type : 'error',
        duration : 3000
    })
}
function showWarningToast(){
    toast({
        title: 'Login Warning',
        message: 'Tài khoản của bạn đang được một người khác sử dụng. Bạn vui lòng kiểm tra và nâng cấp bảo vệ cho tài khoản của mình',
        type : 'warning',
        duration : 2000
    })
}
function showInfoToast(){
    toast({
        title: 'Login Info',
        message: 'Tên đăng nhập và mật khẩu đúng cú pháp phải bao gồm kí tự in hoa, kí tự đặc biệt và số nguyên dương',
        type : 'info',
        duration : 2000
    })
}