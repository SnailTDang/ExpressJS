const $$ = (el) => {
    return document.getElementById(el);
};

const myForm = $$("myForm");

$$("btnThemSP").addEventListener("click", function () {
    document.querySelector("#myModal .modal-footer").innerHTML = `
    <button type="submit" class="btn btn-success" id="themSP">
        Thêm sản phẩm
        </button>
    `;
    myForm.reset();
    myForm.setAttribute("method", "post");
    myForm.setAttribute("action", "/");
});
