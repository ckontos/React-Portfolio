const helpers = {
    navOutsideClick: (e) => {
        const container = document.getElementById("mySideNav");
        
        let target = (e && e.target) || (event && event.srcElement);
        let width = '0';
        
        while (target.parentNode) {
            if (target == container) {
                width ='250px';
                break;
            }
            target = target.parentNode;
        }
    
        container.style.width = width;
    }
}

export default helpers;