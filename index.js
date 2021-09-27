const handleHamburgerClick = () => {
    let hamburgerActiveStatus = document.querySelector(".hamburgerActive");
    let nav = document.querySelector("nav");

    if(hamburgerActiveStatus.innerHTML === "0") {
        hamburgerActiveStatus.innerHTML = "1";
        nav.style.opacity = 1;
    }
    else {
        hamburgerActiveStatus.innerHTML = "0";
        nav.style.opacity = 0;
    }
}

const handleProductClick = () => {
    let productList = document.querySelector(".product .list");
    let productActiveStatus = document.querySelector(".productActive");
    let productActiveStatusMobile = document.querySelector(".productActiveMobile");
    let productArrow = document.querySelector(".product .arrow");

    const documentWidth = document.body.offsetWidth;

    if(documentWidth >= 1034) {
        if(productActiveStatus.innerHTML === "0") {
            productList.style.opacity = 1;
            productActiveStatus.innerHTML = "1";
            productArrow.classList.toggle("arrowActivated");
        }
        else {
            productList.style.opacity = 0;
            productActiveStatus.innerHTML = "0";
            productArrow.classList.toggle("arrowActivated");
        }
    }
    else {
        if(productActiveStatusMobile.innerHTML === "0") {
            productActiveStatusMobile.innerHTML = "1";
            productList.classList.toggle("listActivated");
            productArrow.classList.toggle("arrowActivated");
        }
        else {
            productActiveStatusMobile.innerHTML = "0";
            productList.classList.toggle("listActivated");
            productArrow.classList.toggle("arrowActivated");
        }
    }
}

const handleCompanyClick = () => {
    let companyList = document.querySelector(".company .list");
    let companyActiveStatus = document.querySelector(".companyActive");
    let companyActiveStatusMobile = document.querySelector(".companyActiveMobile");
    let companyArrow = document.querySelector(".company .arrow");

    const documentWidth = document.body.offsetWidth;

    if(documentWidth >= 1034) {
        if(companyActiveStatus.innerHTML === "0") {
            companyList.style.opacity = 1;
            companyActiveStatus.innerHTML = "1";
            companyArrow.classList.toggle("arrowActivated");
        }
        else {
            companyList.style.opacity = 0;
            companyActiveStatus.innerHTML = "0";
            companyArrow.classList.toggle("arrowActivated");
        }
    }
    else {
        if(companyActiveStatusMobile.innerHTML === "0") {
            companyActiveStatusMobile.innerHTML = "1";
            companyList.classList.toggle("listActivated");
            companyArrow.classList.toggle("arrowActivated");
        }
        else {
            companyActiveStatusMobile.innerHTML = "0";
            companyList.classList.toggle("listActivated");
            companyArrow.classList.toggle("arrowActivated");
        }
    }
}

const handleConnectClick = () => {
    let connectList = document.querySelector(".connect .list");
    let connectActiveStatus = document.querySelector(".connectActive");
    let connectActiveStatusMobile = document.querySelector(".connectActiveMobile");
    let connectArrow = document.querySelector(".connect .arrow");

    const documentWidth = document.body.offsetWidth;

    if(documentWidth >= 1034) {
        if(connectActiveStatus.innerHTML === "0") {
            connectList.style.opacity = 1;
            connectActiveStatus.innerHTML = "1";
            connectArrow.classList.toggle("arrowActivated");
        }
        else {
            connectList.style.opacity = 0;
            connectActiveStatus.innerHTML = "0";
            connectArrow.classList.toggle("arrowActivated");
        }
    }
    else {
        if(connectActiveStatusMobile.innerHTML === "0") {
            connectActiveStatusMobile.innerHTML = "1";
            connectList.classList.toggle("listActivated");
            connectArrow.classList.toggle("arrowActivated");
        }
        else {
            connectActiveStatusMobile.innerHTML = "0";
            connectList.classList.toggle("listActivated");
            connectArrow.classList.toggle("arrowActivated");
        }
    }
}