const handleProductClick = () => {
    let productList = document.querySelector(".product .list");
    let productActiveStatus = document.querySelector(".productActive");
    let productArrow = document.querySelector(".product .arrow");

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

const handleCompanyClick = () => {
    let companyList = document.querySelector(".company .list");
    let companyActiveStatus = document.querySelector(".companyActive");
    let companyArrow = document.querySelector(".company .arrow");

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

const handleConnectClick = () => {
    let connectList = document.querySelector(".connect .list");
    let connectActiveStatus = document.querySelector(".connectActive");
    let connectArrow = document.querySelector(".connect .arrow");

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