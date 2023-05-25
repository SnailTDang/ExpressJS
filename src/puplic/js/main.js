const $ = (el) => {
    return document.getElementById(el);
};

const myForm = $("myForm");

function showDetails() {
    document.querySelector("#myModal .modal-footer").innerHTML = `
        <button onclick="updateProduct('${123}')" type="button" class="btn btn-success" id="capnhatSP">
        Cập nhật sản phẩm
        </button>
    `;
}

$("btnThemSP").addEventListener("click", function () {
    document.querySelector("#myModal .modal-footer").innerHTML = `
    <button type="submit" class="btn btn-success" id="themSP">
        Thêm sản phẩm
        </button>
    `;
    myForm.reset();
    myForm.setAttribute("method", "post");
    myForm.setAttribute("action", "/create-product");
});
