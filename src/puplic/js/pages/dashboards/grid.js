const renderImg = (params) => {
    const element = document.createElement("div");
    const imageElement = document.createElement("img");
    if (params.value) {
        imageElement.src = params.value;
    } else {
        imageElement.src =
            "https://www.ag-grid.com/example-assets/weather/fire-minus.png";
    }
    element.className = "cell-img";
    element.appendChild(imageElement);
    return element;
};

const columnDefs = [
    {
        field: "productID",
        headerName: "ID",
        resizable: true,
        width: "auto",
        maxWidth: 100,
    },
    {
        field: "productName",
        headerName: "Name",
        resizable: true,
        suppressSizeToFit: true,
        width: 350,
    },
    {
        field: "productPrice",
        headerName: "Price",
        resizable: true,
        cellRenderer: (params) => {
            return params.value.toLocaleString("VN-vi") + "đ";
        },
    },
    { field: "productAmount", headerName: "Amount", resizable: true },
    { field: "productBrand", headerName: "Brand", resizable: true },
    { field: "productType", headerName: "Type", resizable: true },
    {
        field: "discount",
        headerName: "Discount",
        resizable: true,
        cellRenderer: (params) => {
            return params.value + "%";
        },
    },
    {
        field: "productImg",
        headerName: "Picture",
        resizable: false,
        autoHeight: true,
        filter: false,
        sortable: false,
        cellRenderer: renderImg,
    },
];
const gridOptions = {
    resizable: true,
    initialWidth: "30%",
    wrapHeaderText: true,
    autoHeaderHeight: true,
    columnDefs,
    defaultColDef: { sortable: true, filter: true },
    rowSelection: "multiple",
    animateRows: true,
    pagination: true,
    // paginationPageSize: 50,
    onCellDoubleClicked: async (params) => {
        await getDetailProduct(params.data.productID);
        $("#myModal").modal("show");
    },
    excelStyles: [
        {
            id: "productName",
            alignment: {
                vertical: "Center",
                horizontal: "Center",
            },
        },
    ],
};

const getDataTableGrid = () => {
    const eGridDiv = document.getElementById("myGrid");
    new agGrid.Grid(eGridDiv, gridOptions);
    eGridDiv.style.setProperty("width", "100%");
    $.ajax({
        url: `http://localhost:8080/products`,
        method: "GET",
        dataType: "JSON",
        success: function (data) {
            gridOptions.api.setServerSideDatasource(data);
            gridOptions.api.setRowData(data);
            gridOptions.api.sizeColumnsToFit();
            gridOptions.api.deselectAll();
            const footer = document.getElementById("ag-26");
            const pageSize = document.createElement("select");
            pageSize.setAttribute("id", "page-size");
            pageSize.setAttribute("onChange", "onPageSizeChanged()");
            pageSize.setAttribute("class", "member-form");
            pageSize.innerHTML = appendPageSizeOnFooter([50, 100, 200]);
            footer.appendChild(pageSize);
        },
    });
};

const onPageSizeChanged = () => {
    gridOptions.api.showLoadingOverlay();
    let value = document.getElementById("page-size").value;
    setTimeout(() => {
        gridOptions.api.paginationSetPageSize(Number(value));
        gridOptions.api.hideOverlay();
    }, 500);
};

const appendPageSizeOnFooter = (arr) => {
    let optionsHTML = "";
    arr.forEach((e) => {
        optionsHTML += `<option value="${e}">${e}</option>`;
    });
    return optionsHTML;
};

const getDetailProduct = (id) => {
    $.ajax({
        url: `http://localhost:8080/detail-product/${id}`,
        method: "GET",
        dataType: "JSON",
        success: function (data) {
            const {
                productID,
                productName,
                productPrice,
                productImg,
                productAmount,
                rating,
                discount,
                freeShip,
                productBrand,
                productType,
            } = data;
            console.log(productType);
            $("#productName").val(productName);
            $("#productPrice").val(productPrice);
            $("#productImg").val(productImg);
            $("#freeShip").val(freeShip);
            $("#productBrand").val(productBrand);
            $("#productType").val(productType);
            $("#productAmount").val(productAmount);
            $("#rating").val(rating);
            $("#discount").val(discount);
            $("#myModal .modal-footer").html(`
                    <button onclick="updateProduct('${productID}')" type="button" 
                    class="btn btn-success" id="capnhatSP">
                    Cập nhật sản phẩm
                    </button>`);
        },
        error: function (response) {
            // alert("server error occured");
            console.log(response);
        },
    });
};

getDataTableGrid();
